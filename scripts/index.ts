/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable n/handle-callback-err */
import path from 'path'
import fs from 'fs-extra'
import type { DefaultTheme } from 'vitepress'

const src_path = path.resolve(__dirname, '../src')

function readFiles(root_path) {
  const dirs = fs.readdirSync(root_path)
  for (const dir of dirs) {
    const fullPath = path.join(root_path, dir)
    // console.log(fullPath)
    fs.stat(fullPath, (err, stats) => {
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

  return dirs.map((file) => {
    const fullPath = path.join(dir_path, file)
    const content = fs.readFileSync(fullPath, 'utf-8')
    const stats = fs.statSync(fullPath)
    if (!stats.isDirectory()) {
      return {
        text: content.match(/#\s+(.*)$/m)?.[1],
        link: `/src${root_path}${file}`,
      }
    }
    else {
      return {}
    }
  }) as DefaultTheme.SidebarItem[]
}
// console.log(getMds('/notes/'))

interface User {
  name: string
  [key: string]: any
}

const user: User = {
  name: 'sss',
  test: 1,
}

const m: ClassDecorator = (target) => {
  console.log(target)
}
