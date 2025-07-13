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
export default function Home({ products }: AppProps) {
  return (
    <div>
      <h2>Home</h2>
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <h3>Name: {p.name}</h3>
            <p>id: {p.id}</p>
            <p>Description: {p.description}</p>
            <p>Price: {p.price}</p>
            <p>images: {p.img}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
