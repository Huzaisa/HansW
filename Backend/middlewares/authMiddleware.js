const jwt = require('jsonwebtoken');
const prisma = require('../models/prismaClient');
const { JWT_SECRET } = process.env;

exports.authenticate = (allowedRoles) => async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

        if (!user || !allowedRoles.includes(user.role)) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Middleware untuk mengizinkan pengunjung mengakses halaman tertentu
exports.guestOnly = (req, res, next) => {
    next(); // Tidak perlu token untuk GET data
};
