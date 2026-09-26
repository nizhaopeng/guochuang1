/// <reference types="vite/client" />

// 由 vite.config.ts 中的 lan-ips 插件提供的本机局域网 IPv4 地址列表
declare module 'virtual:lan-ips' {
  export const lanIps: string[]
}
