<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12">
    <div class="relative">
      <div class="w-16 h-16 border-4 border-[#C41E3A] border-t-transparent rounded-full animate-spin"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-8 h-8 bg-[#C41E3A] rounded-full animate-pulse"></div>
      </div>
    </div>
    <p class="mt-4 text-[#6B7B8A] text-sm">{{ text || '加载中...' }}</p>
  </div>
</template>
