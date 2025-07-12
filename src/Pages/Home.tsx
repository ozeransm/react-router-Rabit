type AppProps = {
  products: string;
};
export default function Home({ products }: AppProps) {
  return (
    <div>
      <h2>Home</h2>
      <div>Name: {products}</div>
    </div>
  );
}
