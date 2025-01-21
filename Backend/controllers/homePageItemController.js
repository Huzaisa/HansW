const prisma = require('../models/prismaClient');

// Get all HomePageItems
exports.getAll = async (req, res) => {
    const homePageItems = await prisma.homePageItem.findMany();
    res.json(homePageItems);
};

// Add a new HomePageItem
exports.add = async (req, res) => {
    const { title, description, discount, bestSellers } = req.body;

    // Ensure that bestSellers is an array of strings and handle the discount properly
    const newHomePageItem = await prisma.homePageItem.create({
        data: {
            title,
            description,
            discount: discount ? parseFloat(discount) : null, // Only add discount if provided
            bestSellers: Array.isArray(bestSellers) ? bestSellers : [], // Ensure bestSellers is an array
            userId: req.user.id,
        },
    });

    res.status(201).json(newHomePageItem);
};

// Edit an existing HomePageItem
exports.edit = async (req, res) => {
    const { id } = req.params;
    const { title, description, discount, bestSellers } = req.body;

    // Find the existing HomePageItem
    const oldHomePageItem = await prisma.homePageItem.findUnique({
        where: { id: parseInt(id) }
    });

    // Update the HomePageItem with provided fields (only change what is necessary)
    const updatedHomePageItem = await prisma.homePageItem.update({
        where: { id: parseInt(id) },
        data: {
            title,
            description,
            discount: discount ? parseFloat(discount) : oldHomePageItem.discount, // Keep old discount if not provided
            bestSellers: Array.isArray(bestSellers) ? bestSellers : oldHomePageItem.bestSellers, // Keep old bestSellers if not provided
        },
    });

    res.json(updatedHomePageItem);
};

// Delete a HomePageItem
exports.delete = async (req, res) => {
    const { id } = req.params;
    // Ensure you're deleting HomePageItem instead of Menu
    const homePageItem = await prisma.homePageItem.findUnique({ where: { id: parseInt(id) } });

    await prisma.homePageItem.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
};
