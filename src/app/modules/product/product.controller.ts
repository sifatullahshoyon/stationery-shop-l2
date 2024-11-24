import { Request, Response } from 'express';
import { productService } from './product.service';

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

export const productControllers = {
  createProduct,
};
