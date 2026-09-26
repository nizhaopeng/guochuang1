<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import QRCode from 'qrcode'

const props = defineProps<{
  url: string
  size?: number
}>()

const qrCodeUrl = ref('')
const isLoading = ref(true)

const generateQRCode = async () => {
  isLoading.value = true
  try {
    qrCodeUrl.value = await QRCode.toDataURL(props.url, {
      width: props.size || 200,
      margin: 2,
      color: {
        dark: '#1A1A1A',
        light: '#FFFFFF'
      }
    })
  } catch (error) {
    console.error('生成二维码失败:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  generateQRCode()
})

watch(() => props.url, () => {
  generateQRCode()
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-if="isLoading" class="flex items-center justify-center py-8">
      <div class="w-6 h-6 border-2 border-[#C41E3A] border-t-transparent rounded-full animate-spin"></div>
    </div>
    <img
      v-else
      :src="qrCodeUrl"
      :alt="'二维码: ' + url"
      class="rounded-lg shadow-md"
      :style="{ width: (size || 200) + 'px', height: (size || 200) + 'px' }"
    />
    <p class="mt-3 text-sm text-gray-500 text-center break-all max-w-[200px]">{{ url }}</p>
  </div>
</template>
