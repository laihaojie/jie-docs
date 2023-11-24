import { resolve } from 'node:path'
import Unocss from 'unocss/vite'
import type { UserConfig } from 'vite'

import Inspect from 'vite-plugin-inspect'

const vite: UserConfig = {
  plugins: [
    Unocss(),
    Inspect(),
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
