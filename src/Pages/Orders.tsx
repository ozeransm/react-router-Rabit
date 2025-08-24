import type { AppProps } from 'type';

export default function Orders({ token, isAuth, isAuthU }: AppProps) {
  return (
    <div>
      <h2>Orders</h2>
      {(isAuth || isAuthU) &&
        token?.orders?.map((order, i) => (
          <div key={order?.id}>
            <p>Id: {token.id.toString() + '   ' + token.name}</p>
            <p>Name: {order?.name}</p>
            <p>Email: {order?.email}</p>
            <p>Price: {order?.price}</p>
            <p>Quantity: {order?.quantity}</p>
            <p>Description: {order?.description}</p>
          </div>
        ))}
    </div>
  );
}
