import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

// call the controller function
// post route
router.post('/create-product', productControllers.createProduct);

// get all products routes
router.get('/', productControllers.getAllProducts);

// get single product routes
router.get('/:productId', productControllers.getSingleProductFromDb);

export const productRoutes = router;
