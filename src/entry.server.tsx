import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import type { CardProducts } from 'type';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function render(url: string, products: CardProducts) {
  const sheet = new ServerStyleSheet();

  try {
    const html = ReactDOMServer.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url}>
          <App products={products} />
        </StaticRouter>
      </StyleSheetManager>
    );
    const styleTags = sheet.getStyleTags(); // зібрані стилі в <style>...</style>
    return { html, styleTags };
  } finally {
    sheet.seal();
  }
}
