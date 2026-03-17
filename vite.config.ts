import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import mkcert from 'vite-plugin-mkcert';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [react(),
  tsconfigPaths(),
  checker({ typescript: true }),
  eslint(),
  dts({ include: ['src'] }),
  mkcert()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@data': path.resolve(__dirname, 'src/_data'),
      '@hooks': path.resolve(__dirname, 'src/hooks')
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'BrandKit',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom',
        'react-dom/client',
        'styled-components',
        '@primer/octicons-react',
      ],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.es.js',
          banner: '"use client";',
        },
        {
          format: 'umd',
          name: 'BrandKit',
          entryFileNames: 'index.umd.js',
          globals: {
            react: 'React',
            'react/jsx-runtime': 'ReactJSXRuntime',
            'react/jsx-dev-runtime': 'ReactJSXDevRuntime',
            'react-dom': 'ReactDOM',
            'react-dom/client': 'ReactDOMClient',
            'styled-components': 'styled',
            '@primer/octicons-react': 'Octicons',
          },
        },
      ],
    },
  },
});
