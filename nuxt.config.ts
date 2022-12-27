import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt'],
  experimental: {
    reactivityTransform: true, // 开启自动响应式转换(使用: let age = $ref(1); age = 2// 注意不需要是age.value = 2)
  },
  // fixed: swiper报错([vite-node] [ERR_INVALID_URL_SCHEME] /node_modules/swiper/core/core.js)
  // see: https://github.com/nuxt/framework/issues/5348
  build: {
    transpile: ['swiper']
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({ importStyle: 'less', resolveIcons: true }),
        ], // AntDesign按需引入
      }),
    ],
    // 配置全局less预处理器
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
  // 因为vscode的unocss插件无法识别到nuxt.config.ts中的unocss配置, 导致插件不生效, 需要单独创建unocss.config.ts配置文件
  // unocss: {
  //   uno: true,					//激活unocss
  //   attributify: true,	//激活属性化模式
  //   shortcuts: [				//自定义快捷方式
  //   ],
  //   rules: [						//自定义规则
  //   ],
  // }
});
