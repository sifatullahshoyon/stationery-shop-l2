// Create an type representing a document in MongoDB.

export type TProduct = {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology'; // union type literal
  description: string;
  quantity: number;
  inStock: boolean;
};
