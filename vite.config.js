import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    // minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        donation: resolve(__dirname, './src/donation/index.html'),
        thanks: resolve(__dirname, './src/thanks/index.html'),
        problem: resolve(__dirname, './src/problem/index.html'),
      },
      // input: glob.sync('./src/*.html'),
      output: {
        // Настройка для вывода файлов в разные папки
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/styles-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.js')) {
            return 'js/script[extname]';
          }
          if (assetInfo.name.endsWith('.svg')) {
            return 'icons/[name]-[hash][extname]';
          }
          if (
            assetInfo.name.endsWith('.ttf') ||
            assetInfo.name.endsWith('.woff2')
          ) {
            return 'fonts/[name]-[hash][extname]';
          }
          if (
            assetInfo.name.endsWith('.png') ||
            assetInfo.name.endsWith('.jpg')
          ) {
            return 'images/[name]-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.mp4')) {
            return 'video/[name]-[hash][extname]';
          }
          // Настройка для других файлов, если необходимо
          return 'assets/[name]-[hash][extname]';
        },
        // Настройка для вывода файлов JavaScript
        chunkFileNames: 'js/script.js',
        entryFileNames: 'js/script.js',
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  base: './',
});
