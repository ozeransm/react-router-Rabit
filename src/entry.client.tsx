import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import type { AppProps } from 'type';

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <React.StrictMode>
    <BrowserRouter>
      <App products={window.__INITIAL_PRODUCTS__ ?? []} />
    </BrowserRouter>
  </React.StrictMode>
);
