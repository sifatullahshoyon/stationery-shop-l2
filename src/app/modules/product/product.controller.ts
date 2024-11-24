import { Request, Response } from 'express';
import { productService } from './product.service';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    // call product service function send the data
    const result = await productService.createProductIntoDB(product);
    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating product', success: false, error });
  }
};

// find all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDb();
    res.status(200).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error fetching products', success: false, error });
  }
};

// find single product by id
const getSingleProductFromDb = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductFromDb(productId);
    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error fetching products', success: false, error });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProductFromDb,
};
