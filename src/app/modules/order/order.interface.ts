import { Types } from 'mongoose';

// Create an type representing a document in MongoDB.

export type TOrder = {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
