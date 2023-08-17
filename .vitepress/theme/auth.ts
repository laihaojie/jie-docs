import { useLocalStorage } from '@vueuse/core'

const isAuth = false

export async function auth(): Promise<boolean> {
  if (!isAuth) return true
  const token = useLocalStorage('token', '')
  const urlObj = new URL(window.location.href)
  const queryToken = urlObj.searchParams.get('token')
  if (queryToken)
    token.value = queryToken

  const res = await fetch('https://api.laihaojie.com/api/account/info', {
    method: 'GET',
    headers: {
      token: token.value,
    },
  }).then(res => res.json())

  return res.code === 1
}
