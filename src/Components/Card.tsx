import styled from 'styled-components';
type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  img: string;
};
type CardProps = {
  product: Product;
};
const StyledCard = styled.div`
  width: 320px;
  height: auto;
  border-radius: 10px;
  border-color: lightgray;
`;
export default function Card({ product }: CardProps) {
  return (
    <StyledCard>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <img src={product.img} alt="" />
    </StyledCard>
  );
}
