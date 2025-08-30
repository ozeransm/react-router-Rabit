import OrderView from '../Components/OrderView';
import type { AppProps } from 'type';

export default function Orders({ token, isAuth, isAuthU }: AppProps) {
  return (
    <div>
      <h2>Orders</h2>
      {(isAuth || isAuthU) &&
        token?.orders?.map((order, i) => (
          <div key={i}>
            <p>ID: {token?.id} {token?.role}</p>
            {(token?.role === 'admin' || (token?.role === 'user' && token.email === order.email)) && (
              <OrderView
                id={order.id}
                name={order.name}
                email={order.email}
                price={order.price}
                quantity={order.quantity}
                description={order.description}
                contacts={order.contacts}
              />
            )}
          </div>
        ))}
    </div>
  );
}
