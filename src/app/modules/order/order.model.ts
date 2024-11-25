import mongoose, { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

// Create a Schema corresponding to the document interface.
const OrderSchema: Schema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email Address is required.'],
      unique: true,
      trim: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product is required.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required.'],
      min: 1,
    },
    totalPrice: { type: Number, required: [true, 'Total Price is required.'] },
  },
  { timestamps: true },
);

// Create a Model.

export const OrderModel = model<TOrder>('Order', OrderSchema);
