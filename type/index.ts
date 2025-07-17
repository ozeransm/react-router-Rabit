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
  rows: number;
  isOpenModal: boolean;
  setProductState: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export type AppPropModal = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export type AppProp = {
  products: Product[];
  rows: number;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export type CardProps = {
  product: Product;
};
