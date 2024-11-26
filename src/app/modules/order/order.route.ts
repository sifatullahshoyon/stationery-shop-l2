import express from 'express';
import { calculateRevenue, createOrder } from './order.controller';

const router = express.Router();

// Create Order endpoint
router.post('/create-order', createOrder);

// Calculate Revenue endpoint
router.get('/revenue', calculateRevenue);

// export default router;
export const orderRoutes = router;
