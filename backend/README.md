# E-commerce Backend API

Backend server for the e-commerce frontend application.

## Features

- RESTful API for products
- CORS enabled for frontend integration
- Sample product data with 100 products

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:3001` by default.

## API Endpoints

### Get All Products
- **GET** `/products`
- Returns: List of all products
- Response format:
```json
{
  "products": [...],
  "total": 100,
  "skip": 0,
  "limit": 100
}
```

### Get Product by ID
- **GET** `/products/:id`
- Returns: Single product object
- Example: `/products/1`

## Product Schema

Each product contains:
- `id` (number): Unique product identifier
- `title` (string): Product name
- `description` (string): Product description
- `price` (number): Product price in rupees
- `thumbnail` (string): Product image URL
- `type` (string): Product category (optional)
- `isSale` (boolean): Whether product is on sale (optional)

## Environment Variables

You can set the following environment variable:
- `PORT`: Server port (default: 3001)

## Frontend Integration

The frontend is configured to use this backend. Make sure:
1. Backend is running on `http://localhost:3001`
2. Or set `VITE_API_URL` environment variable in frontend to your backend URL

