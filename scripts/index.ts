import path from 'path'
import fs from 'fs-extra'

console.log(fs.readdirSync(path.resolve('./docs')))
// fs.readdirSync(path.resolve('./docs'))
