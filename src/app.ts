import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/product/product.route';

const app: Application = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/products', productRoutes);

app.get('/', (req: Request, res: Response) => {
  //   const a = 10;
  //   res.send(a);
  res.send('Hello World!');
});

export default app;
