import mongoose from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new mongoose.Schema<TOrder>(
  {
    email: { type: String, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId, // Correct reference type
      ref: 'Product', // Reference to Product model
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

const Order = mongoose.model<TOrder>('Order', orderSchema);

export default Order;
