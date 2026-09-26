<script setup lang="ts">
import { Home, BookOpen, BarChart3, PenTool, FolderOpen } from 'lucide-vue-next'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuItems = [
  { name: '首页', path: '/', icon: Home },
  { name: '资料管理', path: '/materials', icon: BookOpen },
  { name: '智能分析', path: '/analysis', icon: BarChart3 },
  { name: '剧本创编', path: '/creation', icon: PenTool },
  { name: '我的作品', path: '/works', icon: FolderOpen },
]

const isActive = (path: string) => route.path === path

const handleNavClick = (path: string) => {
  router.push(path)
}
</script>

<template>
  <aside class="w-64 bg-[#1A1A1A] min-h-screen flex flex-col text-white">
    <div class="p-6 border-b border-[#333]">
      <h1 class="text-xl font-bold text-[#C41E3A]">剧创云</h1>
      <p class="text-xs text-gray-400 mt-1">数字化新编智能系统</p>
    </div>
    
    <nav class="flex-1 p-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <button
            @click="handleNavClick(item.path)"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
              isActive(item.path)
                ? 'bg-[#C41E3A] text-white shadow-lg'
                : 'text-gray-300 hover:bg-[#2A2A2A] hover:text-white'
            ]"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span class="text-sm font-medium">{{ item.name }}</span>
          </button>
        </li>
      </ul>
    </nav>
    
    <div class="p-4 border-t border-[#333]">
      <div class="text-center">
        <p class="text-xs text-gray-500">稀有剧种智能创编平台</p>
      </div>
    </div>
  </aside>
</template>
