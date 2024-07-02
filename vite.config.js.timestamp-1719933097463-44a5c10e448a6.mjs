// vite.config.js
import { defineConfig } from "file:///D:/work/silpo-plus-for-life/node_modules/vite/dist/node/index.js";
import glob from "file:///D:/work/silpo-plus-for-life/node_modules/glob/glob.js";
import injectHTML from "file:///D:/work/silpo-plus-for-life/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///D:/work/silpo-plus-for-life/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html"),
      output: {
        // Настройка для вывода файлов в разные папки
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "css/styles[extname]";
          }
          if (assetInfo.name.endsWith(".js")) {
            return "js/script[extname]";
          }
          if (assetInfo.name.endsWith(".svg")) {
            return "icons/[name]-[hash][extname]";
          }
          if (assetInfo.name.endsWith(".ttf") || assetInfo.name.endsWith(".otf")) {
            return "fonts/[name]-[hash][extname]";
          }
          if (assetInfo.name.endsWith(".png") || assetInfo.name.endsWith(".jpg")) {
            return "images/[name]-[hash][extname]";
          }
          if (assetInfo.name.endsWith(".mp4")) {
            return "video/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        // Настройка для вывода файлов JavaScript
        chunkFileNames: "js/script.js",
        entryFileNames: "js/script.js"
      }
    },
    outDir: "../dist"
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
  base: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrXFxcXHNpbHBvLXBsdXMtZm9yLWxpZmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtcXFxcc2lscG8tcGx1cy1mb3ItbGlmZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29yay9zaWxwby1wbHVzLWZvci1saWZlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tICd2aXRlLXBsdWdpbi1odG1sLWluamVjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcm9vdDogJ3NyYycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IGdsb2Iuc3luYygnLi9zcmMvKi5odG1sJyksXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzMCBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDMyXHUwNDRCXHUwNDMyXHUwNDNFXHUwNDM0XHUwNDMwIFx1MDQ0NFx1MDQzMFx1MDQzOVx1MDQzQlx1MDQzRVx1MDQzMiBcdTA0MzIgXHUwNDQwXHUwNDMwXHUwNDM3XHUwNDNEXHUwNDRCXHUwNDM1IFx1MDQzRlx1MDQzMFx1MDQzRlx1MDQzQVx1MDQzOFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUuZW5kc1dpdGgoJy5jc3MnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Nzcy9zdHlsZXNbZXh0bmFtZV0nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lLmVuZHNXaXRoKCcuanMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2pzL3NjcmlwdFtleHRuYW1lXSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUuZW5kc1dpdGgoJy5zdmcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ljb25zL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLnR0ZicpIHx8XHJcbiAgICAgICAgICAgIGFzc2V0SW5mby5uYW1lLmVuZHNXaXRoKCcub3RmJylcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZvbnRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLnBuZycpIHx8XHJcbiAgICAgICAgICAgIGFzc2V0SW5mby5uYW1lLmVuZHNXaXRoKCcuanBnJylcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLm1wNCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndmlkZW8vW25hbWVdLVtoYXNoXVtleHRuYW1lXSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzAgXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQzNFx1MDQ0MFx1MDQ0M1x1MDQzM1x1MDQzOFx1MDQ0NSBcdTA0NDRcdTA0MzBcdTA0MzlcdTA0M0JcdTA0M0VcdTA0MzIsIFx1MDQzNVx1MDQ0MVx1MDQzQlx1MDQzOCBcdTA0M0RcdTA0MzVcdTA0M0VcdTA0MzFcdTA0NDVcdTA0M0VcdTA0MzRcdTA0MzhcdTA0M0NcdTA0M0VcclxuICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM5XHUwNDNBXHUwNDMwIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0MzJcdTA0NEJcdTA0MzJcdTA0M0VcdTA0MzRcdTA0MzAgXHUwNDQ0XHUwNDMwXHUwNDM5XHUwNDNCXHUwNDNFXHUwNDMyIEphdmFTY3JpcHRcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2pzL3NjcmlwdC5qcycsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdqcy9zY3JpcHQuanMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG91dERpcjogJy4uL2Rpc3QnLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW2luamVjdEhUTUwoKSwgRnVsbFJlbG9hZChbJy4vc3JjLyoqLyoqLmh0bWwnXSldLFxyXG4gIGJhc2U6ICcuLycsXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLFNBQVMsb0JBQW9CO0FBQ3RTLE9BQU8sVUFBVTtBQUNqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLEtBQUssS0FBSyxjQUFjO0FBQUEsTUFDL0IsUUFBUTtBQUFBO0FBQUEsUUFFTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ25DLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksVUFBVSxLQUFLLFNBQVMsS0FBSyxHQUFHO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksVUFBVSxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ25DLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQ0UsVUFBVSxLQUFLLFNBQVMsTUFBTSxLQUM5QixVQUFVLEtBQUssU0FBUyxNQUFNLEdBQzlCO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FDRSxVQUFVLEtBQUssU0FBUyxNQUFNLEtBQzlCLFVBQVUsS0FBSyxTQUFTLE1BQU0sR0FDOUI7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLFVBQVUsS0FBSyxTQUFTLE1BQU0sR0FBRztBQUNuQyxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBLFFBRUEsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUFBLEVBQ3hELE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
