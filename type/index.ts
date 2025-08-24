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
export type ModalOpen = {
  isOpenModal: boolean;
  cardView?: Product;
  isAuthU?: boolean;
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthU?: React.Dispatch<React.SetStateAction<boolean>>;
  setCardView?: React.Dispatch<React.SetStateAction<Product>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setToken?: React.Dispatch<React.SetStateAction<MyToken>>;
};
export type MyContacts = {
  city: string;
  phone: string;
  email: string;
  address: string;
};
export type MyOrder = {
  id: string;
  name: string;
  email: string;
  price: string;
  quantity: number;
  description: string;
  contacts: MyContacts;
};
export type MyToken = {
  id: string;
  email: string;
  name: string;
  role: string;
  description: string;
  token: string;
  orders: MyOrder[];
};
export type AppProps = {
  products: Product[];
  card: Product;
  rows: number;
  isOpenModal: boolean;
  isAuth: boolean;
  isAuthU?: boolean;
  url: string;
  endPoint: string;
  token: MyToken;
  loading: boolean;
  isRegistration?: boolean;
  setToken: React.Dispatch<React.SetStateAction<MyToken>>;
  setRegistration?: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setCard: React.Dispatch<React.SetStateAction<Product>>;
  setProductState: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorRegistration: React.Dispatch<React.SetStateAction<number>>;
  setAuthU?: React.Dispatch<React.SetStateAction<boolean>>;
};
export type CardProps = {
  product: Product;
};
export type CardProducts = Product[];
export type Products = {
  products: CardProducts;
};
