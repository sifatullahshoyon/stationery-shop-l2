import mongoose from 'mongoose';

export type TOrder = {
  email: string;
  product: mongoose.Types.ObjectId; // Reference to Stationery Product
  quantity: number;
  totalPrice: number;
};
