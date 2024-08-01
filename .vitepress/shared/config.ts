import { useLocalStorage } from '@vueuse/core'

export const execBaseApi = 'http://127.0.0.1:32677'
export const execCheckCommand = 'echo hello'
export const execStoreShellKey = 'exec_shell'
export const execShell = useLocalStorage(execStoreShellKey, '')
