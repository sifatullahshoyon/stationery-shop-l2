"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty('Product name is required'),
    brand: zod_1.z.string().nonempty('Brand name is required'),
    price: zod_1.z
        .number()
        .min(0, 'Price must be a positive number')
        .refine((val) => val !== undefined, {
        message: 'Product price is required',
    }),
    category: zod_1.z.enum(['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'], {
        errorMap: () => ({
            message: 'Category must be one of Writing, Office Supplies, Art Supplies, Educational, Technology',
        }),
    }),
    description: zod_1.z.string().nonempty('Description is required'),
    quantity: zod_1.z
        .number()
        .min(0, 'Quantity must be a positive number')
        .refine((val) => val !== undefined, { message: 'Quantity is required' }),
    inStock: zod_1.z.boolean(),
});
