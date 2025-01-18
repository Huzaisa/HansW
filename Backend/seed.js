const bcrypt = require('bcrypt');
const prisma = require('./models/prismaClient'); // Sesuaikan path ke Prisma Client

async function seed() {
    const username = 'admin';
    const password = 'admin123'; // Ganti dengan password yang aman
    const fullName = 'Administrator';
    const phoneNumber = '083808488686';
    const role = 'ADMIN';

    try {
        // Periksa apakah akun admin sudah ada
        const existingUser = await prisma.user.findUnique({
            where: { username },
        });

        if (existingUser) {
            console.log('Admin account already exists');
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat akun admin
        await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                fullName,
                phoneNumber,
                role,
            },
        });

        console.log('Admin account created successfully');
    } catch (error) {
        console.error('Error creating admin account:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
