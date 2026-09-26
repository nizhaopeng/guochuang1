<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <!-- 窄屏下侧边栏是固定定位的抽屉（见 Sidebar.vue），所以内容区要留出顶栏高度 -->
  <div class="flex flex-col lg:flex-row min-h-screen bg-[#F5F5DC]">
    <Sidebar />
    <main class="flex-1 overflow-auto pt-14 lg:pt-0">
      <router-view />
    </main>
  </div>
</template>
