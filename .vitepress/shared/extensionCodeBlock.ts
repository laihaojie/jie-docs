import { useMutationObserver } from '@vueuse/core'
import { usePopup } from 'root/hooks/dialog'
import { waitForElm } from 'root/utils'
import { inBrowser } from 'vitepress'
import { h } from 'vue'
import ExecDom from '../components/exec.vue'

export function extensionCodeBlock() {
  if (inBrowser) {
    waitForElm('.vp-doc').then((elm) => {
      bindExec(elm)
      useMutationObserver(elm, () => {
        bindExec(elm)
      }, { attributes: true })
    })
    waitForElm('.VPContent').then((elm) => {
      useMutationObserver(elm, () => {
        console.log('VPContent change')
      }, { attributes: true })
    })
  }
}

function bindExec(elm: HTMLElement) {
  const classNameConstants = ['language-sh', 'language-bash', 'language-shell']
  const domList = Array.from(elm.querySelectorAll('.vp-adaptive-theme')).filter(dom => dom.className.split(' ').some(className => classNameConstants.includes(className)))
  domList.forEach((dom) => {
    const copyDom = dom.querySelector('.copy')
    const execDom = document.createElement('button')
    execDom.className = 'exec'
    execDom.title = '终端执行'
    execDom.addEventListener('click', () => {
      const code = dom.querySelector('code')?.textContent || ''
      if (!code)
        return

      // 去除注释
      // 正则表达式用于匹配多行注释、单行注释和字符串
      const regex = /('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|#.*$|\/\*[\s\S]*?\*\/)/gm

      const cmdList = code.replace(regex, '').split(/\n/).filter(Boolean)
      const dialog = usePopup(h(ExecDom, { commands: cmdList, close: () => dialog.close() }))
      dialog.show()
    })

    // 插入到copy按钮前面
    copyDom?.insertAdjacentElement('beforebegin', execDom)
  })
}
