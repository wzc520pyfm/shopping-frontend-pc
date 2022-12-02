import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: [
    { flexc: 'flex items-center justify-center' },
    { flexb: 'flex items-center justify-between' },
    { btn: 'rounded-5px text-center cursor-pointer select-none border-0' },
    { 'text-btn': 'text-center cursor-pointer select-none' },
  ],
  rules: [
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
    [
      /^wh-(\d+)$/,
      ([, d]) => ({
        width: `${d}px`,
        height: `${d}px`,
      }),
    ],
  ],
})