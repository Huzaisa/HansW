const prisma = require('../models/prismaClient');
const { deleteFile } = require('../utils/fileUtils');

exports.getAll = async (req, res) => {
    const menus = await prisma.menu.findMany();
    res.json(menus);
};

exports.add = async (req, res) => {
    const { name, description, price } = req.body;

    // Only allow one file to be uploaded
    if (!req.file) {
        return res.status(400).json({ error: 'Please upload an image for the menu.' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    const newMenu = await prisma.menu.create({
        data: {
            name,
            description,
            price: parseFloat(price),
            imageUrl,
            userId: req.user.id,
        },
    });
    res.status(201).json(newMenu);
};


exports.edit = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const oldMenu = await prisma.menu.findUnique({ where: { id: parseInt(id) } });
    if (req.file && oldMenu.imageUrl) deleteFile(`./uploads${oldMenu.imageUrl}`);

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : oldMenu.imageUrl;

    const updatedMenu = await prisma.menu.update({
        where: { id: parseInt(id) },
        data: { name, description, price: parseFloat(price), imageUrl },
    });
    res.json(updatedMenu);
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    const menu = await prisma.menu.findUnique({ where: { id: parseInt(id) } });

    if (menu.imageUrl) deleteFile(`./uploads${menu.imageUrl}`);

    await prisma.menu.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
};
