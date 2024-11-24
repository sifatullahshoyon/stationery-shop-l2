import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

// Create a Schema corresponding to the document interface.

const ProductSchema: Schema = new Schema<TProduct>(
  {
    // interface এর ক্ষেত্রে type গুলো থাকে small letter আর mongoose এর ক্ষেত্রে type গুলো থাকে Capitalize
    name: { type: String, required: [true, 'Product name is required'] },
    brand: { type: String, required: [true, 'Brand name is required'] },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      // typescript এ যেইটা union type mongoose এ সেইটা enum type
      enum: {
        values: [
          'Writing',
          'Office Supplies',
          'Art Supplies',
          'Educational',
          'Technology',
        ],
        message:
          'Category must be one of Writing, Office Supplies, Art Supplies, Educational, Technology',
      },
    },
    description: { type: String, required: [true, 'Description is required'] },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be a positive number'],
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// Create a Model.
// is possible to variables name & model name is same as
export const ProductModel = model<TProduct>('Product', ProductSchema);
