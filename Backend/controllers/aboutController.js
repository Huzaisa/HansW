const prisma = require('../models/prismaClient');

exports.getAll = async (req, res) => {
    const abouts = await prisma.about.findMany();
    res.json(abouts);
};

exports.add = async (req, res) => {
    const { type, content } = req.body;

    const newAbout = await prisma.about.create({
        data: {
            type,
            content,
        },
    });
    res.status(201).json(newAbout);
};

exports.edit = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    const updatedAbout = await prisma.about.update({
        where: { id: parseInt(id) },
        data: {
            content,
        },
    });
    res.json(updatedAbout);
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    await prisma.about.delete({
        where: { id: parseInt(id) },
    });
    res.status(204).send();
};
