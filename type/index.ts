export type Inputs = {
  name: string;
  price: string;
  description: string;
};
export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  img: string;
  rows: number;
};
export type AppProps = {
  products: Product[];
  setProductState: React.Dispatch<React.SetStateAction<Product[]>>;
  rows: number;
};
export type AppProp = {
  products: Product[];
  rows: number;
};
export type CardProps = {
  product: Product;
};
// export type Rows = {
//   rows: number;
// };
