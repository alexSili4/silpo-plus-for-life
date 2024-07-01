import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        // Настройка для вывода файлов в разные папки
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/styles[extname]';
          }
          if (assetInfo.name.endsWith('.js')) {
            return 'js/script[extname]';
          }
          if (assetInfo.name.endsWith('.svg')) {
            return 'icons/[name]-[hash][extname]';
          }
          if (
            assetInfo.name.endsWith('.ttf') ||
            assetInfo.name.endsWith('.otf')
          ) {
            return 'fonts/[name]-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.png')) {
            return 'images/[name]-[hash][extname]';
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
