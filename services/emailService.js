const nodemailer = require('nodemailer');

/**
 * Send quote request email with selected products
 * @param {Array} products - Products to include in quote request
 * @returns {Promise} Email sending result
 */
const sendQuoteEmail = async (products) => {
    // Create transporter with email settings
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // Build product list for email
    const productListHTML = products.map(product => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
      <h3>${product.name} (ID: ${product.id})</h3>
      <p><img src="${product.picture}" alt="${product.name}" style="max-width: 200px; height: auto;"></p>
      <p>${product.description}</p>
    </div>
  `).join('');

    // Configure email options
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'New Quote Request',
        html: `
      <h1>Quote Request</h1>
      <p>A new quote request has been submitted for the following products:</p>
      ${productListHTML}
      <p>Please prepare a quote for these items.</p>
    `
    };

    // Send email
    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendQuoteEmail
};
