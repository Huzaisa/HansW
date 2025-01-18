const jwt = require('jsonwebtoken');
const prisma = require('../models/prismaClient');
const { JWT_SECRET } = process.env;

exports.authenticate = (allowedRoles) => async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Token is missing' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log('Decoded token:', decoded);

        const user = await prisma.user.findUnique({ where: { id: decoded.id } });
        console.log('User from DB:', user);

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized: User not found' });
        }

        if (!allowedRoles.includes(user.role)) {
            return res.status(403).json({ error: 'Forbidden: Access denied' });
        }

        req.user = user; // Simpan user ke request
        next();
    } catch (err) {
        console.error('Token verification error:', err);
        res.status(401).json({ error: 'Invalid token' });
    }
};


// Middleware untuk mengizinkan pengunjung mengakses halaman tertentu
exports.guestOnly = (req, res, next) => {
    next(); // Tidak perlu token untuk GET data
};
