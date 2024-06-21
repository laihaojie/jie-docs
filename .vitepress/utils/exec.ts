import { execBaseApi, execShell } from "root/shared/config";

export function execRequest(data) {
  return fetch(execBaseApi, { method: 'POST', body: JSON.stringify({ ...data, shell: execShell.value }) }).then(res => res.json())
}
