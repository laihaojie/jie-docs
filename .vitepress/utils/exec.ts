import { execBaseApi, execStoreShellKey } from "root/shared/config";

export function execRequest(data) {
  return fetch(execBaseApi, { method: 'POST', body: JSON.stringify({ ...data, shell: localStorage.getItem(execStoreShellKey) || '' }) }).then(res => res.json())
}
