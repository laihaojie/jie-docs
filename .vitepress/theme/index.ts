import Theme from 'vitepress/theme'

import 'uno.css'

import './rainbow.css'
import './vars.css'
import './overrides.css'
import { auth } from './auth'

export default {
  ...Theme,
  // eslint-disable-next-line unused-imports/no-unused-vars
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      if (window.location.pathname !== '/login.html') {
        const isLogin = await auth()
        if (!isLogin)
          return window.location.href = 'login.html'
      }
    }
  },
}
