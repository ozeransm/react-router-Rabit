import styled from 'styled-components';
import type { CardProps } from 'type';

const StyledImg = styled('img')`
  width: 220px;
  display: block;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  @media (min-width: 480px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1024px) {
    width: 260px;
  }
`;
export default function Card({ product }: CardProps) {
  return (
    <div>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <StyledImg src={product.img} alt={product.name} />
    </div>
  );
}
