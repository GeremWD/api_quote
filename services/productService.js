// Hardcoded products database
const products = [
    {
        id: 'p001',
        name: 'Professional Web Camera',
        picture: 'webcam.jpg',
        description: 'High-definition webcam with noise-cancelling microphone, perfect for video conferencing'
    },
    {
        id: 'p002',
        name: 'Ergonomic Office Chair',
        picture: 'chair.jpg',
        description: 'Adjustable office chair with lumbar support and breathable mesh back'
    },
    {
        id: 'p003',
        name: 'Mechanical Keyboard',
        picture: 'keyboard.jpg',
        description: 'RGB backlit mechanical keyboard with customizable switches'
    },
    {
        id: 'p004',
        name: 'Ultra-wide Monitor',
        picture: 'monitor.jpg',
        description: '34-inch curved ultra-wide monitor with 4K resolution'
    },
    {
        id: 'p005',
        name: 'Wireless Mouse',
        picture: 'mouse.jpg',
        description: 'Ergonomic wireless mouse with adjustable DPI settings'
    }
];

/**
 * Get all products
 * @returns {Array} All products
 */
const getAllProducts = () => {
    return products;
};

/**
 * Get products by their IDs
 * @param {Array} ids - Array of product IDs
 * @returns {Array} Filtered products
 */
const getProductsById = (ids) => {
    return products.filter(product => ids.includes(product.id));
};

module.exports = {
    getAllProducts,
    getProductsById
};
