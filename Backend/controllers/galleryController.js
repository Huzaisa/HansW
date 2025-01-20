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
            images: imageUrls, // Simpan array URL gambar
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

        // Hapus gambar lama jika ada gambar baru yang diunggah
        if (req.files && oldGallery.images.length) {
            oldGallery.images.forEach((image) => deleteFile(`./uploads${image}`));
        }

        const newImages = req.files.map((file) => `/uploads/${file.filename}`);

        const updatedGallery = await prisma.gallery.update({
            where: { id: parseInt(id) },
            data: {
                name,
                eventDate: new Date(eventDate),
                images: newImages.length ? newImages : oldGallery.images,
            },
        });
        res.json(updatedGallery);
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    // Find and delete associated images
    const gallery = await prisma.gallery.findUnique({ where: { id: parseInt(id) } });

        // Hapus gambar terkait
        if (gallery.images.length) {
            gallery.images.forEach((image) => deleteFile(`./uploads${image}`));
        }

        await prisma.gallery.delete({ where: { id: parseInt(id) } });
        res.status(204).send();
};
