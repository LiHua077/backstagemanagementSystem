import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  server:{
    proxy:{
       "/api":{
         host:'127.0.0.1',
         target: 'http://localhost:8715/', //接口域名（你请求的第三方接口）
         changeOrigin: false,             //是否跨域 （虚拟的站点需要更管origin）
       }
    }
 }
})
