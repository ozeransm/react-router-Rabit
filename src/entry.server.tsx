import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  img: string;
};
export function render(url: string, products: Product[]) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App products={products} />
      </StaticRouter>
    </React.StrictMode>
  );
}
