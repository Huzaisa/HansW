require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const aboutRoutes = require('./routes/aboutRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const homePageItemRoutes = require('./routes/homePageItemRoutes.js');
const menuRoutes = require('./routes/menuRoutes');
const accountRoutes = require('./routes/accountRoutes');
const { errorHandler } = require('./utils/errorHandler');
const path = require('path');

const cors = require('cors');

const app = express();

// CORS configuration
app.use(cors({
    origin: "http://localhost:5173", // Alamat FE
    methods: ["GET"], // Batasi metode hanya untuk GET
}));

// Middleware
app.use(bodyParser.json());

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/public"));
});


// Routes
app.use('/about', aboutRoutes);
app.use('/gallery', galleryRoutes);
app.use('/homePageItems', homePageItemRoutes);
app.use('/menu', menuRoutes);
app.use('/account', accountRoutes);

// Global error handler
app.use(errorHandler);

// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
