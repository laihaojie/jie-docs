import type { UserConfig } from 'vite'
import { resolve } from 'node:path'
import Unocss from 'unocss/vite'
import LlmsTxt from 'vitepress-plugin-llms'

// import Inspect from 'vite-plugin-inspect'

const vite: UserConfig = {
  plugins: [
    Unocss(),
    // Inspect(),
    LlmsTxt(),
  ],
  resolve: {
    alias: {
      'root': resolve(__dirname, '.vitepress'),
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, './'),
    },
  },
}

export default vite
