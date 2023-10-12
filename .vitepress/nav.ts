export function nav() {
  return [
    {
      text: '工具软件',
      items: [
        {
          items: [
            { text: 'VsCode', link: '/src/utils/vscode/' },
          ],
        },
      ],
    },
    {
      text: '框架文档',
      items: [
        {
          items: [
            { text: 'Github Actions', link: '/src/framework/github-actions/' },
            { text: 'Uniapp', link: '/src/framework/uniapp/' },
            { text: 'Flutter', link: '/src/framework/flutter/' },
            { text: 'React Native', link: '/src/framework/react-native/' },
            { text: 'Android', link: '/src/framework/android/' },
            { text: 'NestJS', link: '/src/framework/nestjs/' },
            { text: 'Electron', link: '/src/framework/electron/' },
            { text: 'MongoDB', link: '/src/framework/mongodb/' },
          ],
        },
      ],
    },
    {
      text: '前端技术',
      items: [
        {
          items: [
            { text: 'UnoCss', link: '/src/frontend/unocss/' },
          ],
        },
      ],
    },
    {
      text: '前端工程化',
      link: '/src/engineering/',
    },
    {
      text: '环境搭建',
      items: [
        {
          items: [
            { text: 'Node 相关', link: '/src/develop/node/' },
            { text: 'Docker', link: '/src/develop/docker/' },
            { text: 'Git 相关', link: '/src/develop/git/' },
            { text: '键盘侠', link: '/src/develop/vim/' },
          ],
        },
        {
          text: '服务器',
          items: [
            { text: 'Centos', link: '/src/develop/centos/' },
          ],
        },
        {
          text: '其他',
          items: [
            { text: '内网穿透', link: '/src/develop/other/frp' },
          ],
        },
        // { text: 'Item C', link: '/item-3' },
      ],
    },
    {
      text: '随手记',
      items: [
        { text: '代码片段', link: '/src/notes/part/javascript' },
        { text: 'BUG', link: '/src/notes/bug/front_end' },
        { text: '随手记', link: '/src/notes/command' },
        { text: 'Windows', link: '/src/notes/windows/' },
        { text: 'Github', link: '/src/notes/github/part' },
      ],
    },
    {
      text: 'Fun',
      items: [
        {
          items: [
            { text: '前端', link: '/src/fun/frontend/' },
          ],
        },
      ],
    },
  ]
}
