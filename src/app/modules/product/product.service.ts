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

// Update product in the database
const updateProductInDb = async (
  _id: string,
  updatedData: Partial<TProduct>,
) => {
  const result = await ProductModel.findByIdAndUpdate(_id, updatedData, {
    new: true, // Return the updated document
  });
  return result;
};

// Delete product from the database
const deleteProductFromDb = async (_id: string) => {
  const result = await ProductModel.findByIdAndDelete(_id);
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductFromDb,
  getSingleProductFromDb,
  deleteProductFromDb,
  updateProductInDb,
};
