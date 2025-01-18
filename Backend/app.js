require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const aboutRoutes = require('./routes/aboutRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const homePageItemRoutes = require('./routes/homePageItemRoutes.js');
const menuRoutes = require('./routes/menuRoutes');
const accountRoutes = require('./routes/accountRoutes');
const { errorHandler } = require('./utils/errorHandler');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Serve static files

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