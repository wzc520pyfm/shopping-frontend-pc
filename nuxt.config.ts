import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt'],
  experimental: {
    reactivityTransform: true, // 开启自动响应式转换(使用: let age = $ref(1); age = 2// 注意不需要是age.value = 2)
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()], // AntDesign按需引入
      }),
    ]
  },
  unocss: {
    uno: true,					//激活unocss
    attributify: true,	//激活属性化模式
    shortcuts: [				//自定义快捷方式
      { flexc: 'flex items-center justify-center' },
      { flexb: 'flex items-center justify-between' },
      { btn: 'rounded-5px text-center cursor-pointer select-none' },
      { 'text-btn': 'text-center cursor-pointer select-none' },
    ],
    rules: [						//自定义规则
      [
        /^truncate-(\d+)$/,
        ([, d]) => ({
          overflow: 'hidden',
          display: '-webkit-box',
          'text-overflow': 'ellipsis',
          '-webkit-line-clamp': d,
          '-webkit-box-orient': 'vertical',
        }),
      ],
      [
        /^center-text-(\d+)$/,
        ([, d]) => ({
          height: `${d}px`,
          'align-items': 'center',
          'line-height': `${Number(d) - 2}px`,
        }),
      ],
      [ // 一个正方形
        /^wh-(\d+)$/,
        ([, d]) => ({
          width: `${d}px`,
          height: `${d}px`,
        }),
      ],
    ],
  }
});
