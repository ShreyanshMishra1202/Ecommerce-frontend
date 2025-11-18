import express from 'express';
import { products } from '../data/products.js';

const router = express.Router();
router.get('/', (req, res) => {
  try {
    res.json({
      products: products,
      total: products.length,
      skip: 0,
      limit: products.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
router.get('/:id', (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

export default router;

