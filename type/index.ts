import dotenv from 'dotenv';
dotenv.config();

export type Inputs = {
  name: string;
  price: string;
  description: string;
  deletePhotos: string[];
  selectedPhoto: string;
  login: string;
  password: string;
  descriptionUser: string;
  email: string;
  role: string;
};
export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  img: string[];
};
export type AppProps = {
  products: Product[];
  card: Product;
  rows: number;
  isOpenModal: boolean;
  isAuth: boolean;
  url: string;
  endPoint: string;
  token: string;
  isExpired: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
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
