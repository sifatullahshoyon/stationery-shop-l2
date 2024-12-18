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

// UPDATE product
router.put('/:productId', productControllers.updateProduct);

// DELETE product
router.delete('/:productId', productControllers.deleteSingleProduct);

export const productRoutes = router;
