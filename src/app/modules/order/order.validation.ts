import { z } from 'zod';

// Custom Zod validation for MongoDB ObjectId
const objectId = z.string();

// Order validation schema
export const orderValidationSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  product: objectId, // Validates MongoDB ObjectId format (as string)
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .positive('Quantity must be greater than zero'),
  totalPrice: z.number().positive('Total price must be greater than zero'),
});
