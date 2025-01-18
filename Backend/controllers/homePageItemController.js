const prisma = require('../models/prismaClient');
const { deleteFile } = require('../utils/fileUtils');

exports.getAll = async (req, res) => {
    const items = await prisma.homePageItem.findMany();
    res.json(items);
};

exports.add = async (req, res) => {
    const { title, description, link, discount, bestSellers } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newItem = await prisma.homePageItem.create({
        data: {
            title,
            description,
            link,
            discount: discount ? parseFloat(discount) : null,
            bestSellers: bestSellers ? JSON.parse(bestSellers) : null,
            imageUrl,
            userId: req.user.id,
        },
    });
    res.status(201).json(newItem);
};

exports.edit = async (req, res) => {
    const { id } = req.params;
    const { title, description, link, discount, bestSellers } = req.body;

    const oldItem = await prisma.homePageItem.findUnique({ where: { id: parseInt(id) } });
    if (req.file && oldItem.imageUrl) deleteFile(`./uploads${oldItem.imageUrl}`);

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : oldItem.imageUrl;

    const updatedItem = await prisma.homePageItem.update({
        where: { id: parseInt(id) },
        data: { title, description, link, discount, bestSellers, imageUrl },
    });
    res.json(updatedItem);
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    const item = await prisma.homePageItem.findUnique({ where: { id: parseInt(id) } });

    if (item.imageUrl) deleteFile(`./uploads${item.imageUrl}`);

    await prisma.homePageItem.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
};
