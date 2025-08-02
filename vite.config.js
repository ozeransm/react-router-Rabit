import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupReplace from '@rollup/plugin-replace';

export default defineConfig({
  build: {
    sourcemap: false, // Вимкнути source maps для production
  },
  appType: 'custom',
  server: {
    port: 3000,
    historyApiFallback: true, // Для SPA роутінгу у dev
    allowedHosts: ['react-router-rabit.onrender.com'],
    // middlewareMode: true,
  },
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    }),
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          'react-router': path.resolve(
            __dirname,
            '../../packages/react-router/index.ts'
          ),
          'react-router-dom': path.resolve(
            __dirname,
            '../../packages/react-router-dom/index.tsx'
          ),
        },
      }
    : {},
});
