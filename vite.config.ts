import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import os from 'os'
import Inspector from 'unplugin-vue-dev-locator/vite'

// 读取本机所有局域网 IPv4 地址，供首页"扫码访问"生成二维码使用。
// 跳过回环地址与虚拟网卡（Docker / VMware / WSL）网段。
function getLanIps(): string[] {
  const virtualPrefixes = ['172.17.', '172.18.', '172.19.', '172.2']
  const interfaces = os.networkInterfaces()
  const ips: string[] = []

  for (const name of Object.keys(interfaces)) {
    for (const info of interfaces[name] ?? []) {
      if (info.family !== 'IPv4' || info.internal) continue
      if (virtualPrefixes.some((prefix) => info.address.startsWith(prefix))) continue
      ips.push(info.address)
    }
  }

  // 常见的家用/办公网段排前面，方便用户直接选中
  return ips.sort((a, b) => {
    const rank = (ip: string) => (ip.startsWith('192.168.') ? 0 : ip.startsWith('10.') ? 1 : 2)
    return rank(a) - rank(b)
  })
}

// 通过虚拟模块把局域网地址提供给前端，
// 避免前端为了拿到本机地址去请求外部 IP 查询接口。
function lanIpsPlugin(): Plugin {
  const virtualId = 'virtual:lan-ips'
  const resolvedId = '\0' + virtualId

  return {
    name: 'lan-ips',
    resolveId(id) {
      if (id === virtualId) return resolvedId
    },
    load(id) {
      if (id === resolvedId) {
        return `export const lanIps = ${JSON.stringify(getLanIps())};`
      }
    },
  }
}

export default defineConfig({
  base: '/guochuang1/',
  build: {
    sourcemap: 'hidden',
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
  plugins: [
    vue(),
    Inspector(),
    lanIpsPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
