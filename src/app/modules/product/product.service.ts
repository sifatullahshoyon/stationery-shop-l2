import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

// create product
const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// find all products
const getAllProductFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

// find single product
const getSingleProductFromDb = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductFromDb,
  getSingleProductFromDb,
};
