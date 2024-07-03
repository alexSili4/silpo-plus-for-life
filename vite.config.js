import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        // donation: resolve(__dirname, './src/donation/index.html'),
        // thanks: resolve(__dirname, './src/thanks/index.html'),
        // problem: resolve(__dirname, './src/problem/index.html'),
      },
      // input: glob.sync('./src/*.html'),
      output: {
        // Настройка для вывода файлов в разные папки
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'dist/css/styles-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.js')) {
            return 'dist/js/script-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.svg')) {
            return 'dist/icons/[name]-[hash][extname]';
          }
          if (
            assetInfo.name.endsWith('.ttf') ||
            assetInfo.name.endsWith('.otf')
          ) {
            return 'dist/fonts/[name]-[hash][extname]';
          }
          if (
            assetInfo.name.endsWith('.png') ||
            assetInfo.name.endsWith('.jpg')
          ) {
            return 'dist/images/[name]-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.mp4')) {
            return 'dist/video/[name]-[hash][extname]';
          }
          // Настройка для других файлов, если необходимо
          return 'dist/assets/[name]-[hash][extname]';
        },
        // Настройка для вывода файлов JavaScript
        chunkFileNames: 'dist/js/script-[hash].js',
        entryFileNames: 'dist/js/script-[hash].js',
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  base: './',
});
