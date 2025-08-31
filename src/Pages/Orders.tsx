import styled from 'styled-components';
import OrderView from '../Components/OrderView';
import type { AppProps } from 'type';
const StyledField = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;
const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 24px;
`;
export default function Orders({ token, isAuth, isAuthU, products }: AppProps) {
  return (
    <div>
      <StyledTitle>Orders</StyledTitle>
      <StyledField>
        {(isAuth || isAuthU) &&
          token?.orders?.map((order, i) => (
            <div key={i}>
              {(token?.role === 'admin' ||
                (token?.role === 'user' && token.email === order.email)) && (
                <div>
                  <p>
                    ID: {token?.id} {token?.role}
                  </p>
                  <OrderView
                    id={order.id}
                    name={order.name}
                    email={order.email}
                    price={order.price}
                    quantity={order.quantity}
                    description={order.description}
                    id_product={order.id_product}
                    contacts={order.contacts}
                    products={products || []}
                  />
                </div>
              )}
            </div>
          ))}
      </StyledField>
    </div>
  );
}
