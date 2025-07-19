import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import type { CardProducts } from 'type';

export function render(url: string, products: CardProducts) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App products={products} />
      </StaticRouter>
    </React.StrictMode>
  );
}
