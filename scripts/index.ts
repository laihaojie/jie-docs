import type { DefaultTheme } from 'vitepress'
import path from 'node:path'
import fs from 'fs-extra'

const src_path = path.resolve(__dirname, '../src')

// @ts-expect-error xxx
// eslint-disable-next-line unused-imports/no-unused-vars
function readFiles(root_path) {
  const dirs = fs.readdirSync(root_path)
  for (const dir of dirs) {
    const fullPath = path.join(root_path, dir)
    // console.log(fullPath)
    fs.stat(fullPath, (_err, stats) => {
      if (stats.isDirectory())
        return readFiles(fullPath)
      else
        console.log(fullPath)
    })
  }
}

// readFiles(src_path)

export function getMds(root_path): DefaultTheme.SidebarItem[] {
  const dir_path = path.join(src_path, root_path)
  const dirs = fs.readdirSync(dir_path)

  const list = dirs.map((file) => {
    const fullPath = path.join(dir_path, file)
    const stats = fs.statSync(fullPath)
    if (!stats.isDirectory()) {
      const content = fs.readFileSync(fullPath, 'utf-8').trim().match(/^.*/)[0]

      const fileName = file.split('.')[0].trim()
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      const title = content.match(/#\s+(.*)$/m)?.[1].trim()
      const note = content.match(/<!--(.*?)-->/)?.[1].trim()

      return {
        text: note || title || fileName,
        link: `/src${root_path}${file}`,
        disable: note === 'disable',
      }
    }
    else {
      return {}
    }
  }).filter(i => !i.disable || !i.link) as DefaultTheme.SidebarItem[]
  return list
}
// console.log(getMds('/notes/'))
