import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import Order from './order.model';

export class OrderService {
  static async createOrder(orderData: TOrder): Promise<TOrder> {
    const product = await ProductModel.findById(orderData.product);

    if (!product) {
      throw new Error('Product not found');
    }

    if (product.quantity < orderData.quantity) {
      throw new Error('Insufficient stock');
    }

    // Calculate total price
    const totalPrice = orderData.quantity * product.price;

    // Update product inventory
    product.quantity -= orderData.quantity;
    product.inStock = product.quantity > 0;
    await product.save();

    // Create order with totalPrice dynamically calculated
    const order = new Order({
      ...orderData,
      totalPrice,
    });

    return order.save();
  }

  static async calculateRevenue(): Promise<number> {
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product',
          foreignField: '_id',
          as: 'productDetails',
        },
      },
      { $unwind: '$productDetails' },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: { $multiply: ['$quantity', '$productDetails.price'] },
          },
        },
      },
    ]);

    // console.log('Aggregation result:', orders); // Log the aggregation result for debugging
    return orders[0]?.totalRevenue || 0;
  }
}
