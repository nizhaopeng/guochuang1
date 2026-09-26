<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { ElSelect, ElOption, ElButton, ElCard } from 'element-plus'
import { Play, BarChart3, Cloud } from 'lucide-vue-next'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { dramaTypes } from '@/data/materials'
import { analysisResults, type AnalysisResult, type Theme } from '@/data/analysisResult'
import Loading from '@/components/Loading.vue'

const isLoading = ref(true)
const isAnalyzing = ref(false)

const selectedDrama = ref(dramaTypes[0])

const wordCloudChart = ref<HTMLElement | null>(null)
const barChart = ref<HTMLElement | null>(null)

let wordCloudInstance: echarts.ECharts | null = null
let barChartInstance: echarts.ECharts | null = null

const currentAnalysis = computed<AnalysisResult | null>(() => {
  return analysisResults.find((r) => r.drama === selectedDrama.value) || null
})

const themes = computed<Theme[]>(() => {
  return currentAnalysis.value?.themes || []
})

const initWordCloud = () => {
  if (!wordCloudChart.value || !currentAnalysis.value) return

  if (wordCloudInstance) {
    wordCloudInstance.dispose()
  }

  wordCloudInstance = echarts.init(wordCloudChart.value)

  const option: echarts.EChartsOption = {
    tooltip: {},
    series: [
      {
        type: 'wordCloud' as const,
        gridSize: 20,
        sizeRange: [12, 60],
        rotationRange: [-90, 90],
        rotationStep: 15,
        shape: 'circle',
        width: 600,
        height: 400,
        drawOutOfBound: false,
        emphasis: {},
        data: currentAnalysis.value.highFreqWords.map((word) => ({
          name: word.name,
          value: word.weight,
        })),
      },
    ],
  }

  wordCloudInstance.setOption(option)
}

const initBarChart = () => {
  if (!barChart.value || !currentAnalysis.value) return

  if (barChartInstance) {
    barChartInstance.dispose()
  }

  barChartInstance = echarts.init(barChart.value)

  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: currentAnalysis.value.themes.map((t) => t.themeName),
      axisLabel: {
        rotate: 30,
        fontSize: 12,
      },
    },
    yAxis: {
      type: 'value',
      name: '权重',
    },
    series: [
      {
        name: '主题权重',
        type: 'bar',
        data: currentAnalysis.value.themes.map((t) => t.weight),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#C41E3A' },
            { offset: 1, color: '#8B0000' },
          ]),
          borderRadius: [4, 4, 0, 0],
        },
      },
    ],
  }

  barChartInstance.setOption(option)
}

const startAnalysis = () => {
  isAnalyzing.value = true

  setTimeout(() => {
    isAnalyzing.value = false
    nextTick(() => {
      initWordCloud()
      initBarChart()
    })
  }, 2000)
}

watch(selectedDrama, () => {
  nextTick(() => {
    initWordCloud()
    initBarChart()
  })
})

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    nextTick(() => {
      initWordCloud()
      initBarChart()
    })
  }, 1000)

  window.addEventListener('resize', () => {
    wordCloudInstance?.resize()
    barChartInstance?.resize()
  })
})
</script>

<template>
  <div class="p-8">
    <Loading v-if="isLoading" text="正在加载分析数据..." />
    
    <div v-else>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-[#1A1A1A]">智能分析</h2>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6">
        <div class="flex items-center gap-4">
          <span class="text-gray-600">选择剧种：</span>
          <ElSelect v-model="selectedDrama" class="w-40">
            <ElOption v-for="drama in dramaTypes" :key="drama" :label="drama" :value="drama" />
          </ElSelect>
          <ElButton type="primary" @click="startAnalysis" :loading="isAnalyzing" class="bg-[#C41E3A] border-[#C41E3A]">
            <Play class="w-4 h-4 mr-1" />
            {{ isAnalyzing ? '分析中...' : '开始分析' }}
          </ElButton>
        </div>
      </div>
      
      <div v-if="isAnalyzing" class="flex justify-center py-16">
        <Loading text="正在进行智能分析，请稍候..." />
      </div>
      
      <div v-else-if="currentAnalysis" class="space-y-6">
        <div class="grid grid-cols-2 gap-6">
          <ElCard shadow="hover" class="border-gray-100">
            <template #header>
              <div class="flex items-center gap-2">
                <Cloud class="w-5 h-5 text-[#C41E3A]" />
                <span class="font-bold text-[#1A1A1A]">高频词云图</span>
              </div>
            </template>
            <div ref="wordCloudChart" class="w-full h-80"></div>
          </ElCard>
          
          <ElCard shadow="hover" class="border-gray-100">
            <template #header>
              <div class="flex items-center gap-2">
                <BarChart3 class="w-5 h-5 text-[#C41E3A]" />
                <span class="font-bold text-[#1A1A1A]">主题分布</span>
              </div>
            </template>
            <div ref="barChart" class="w-full h-80"></div>
          </ElCard>
        </div>
        
        <ElCard shadow="hover" class="border-gray-100">
          <template #header>
            <span class="font-bold text-[#1A1A1A]">主题分析结果</span>
          </template>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="theme in themes"
              :key="theme.themeName"
              class="bg-[#F5F5DC] rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 class="font-bold text-[#1A1A1A] mb-2">{{ theme.themeName }}</h3>
              <div class="flex flex-wrap gap-2 mb-2">
                <span
                  v-for="keyword in theme.keywords"
                  :key="keyword"
                  class="px-2 py-0.5 bg-white rounded text-xs text-gray-600"
                >
                  {{ keyword }}
                </span>
              </div>
              <div class="flex justify-between items-center text-sm text-gray-500">
                <span>覆盖资料数：{{ theme.materialCount }} 条</span>
                <span>权重：{{ theme.weight }}</span>
              </div>
            </div>
          </div>
        </ElCard>
      </div>
      
      <div v-else class="text-center py-16 text-gray-500">
        <Cloud class="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>请选择剧种并点击"开始分析"按钮</p>
      </div>
    </div>
  </div>
</template>
