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
  theme: {
    colors: {
      primary: '#ff0000',

      success: '#00ff00',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
