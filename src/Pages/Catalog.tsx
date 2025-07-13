import Card from '../Components/Card';

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  img: string;
};

type AppProps = {
  products: Product[];
};
export default function Catalog({ products }: AppProps) {
  return (
    <div>
      <h1>Catalog</h1>
      {products.map((el: Product) => (
        <Card key={el.id} product={el} />
      ))}
    </div>
  );
}
