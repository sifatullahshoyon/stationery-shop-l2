import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/product/product.route';
import { orderRoutes } from './app/modules/order/order.route';

const app: Application = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// application routes
// products
app.use('/api/v1/products', productRoutes);
// orders
app.use('/api/v1/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
