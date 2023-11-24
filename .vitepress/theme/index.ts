import Theme from 'vitepress/theme'
import Eye from 'root/components/components/eye.vue'
import Layout from '../layout/index.vue'

import 'uno.css'

import './rainbow.css'
import './vars.css'
import './overrides.css'
import { auth } from './auth'

export default {
  // ...Theme,
  extends: Theme,
  Layout,
  // eslint-disable-next-line unused-imports/no-unused-vars
  async enhanceApp({ app, router, siteData }) {
    app.component('Eye', Eye)

    if (!import.meta.env.SSR) {
      if (window.location.pathname !== '/login.html') {
        const isLogin = await auth()
        if (!isLogin)
          return window.location.href = 'login.html'
      }
    }
  },
  setup() {
    // eslint-disable-next-line no-console
    console.log('setup')
  },
}
