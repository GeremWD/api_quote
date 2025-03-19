require('dotenv').config();
const express = require('express');
const cors = require('cors');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', quoteRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Quote Request API is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
