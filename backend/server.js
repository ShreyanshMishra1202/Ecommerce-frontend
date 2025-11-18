import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors()); 
app.use(express.json());
app.use('/products', productsRouter);
app.get('/', (req, res) => {
  res.json({ 
    message: 'E-commerce Backend API is running!',
    endpoints: {
      getAllProducts: 'GET /products',
      getProductById: 'GET /products/:id'
    }
  });
});
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📦 Products API available at http://localhost:${PORT}/products`);
});

