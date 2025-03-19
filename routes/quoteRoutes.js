const express = require('express');
const router = express.Router();
const { getProductsById } = require('../services/productService');
const { sendQuoteEmail } = require('../services/emailService');

// POST route to request a quote
router.post('/quote', async (req, res) => {
    try {
        const { productIds } = req.body;

        if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
            return res.status(400).json({ error: 'Please provide a valid array of product IDs' });
        }

        // Get full product details based on IDs
        const products = getProductsById(productIds);

        if (products.length === 0) {
            return res.status(404).json({ error: 'No valid products found with the provided IDs' });
        }

        // Send quote email
        await sendQuoteEmail(products);

        return res.status(200).json({
            success: true,
            message: 'Quote request sent successfully',
            products
        });
    } catch (error) {
        console.error('Quote request error:', error);
        return res.status(500).json({ error: 'Failed to process quote request' });
    }
});

module.exports = router;
