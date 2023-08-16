import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetWeb } from '@djie/unocss'

export default defineConfig({
  presets: [
    presetWeb(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
