# Quote Request API

A Node.js API that lets users request quotes for products via email.

## Overview

This API allows a front-end application to send quote requests for selected products. Products are defined by ID, name, picture, and description. The API has a single endpoint that takes a list of product IDs and sends an email with the details of the selected products.

## Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file based on the example below
4. Start the server
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000

# Email Configuration
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=your-email@example.com
EMAIL_TO=quotes@yourcompany.com
```

Notes:
- Contact your email provider for the correct SMTP settings
- `EMAIL_SECURE` should be set to `true` if you're using port 465
- Many providers require specific app passwords or API keys for SMTP access

## API Endpoints

### Request a Quote

**URL:** `/api/quote`

**Method:** `POST`

**Request Body:**
```json
{
  "productIds": ["p001", "p003", "p005"]
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Quote request sent successfully",
  "products": [
    {
      "id": "p001",
      "name": "Professional Web Camera",
      "picture": "webcam.jpg",
      "description": "High-definition webcam with noise-cancelling microphone, perfect for video conferencing"
    },
    {
      "id": "p003",
      "name": "Mechanical Keyboard",
      "picture": "keyboard.jpg",
      "description": "RGB backlit mechanical keyboard with customizable switches"
    },
    {
      "id": "p005",
      "name": "Wireless Mouse",
      "picture": "mouse.jpg",
      "description": "Ergonomic wireless mouse with adjustable DPI settings"
    }
  ]
}
```

## Frontend Integration Example

```javascript
// Example using fetch API
async function requestQuote(productIds) {
  try {
    const response = await fetch('http://localhost:3000/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productIds }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('Quote request successful:', data);
      return data;
    } else {
      console.error('Quote request failed:', data.error);
      throw new Error(data.error);
    }
  } catch (error) {
    console.error('Error sending quote request:', error);
    throw error;
  }
}

// Usage
const selectedProductIds = ['p001', 'p003', 'p005'];
requestQuote(selectedProductIds)
  .then(result => {
    // Show success message to user
    alert('Quote request sent successfully!');
  })
  .catch(error => {
    // Show error to user
    alert('Failed to send quote request: ' + error.message);
  });
```
