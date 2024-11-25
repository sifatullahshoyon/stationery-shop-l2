import { z } from 'zod';

export const productValidationSchema = z.object({
  name: z.string().nonempty('Product name is required'),
  brand: z.string().nonempty('Brand name is required'),
  price: z
    .number()
    .min(0, 'Price must be a positive number')
    .refine((val) => val !== undefined, {
      message: 'Product price is required',
    }),
  category: z.enum(
    ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
    {
      errorMap: () => ({
        message:
          'Category must be one of Writing, Office Supplies, Art Supplies, Educational, Technology',
      }),
    },
  ),
  description: z.string().nonempty('Description is required'),
  quantity: z
    .number()
    .min(0, 'Quantity must be a positive number')
    .refine((val) => val !== undefined, { message: 'Quantity is required' }),
  inStock: z.boolean(),
});
