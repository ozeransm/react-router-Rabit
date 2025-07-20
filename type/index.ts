import dotenv from 'dotenv';
dotenv.config();

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
};
export type AppProps = {
  products: Product[];
  card: Product;
  rows: number;
  isOpenModal: boolean;
  setCard: React.Dispatch<React.SetStateAction<Product>>;
  setProductState: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export type CardProps = {
  product: Product;
};
export type CardProducts = Product[];
export type Products = {
  products: CardProducts;
};
