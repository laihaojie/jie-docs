import Theme from 'vitepress/theme'

import 'uno.css'

import './rainbow.css'
import './vars.css'
import './overrides.css'

export default {
  ...Theme,
  // eslint-disable-next-line unused-imports/no-unused-vars
  async enhanceApp({ app, router, siteData }) {
    // 弹出输入框 账号密码
    // window.prompt('请输入账号', 'admin')
    // window.prompt('请输入密码', 'admin')
    // await new Promise(resolve => setTimeout(resolve, 4000))
  },
}
