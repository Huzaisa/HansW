const prisma = require('../models/prismaClient');
const bcrypt = require('bcrypt');
const { deleteFile } = require('../utils/fileUtils');
const jwtUtils = require('../utils/jwtUtils');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { username } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = jwtUtils.generateToken(user);

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                username: user.username,
                fullName: user.fullName,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAll = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
};

exports.add = async (req, res) => {
    const { username, password, fullName, phoneNumber, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const newUser = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
            fullName,
            phoneNumber,
            role,
            photo,
        },
    });
    res.status(201).json(newUser);
};

exports.edit = async (req, res) => {
    const { id } = req.params;
    const { username, password, fullName, phoneNumber, role } = req.body;
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

    const oldUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (req.file && oldUser.photo) deleteFile(`./uploads${oldUser.photo}`);

    const photo = req.file ? `/uploads/${req.file.filename}` : oldUser.photo;

    const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            username,
            password: hashedPassword,
            fullName,
            phoneNumber,
            role,
            photo,
        },
    });
    res.json(updatedUser);
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

    if (user.photo) deleteFile(`./uploads${user.photo}`);

    await prisma.user.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
};
