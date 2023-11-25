export function Toast(msg, duration = 2000) {
  const toastDOM = document.getElementById('custom_toast')
  if (toastDOM)
    document.body.removeChild(toastDOM)

  const m = document.createElement('div')
  m.id = 'custom_toast'
  m.innerHTML = msg
  m.style.cssText = 'color: rgb(255, 255, 255);background-color: rgba(0, 0, 0, 0.6);padding: 10px 15px;margin: 0 0 0 -60px;border-radius: 4px;position: fixed;    top: 50%;left: 50%;width: 130px;text-align: center;'
  document.body.appendChild(m)
  setTimeout(() => {
    if (!document.body.contains(m))
      return
    const d = 0.5
    m.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(m)
    }, d * 1000)
  }, duration)
}

export function copyText(text: string) {
  // return navigator.clipboard.writeText(text)

  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
