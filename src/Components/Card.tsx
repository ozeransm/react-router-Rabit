import type { CardProps } from 'type';
import styled from 'styled-components';

const CardWrapper = styled.div`
  max-width: 340px;
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  margin: 12px auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
  margin-bottom: 12px;
`;

const ProductId = styled.p`
  font-size: 0.8rem;
  color: #888;
  margin: 4px 0;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 4px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #007b55;
  margin: 4px 0 12px 0;
`;

export default function Card({ product }: CardProps) {
  return (
    <CardWrapper>
      <StyledImg src={product.img[0]} alt={product.name} />
      <ProductId>ID: {product.id}</ProductId>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
    </CardWrapper>
  );
}
