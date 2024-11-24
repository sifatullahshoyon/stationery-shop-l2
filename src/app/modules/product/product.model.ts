import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

// Create a Schema corresponding to the document interface.

const ProductSchema: Schema = new Schema<TProduct>(
  {
    // // interface এর ক্ষেত্রে type গুলো থাকে small letter আর mongoose এর ক্ষেত্রে type গুলো থাকে Capitalize
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      // typescript এ যেইটা union type mongoose এ সেইটা enum type
      enum: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      required: true,
    },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// Create a Model.
// is possible to variables name & model name is same as
export const ProductModel = model<TProduct>('Product', ProductSchema);
