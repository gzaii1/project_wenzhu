import { baseUrl } from '../api'

export const request = (url: string, opt?) => fetch(`${baseUrl}${url}`, opt).then(res => res.json())