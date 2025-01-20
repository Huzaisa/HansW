// menuController.js
const prisma = require('../models/prismaClient');
const { deleteFile } = require('../utils/fileUtils');

exports.getAll = async (req, res) => {
    const menus = await prisma.menu.findMany();
    res.json(menus);
};

exports.add = async (req, res) => {
    const { name, description, price } = req.body;
    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    const newMenu = await prisma.menu.create({
        data: {
            name,
            description,
            price: parseFloat(price),
            images, // Menyimpan array gambar
            userId: req.user.id,
        },
    });
    res.status(201).json(newMenu);
};

exports.edit = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const oldMenu = await prisma.menu.findUnique({ where: { id: parseInt(id) } });
    if (req.files && oldMenu.images) {
        oldMenu.images.forEach(image => deleteFile(`./uploads${image}`)); // Menghapus gambar lama
    }

    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : oldMenu.images;

    const updatedMenu = await prisma.menu.update({
        where: { id: parseInt(id) },
        data: { name, description, price: parseFloat(price), images },
    });
    res.json(updatedMenu);
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    const menu = await prisma.menu.findUnique({ where: { id: parseInt(id) } });

    if (menu.images) {
        menu.images.forEach(image => deleteFile(`./uploads${image}`)); // Menghapus gambar
    }

    await prisma.menu.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
};
