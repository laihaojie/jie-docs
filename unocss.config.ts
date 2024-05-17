import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetWeb } from '@djie/unocss'

export default defineConfig({
  presets: [
    presetWeb({ unit: 'px' }),
  ],
  shortcuts: [
    ['btn', 'px-8 py-1 rounded-4 inline-block bg-primary text-14 text-gray500 cursor-pointer hover:bg-primary disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary'],
    ['fc', 'flex items-center justify-center'],
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--vp-c-brand-lighter)',
      },
      success: '#00ff00',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
