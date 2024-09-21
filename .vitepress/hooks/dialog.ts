// Copyright 2023 Peter Chen
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  createApp,
  h,
} from 'vue'
import type {
  App,
  Component,
  ComputedOptions,
  MethodOptions,
  VNode,
  VNodeArrayChildren,
} from 'vue'

// type Data = Record<string, unknown>

interface RawSlots {
  [name: string]: unknown
  $stable?: boolean
}

type RawChildren =
  | string
  | number
  | boolean
  | VNode
  | VNodeArrayChildren
  | (() => any)

/**
 * 弹窗配置
 */
export interface IPopupOptions {
  rootComponent: Component<any, any, any, ComputedOptions, MethodOptions>
  rootProps?: Record<string, unknown> | null | undefined
  children?: RawChildren | RawSlots | undefined
}
export function usePopup(container: Component<any, any, any, ComputedOptions, MethodOptions>) {
  const el = document.createElement('div')
  const randomStr = Math.random().toString(36).substring(2)
  el.setAttribute('id', randomStr)
  el.setAttribute('name', randomStr)
  el.className = 'fixed z-100 top-0 left-0 right-0 bottom-0 bg-opacity-50 flex justify-center items-center'

  const createMyApp = () => createApp(h(container))
  let app: App<Element>

  const show = () => {
    app = createMyApp()
    app.mount(el)
    document.body.appendChild(el)
  }
  const destroy = () => {
    if (app)
      app.unmount()

    document.body.removeChild(el)
  }
  const close = () => {
    destroy()
  }

  return {
    show,
    destroy,
    close,
  }
}
