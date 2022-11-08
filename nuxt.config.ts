import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true, // 开启自动响应式转换(使用: let age = $ref(1); age = 2// 注意不需要是age.value = 2)
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()], // AntDesign按需引入
      }),
    ]
  }
});