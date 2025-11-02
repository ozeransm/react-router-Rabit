import styled from "styled-components";
import type { MyOrder } from "type";

const StyledButtonAadToOrder = styled.button`
    display: block;
    margin: 20px auto 0 auto;
    padding: 10px 20px;
    font-size: 16px;
    width: 150px;
    height: 40px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
`;

export default function ButtonAddToOrder(
    {id, url, name, email, price, contacts, id_product, quantity, description, order, setOrder}: MyOrder
) {
    async function handlerAdd() {
    console.log('Add to order');
    await fetch(`${url}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        price,
        quantity,
        id_product,
        description,
        
      }),
    });
  }
  async function handlerAdd1() {
    if (!setOrder) return;
    setOrder(prevOrder => [...prevOrder, {id, name, email, price, quantity, id_product, description, contacts, url}]);
    console.log('Add to order', order);
  }
  return (
    <StyledButtonAadToOrder onClick={handlerAdd1}>Add</StyledButtonAadToOrder>
  );
}