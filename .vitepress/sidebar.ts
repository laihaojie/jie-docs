import { getMds } from '../scripts'

export function sidebar() {
  return {
    '/src/utils/': [
      { text: 'VsCode', collapsed: false, items: getMds('/utils/vscode/') },
    ],
    '/src/engineering/': [
      { text: '前端工程化', collapsed: false, items: getMds('/engineering/') },
    ],
    '/src/frontend/': [
      { text: 'UnoCss', collapsed: false, items: getMds('/frontend/unocss/') },
    ],
    '/src/framework/': [
      { text: 'Uniapp', collapsed: false, items: getMds('/framework/uniapp/') },
      { text: 'Flutter', collapsed: false, items: getMds('/framework/flutter/') },
      { text: 'Electron', collapsed: false, items: getMds('/framework/electron/') },
      { text: 'React-Native', collapsed: false, items: getMds('/framework/react-native/') },
      { text: 'Android', collapsed: false, items: getMds('/framework/android/') },
      { text: 'NestJs', collapsed: false, items: getMds('/framework/nestjs/') },
      { text: 'MongoDB', collapsed: false, items: getMds('/framework/mongodb/') },
    ],
    '/src/develop/': [
      { text: 'Node 相关', collapsed: false, items: getMds('/develop/node/') },
      { text: 'Docker', collapsed: false, items: getMds('/develop/docker/') },
      { text: 'Git 相关', collapsed: false, items: getMds('/develop/git/') },
      { text: '键盘侠', collapsed: false, items: getMds('/develop/vim/') },
      { text: 'Centos', collapsed: false, items: getMds('/develop/centos/') },
      { text: '其他', collapsed: false, items: getMds('/develop/other/') },
    ],
    '/src/notes/': [
      { text: '代码片段', collapsed: false, items: getMds('/notes/part/') },
      { text: 'BUG', collapsed: false, items: getMds('/notes/bug/') },
      { text: '随手记', collapsed: false, items: getMds('/notes/') },
      { text: 'Windows', collapsed: false, items: getMds('/notes/windows/') },
      { text: 'Github', collapsed: false, items: getMds('/notes/github/') },
    ],
    '/src/fun/': [
      { text: '前端', collapsed: false, items: getMds('/fun/frontend/') },
      { text: 'Python', collapsed: false, items: getMds('/fun/python/') },
    ],
    '/src/other/': [
      { text: '娜第', collapsed: false, items: getMds('/other/') },
      { text: 'Python作业', collapsed: false, items: getMds('/other/python/') },
    ],
  }
}
