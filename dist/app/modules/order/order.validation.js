"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
// Custom Zod validation for MongoDB ObjectId
const objectId = zod_1.z.string();
// Order validation schema
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email('Invalid email address')
        .nonempty('Email is required'),
    product: objectId, // Validates MongoDB ObjectId format (as string)
    quantity: zod_1.z
        .number()
        .int('Quantity must be an integer')
        .positive('Quantity must be greater than zero'),
    totalPrice: zod_1.z.number().positive('Total price must be greater than zero'),
});
