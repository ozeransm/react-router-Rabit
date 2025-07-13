// type AppProps = {
//   products: string;
// };
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
            <h3>{p.name}</h3>
            <p>{p.id}</p>
            <p>{p.description}</p>
            <p>{p.price}</p>
            <p>{p.img}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
