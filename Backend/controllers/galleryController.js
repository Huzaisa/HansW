const prisma = require('../models/prismaClient');
const { deleteFile } = require('../utils/fileUtils');

exports.getAll = async (req, res) => {
    const galleries = await prisma.gallery.findMany();
    res.json(galleries);
};

exports.add = async (req, res) => {
    const { name, eventDate } = req.body;
    const imageUrls = req.files.map((file) => `/uploads/${file.filename}`);

    const newGallery = await prisma.gallery.create({
        data: {
            name,
            eventDate: new Date(eventDate),
            images: JSON.stringify(imageUrls),
            userId: req.user.id,
        },
    });
    res.status(201).json(newGallery);
};

exports.edit = async (req, res) => {
    const { id } = req.params;
    const { name, eventDate } = req.body;

    // Get the existing gallery
    const oldGallery = await prisma.gallery.findUnique({ where: { id: parseInt(id) } });

    // Delete old images if new ones are uploaded
    if (req.files && oldGallery.images) {
        const oldImages = JSON.parse(oldGallery.images);
        oldImages.forEach((image) => deleteFile(`./uploads${image}`));
    }

    const newImages = req.files.map((file) => `/uploads/${file.filename}`);
    const updatedGallery = await prisma.gallery.update({
        where: { id: parseInt(id) },
        data: {
            name,
            eventDate: new Date(eventDate),
            images: JSON.stringify(newImages.length ? newImages : JSON.parse(oldGallery.images)),
        },
    });
    res.json(updatedGallery);
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    // Find and delete associated images
    const gallery = await prisma.gallery.findUnique({ where: { id: parseInt(id) } });
    if (gallery.images) {
        const images = JSON.parse(gallery.images);
        images.forEach((image) => deleteFile(`./uploads${image}`));
    }

    await prisma.gallery.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
};
