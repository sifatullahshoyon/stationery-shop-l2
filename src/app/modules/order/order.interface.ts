import mongoose from 'mongoose';

export type TOrder = {
  email: string;
  product: mongoose.Types.ObjectId; // Change to ObjectId
  quantity: number;
  totalPrice: number;
};
