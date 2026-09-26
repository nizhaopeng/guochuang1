<script setup lang="ts">
import { ref } from 'vue'
import { Home, BookOpen, BarChart3, PenTool, FolderOpen, Menu } from 'lucide-vue-next'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 移动端抽屉开关。桌面端（lg 及以上）侧栏常驻，这个状态不起作用。
// 评委多用手机扫码打开，窄屏下侧栏必须收起来，否则正文会被挤到只剩一百来像素。
const isOpen = ref(false)

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
  isOpen.value = false // 手机上点完菜单要收起抽屉
}
</script>

<template>
  <!-- 移动端顶栏（桌面端隐藏）：手机上没有常驻侧栏，用这个提供导航入口 -->
  <header
    class="lg:hidden fixed top-0 inset-x-0 z-40 h-14 bg-[#1A1A1A] text-white flex items-center gap-3 px-4 shadow-md"
  >
    <button
      type="button"
      class="p-1 -ml-1 rounded hover:bg-[#2A2A2A] transition-colors"
      aria-label="打开导航菜单"
      @click="isOpen = true"
    >
      <Menu class="w-6 h-6" />
    </button>
    <span class="font-bold text-[#C41E3A]">剧创云</span>
    <span class="text-xs text-gray-400 truncate">数字化新编智能系统</span>
  </header>

  <!-- 抽屉遮罩：点空白处收起 -->
  <div
    v-if="isOpen"
    class="lg:hidden fixed inset-0 z-40 bg-black/50"
    aria-hidden="true"
    @click="isOpen = false"
  />

  <!-- 侧边栏本体：桌面端常驻；移动端是抽屉。
       所有移动端样式都挂在 max-lg: 前缀下，桌面端的类名与改造前完全一致，
       避免影响投影演示时的布局。 -->
  <aside
    :class="[
      'w-64 bg-[#1A1A1A] min-h-screen flex flex-col text-white',
      'max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:z-50',
      'max-lg:transition-transform max-lg:duration-300',
      isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full',
    ]"
  >
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
