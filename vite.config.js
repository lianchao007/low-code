/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-02-15 09:17:30
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 10:31:24
 */
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve('./src'),
      "assets": path.resolve('./src/assets'),
      "img": path.resolve('./src/assets/img'),
      "api": path.resolve('./src/api'),
      "utils": path.resolve('./src/utils'),
      "components": path.resolve('./src/components'),
      "componentsSet": path.resolve('./src/componentsSet'),
      "views": path.resolve('./src/views'),
    },
  },
  css: {
    preprocessorOptions: {
      // 设置 scss 公用变量文件
      scss: {
        additionalData: `@import "./src/assets/css/var.scss"; @import "/aliplayer-min.css"; @import "https://at.alicdn.com/t/c/font_3576227_v266yk7k1kn.css?spm=a313x.7781069.1998910419.52&file=font_3576227_v266yk7k1kn.css";`
      }
    }
  },
  build: {
    assetsDir: './static',
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    terserOptions: {
      compress: {
        // warnings: false,
        drop_console: true, //打包时删除console
        drop_debugger: true, //打包时删除 debugger
        pure_funcs: ['console.log'],
      },
      output: {
        // 去掉注释内容
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
          vue: ['vue', 'vue-router', 'vuex'],
          echarts: ['echarts'],
        },
      },
    },
    brotliSize: false,
  },
  server: {
    host: '0.0.0.0',
    port: '8200',
    proxy: {
      '/api': {
        historyApiFallback: true,
        target: 'http://192.168.2.7:8888/',
        changeOrigin: true
      }
    }
  },
  plugins: [vue(),
    viteCompression(),
  ]
})