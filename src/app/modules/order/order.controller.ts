import { Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { OrderService } from './order.service';
import mongoose from 'mongoose';

// Create Order Controller
export const createOrder = async (req: Request, res: Response) => {
  try {
    // Validate input data using Zod
    const order = req.body;
    const validatedData = orderValidationSchema.parse(order);

    // Convert the product string ID to mongoose.ObjectId
    const productId = new mongoose.Types.ObjectId(validatedData.product);

    // Create the order with the ObjectId
    const result = await OrderService.createOrder({
      ...validatedData,
      product: productId, // Assign the ObjectId here
    });

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error || 'Error creating order',
      status: false,
    });
  }
};

// Calculate Revenue Controller
export const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderService.calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(500).json({
      message: error || 'Error calculating revenue',
      status: false,
    });
  }
};
