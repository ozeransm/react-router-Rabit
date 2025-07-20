import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupReplace from '@rollup/plugin-replace';

export default defineConfig({
  build: {
    sourcemap: false, // Вимкнути source maps для production
  },
  server: {
    port: 3000,
    historyApiFallback: true, // Для SPA роутінгу у dev
    allowedHosts: ['react-router-rabit.onrender.com'],
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
// import * as path from 'path';
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import rollupReplace from '@rollup/plugin-replace';

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     sourcemap: false,
//   },
//   server: {
//     port: 3000,
//     sourcemap: false,
//     historyApiFallback: true,
//     allowedHosts: ['react-router-rabit.onrender.com'],
//   },
//   plugins: [
//     rollupReplace({
//       preventAssignment: true,
//       values: {
//         'process.env.NODE_ENV': JSON.stringify('development'),
//       },
//     }),
//     react({
//       babel: {
//         plugins: ['babel-plugin-styled-components'],
//       },
//     }),
//   ],
//   resolve: process.env.USE_SOURCE
//     ? {
//         alias: {
//           'react-router': path.resolve(
//             __dirname,
//             '../../packages/react-router/index.ts'
//           ),
//           'react-router-dom': path.resolve(
//             __dirname,
//             '../../packages/react-router-dom/index.tsx'
//           ),
//         },
//       }
//     : {},
// });
