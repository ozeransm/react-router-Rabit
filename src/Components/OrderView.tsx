import styled from "styled-components";
import type { MyOrder } from "type"
const OrderContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const OrderItem = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #333;

  span {
    font-weight: bold;
    color: #555;
  }
`;
export default function OrderView(
    {
        id,
        name,
        email,
        price,
        quantity,
        description,

    }: MyOrder) {
  return (
    <OrderContainer key={id}>
      <OrderItem><span>Name:</span> {name}</OrderItem>
      <OrderItem><span>Email:</span> {email}</OrderItem>
      <OrderItem><span>Price:</span> ${price}</OrderItem>
      <OrderItem><span>Quantity:</span> {quantity}</OrderItem>
      <OrderItem><span>Description:</span> {description}</OrderItem>
    </OrderContainer>
  );
}