import Theme from 'vitepress/theme'
import DemoContainer from 'root/components/demoContainer.vue'
import Eye from 'root/components/components/eye.vue'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { checkExecConnectionStatus, extensionCodeBlock } from 'root/shared/exec'
import { setLive2D } from 'root/shared/live2d'
import Layout from '../layout/index.vue'
import '@shikijs/vitepress-twoslash/style.css'

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
    app.component('DemoContainer', DemoContainer)
    app.use(TwoslashFloatingVue)

    if (!import.meta.env.SSR) {
      if (window.location.pathname !== '/login.html') {
        const isLogin = await auth()
        if (!isLogin)
          return window.location.href = 'login.html'
      }
    }
    checkExecConnectionStatus()
    extensionCodeBlock()

    await setLive2D()
  },
  setup() {

    // console.log('setup')
  },
}
