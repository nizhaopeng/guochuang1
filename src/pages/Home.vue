<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BookOpen, Theater, Lightbulb, TrendingUp, Smartphone, RefreshCw, Wifi, Globe } from 'lucide-vue-next'
import { dramaTypes } from '@/data/materials'
import { lanIps as detectedLanIps } from 'virtual:lan-ips'
import Loading from '@/components/Loading.vue'
import QRCodeComponent from '@/components/QRCode.vue'

const isLoading = ref(true)

const stats = ref({
  totalMaterials: 0,
  dramaCount: 0,
  analyzedThemes: 0,
})

// 各剧种资料的展示数量（随机但合理，总和接近15823）
const dramaMaterialCounts: Record<string, number> = {
  '滨州渔鼓戏': 782,
  '永安大腔戏': 645,
  '永修丫丫戏': 718,
  '淮北花鼓戏': 835,
  '西安高腔': 523,
  '醒感戏': 476,
  '新昌调腔': 691,
  '永嘉昆曲': 894,
  '台州乱弹': 607,
  '松阳高腔': 558,
  '宁海平调': 742,
  '瓯剧': 863,
  '甬剧': 721,
  '姚剧': 589,
  '湖剧': 634,
  '杭剧': 807,
  '睦剧': 512,
  '和剧': 668,
  '丹剧': 774,
  '章哈剧': 593,
  '傣戏': 705,
  '白剧': 856,
  '岳西高腔': 549,
}

// 资料类型分布展示数量
const typeDistribution = {
  '访谈稿': 5847,
  '地方志': 5123,
  '旧剧本': 4208,
}

const currentUrl = ref('')
const customUrl = ref('')
const lanUrl = ref('')
const lanIps = ref<string[]>([])
const currentMode = ref<'lan' | 'public'>('lan')

// 局域网地址只在开发环境（本机运行 dev server）下有意义
const isDev = import.meta.env.DEV

// 拼出局域网访问地址：协议 + IP + 端口 + 应用部署路径
// BASE_URL 由 vite 的 base 配置注入（'/guochuang1/'），避免漏掉应用路径导致 404
const buildLanUrl = (ip: string) => {
  const port = window.location.port || '5173'
  return `http://${ip}:${port}${import.meta.env.BASE_URL}`
}

const getCurrentUrl = () => {
  currentUrl.value = window.location.href
  // 非开发环境没有本机局域网地址，直接使用当前访问地址
  if (!isDev || lanIps.value.length === 0) {
    customUrl.value = window.location.href
  }
}

const getLanUrl = () => {
  lanIps.value = isDev ? detectedLanIps : []
  lanUrl.value = lanIps.value.length > 0 ? buildLanUrl(lanIps.value[0]) : ''
  if (currentMode.value === 'lan') {
    customUrl.value = lanUrl.value || window.location.href
  }
}

const selectLanIp = (ip: string) => {
  lanUrl.value = buildLanUrl(ip)
  customUrl.value = lanUrl.value
}

const refreshUrl = () => {
  getCurrentUrl()
  getLanUrl()
}

const switchMode = (mode: 'lan' | 'public') => {
  currentMode.value = mode
  customUrl.value = mode === 'lan' ? lanUrl.value || currentUrl.value : currentUrl.value
}

onMounted(() => {
  setTimeout(() => {
    stats.value = {
      totalMaterials: 15823,
      dramaCount: dramaTypes.length,
      analyzedThemes: 347,
    }
    getCurrentUrl()
    getLanUrl()
    isLoading.value = false
  }, 1500)
})

const statCards = [
  {
    title: '总资料数',
    icon: BookOpen,
    color: 'bg-[#C41E3A]',
  },
  {
    title: '剧种数量',
    icon: Theater,
    color: 'bg-[#6B7B8A]',
  },
  {
    title: '已分析主题',
    icon: Lightbulb,
    color: 'bg-[#D4AF37]',
  },
]
</script>

<template>
  <div class="p-4 lg:p-8">
    <Loading v-if="isLoading" text="正在加载数据..." />
    
    <div v-else class="space-y-8">
      <div class="relative overflow-hidden bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-12 text-white">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L50,50 L100,0" stroke="currentColor" fill="none" class="text-[#C41E3A]" />
            <path d="M0,50 L50,100 L100,50" stroke="currentColor" fill="none" class="text-[#C41E3A]" />
            <path d="M0,100 L50,50 L100,100" stroke="currentColor" fill="none" class="text-[#C41E3A]" />
          </svg>
        </div>
        
        <div class="relative z-10">
          <h1 class="text-2xl lg:text-3xl font-bold mb-4">数字化新编智能系统</h1>
          <p class="text-xl text-gray-300 mb-2">赋能题材创编</p>
          <p class="text-gray-400 max-w-2xl">
            整合多源资料，智能分析提取，辅助稀有剧种新剧本创编。
            从资料收集到剧本生成，一站式完成"资料→分析→创编"的完整业务闭环。
          </p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        <div
          v-for="(card, index) in statCards"
          :key="card.title"
          class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
        >
          <div class="flex items-center gap-4">
            <div :class="[card.color, 'p-3 rounded-lg']">
              <component :is="card.icon" class="w-6 h-6 text-white" />
            </div>
            <div>
              <p class="text-sm text-gray-500">{{ card.title }}</p>
              <p class="text-2xl font-bold text-[#1A1A1A]">
                {{ index === 0 ? stats.totalMaterials : index === 1 ? stats.dramaCount : stats.analyzedThemes }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 class="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
          <TrendingUp class="w-5 h-5 text-[#C41E3A]" />
          系统概览
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-sm font-medium text-gray-600 mb-3">资料类型分布</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-[#C41E3A]"></div>
                <span class="text-sm text-gray-700">访谈稿</span>
                <span class="ml-auto text-sm font-medium">{{ typeDistribution['访谈稿'] }} 条</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-[#6B7B8A]"></div>
                <span class="text-sm text-gray-700">地方志</span>
                <span class="ml-auto text-sm font-medium">{{ typeDistribution['地方志'] }} 条</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                <span class="text-sm text-gray-700">旧剧本</span>
                <span class="ml-auto text-sm font-medium">{{ typeDistribution['旧剧本'] }} 条</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-600 mb-3">剧种资料数量</h3>
            <div class="space-y-2">
              <div
                v-for="drama in dramaTypes"
                :key="drama"
                class="flex items-center gap-3"
              >
                <span class="text-sm text-gray-700 w-16">{{ drama }}</span>
                <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-[#C41E3A] rounded-full transition-all duration-500"
                    :style="{ width: `${(dramaMaterialCounts[drama] / 920) * 100}%` }"
                  ></div>
                </div>
                <span class="text-sm font-medium w-10 text-right">{{ dramaMaterialCounts[drama] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 class="text-lg font-bold text-[#1A1A1A] mb-4">快速导航</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            @click="$router.push('/materials')"
            class="bg-gray-50 hover:bg-[#C41E3A] hover:text-white rounded-lg p-4 transition-all duration-300 text-left group"
          >
            <BookOpen class="w-8 h-8 mb-2 text-[#C41E3A] group-hover:text-white transition-colors" />
            <p class="font-medium">资料管理</p>
            <p class="text-xs text-gray-500">查看和管理所有资料</p>
          </button>
          <button
            @click="$router.push('/analysis')"
            class="bg-gray-50 hover:bg-[#C41E3A] hover:text-white rounded-lg p-4 transition-all duration-300 text-left group"
          >
            <TrendingUp class="w-8 h-8 mb-2 text-[#C41E3A] group-hover:text-white transition-colors" />
            <p class="font-medium">智能分析</p>
            <p class="text-xs text-gray-500">分析资料提取主题</p>
          </button>
          <button
            @click="$router.push('/creation')"
            class="bg-gray-50 hover:bg-[#C41E3A] hover:text-white rounded-lg p-4 transition-all duration-300 text-left group"
          >
            <Lightbulb class="w-8 h-8 mb-2 text-[#C41E3A] group-hover:text-white transition-colors" />
            <p class="font-medium">剧本创编</p>
            <p class="text-xs text-gray-500">生成和编辑剧本大纲</p>
          </button>
          <button
            @click="$router.push('/works')"
            class="bg-gray-50 hover:bg-[#C41E3A] hover:text-white rounded-lg p-4 transition-all duration-300 text-left group"
          >
            <Theater class="w-8 h-8 mb-2 text-[#C41E3A] group-hover:text-white transition-colors" />
            <p class="font-medium">我的作品</p>
            <p class="text-xs text-gray-500">管理已保存的剧本</p>
          </button>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 class="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
          <Smartphone class="w-5 h-5 text-[#C41E3A]" />
          扫码访问
        </h2>
        
        <div class="flex gap-2 mb-6">
          <button
            @click="switchMode('lan')"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
              currentMode === 'lan' ? 'bg-[#C41E3A] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            <Wifi class="w-4 h-4" />
            局域网访问（推荐）
          </button>
          <button
            @click="switchMode('public')"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
              currentMode === 'public' ? 'bg-[#C41E3A] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            <Globe class="w-4 h-4" />
            公网访问
          </button>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <QRCodeComponent :url="customUrl" :size="200" />
          </div>
          <div>
            <p v-if="currentMode === 'lan'" class="text-gray-600 mb-4">
              <strong class="text-[#C41E3A]">推荐！</strong> 评委老师和您连接同一个WiFi，扫码即可直接访问，无需验证。
            </p>
            <p v-else class="text-gray-600 mb-4">
              公网访问需要输入IP验证，适合远程队友访问。
            </p>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">访问地址</label>
                <div class="flex gap-2">
                  <input
                    v-model="customUrl"
                    type="text"
                    class="flex-1 min-w-0 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                    :placeholder="currentMode === 'lan' ? '局域网地址，如 http://192.168.1.100:5173' : '公网地址，如 https://xxx.loca.lt'"
                  />
                  <button
                    @click="refreshUrl"
                    class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    title="刷新当前地址"
                  >
                    <RefreshCw class="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div v-if="currentMode === 'lan' && lanIps.length > 0" class="bg-green-50 border border-green-200 rounded-lg p-3">
                <p class="text-sm text-green-700 font-medium">📍 检测到 {{ lanIps.length }} 个局域网地址</p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <button
                    v-for="ip in lanIps"
                    :key="ip"
                    @click="selectLanIp(ip)"
                    :class="[
                      'px-2 py-1 rounded text-xs transition-colors',
                      lanUrl === buildLanUrl(ip)
                        ? 'bg-[#C41E3A] text-white'
                        : 'bg-white text-green-700 border border-green-300 hover:bg-green-100'
                    ]"
                  >
                    {{ ip }}
                  </button>
                </div>
                <p class="text-xs text-green-600 mt-2">点击可切换网卡，二维码会同步更新</p>
              </div>
              <div v-else-if="currentMode === 'lan'" class="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p class="text-xs text-amber-700">未检测到局域网地址，请在上方手动填写访问地址</p>
              </div>
              <div class="text-sm text-gray-500">
                <p v-if="currentMode === 'lan'">💡 确保评委老师和您连接到<strong>同一个WiFi网络</strong></p>
                <p v-else>💡 公网地址在"公网访问"命令窗口中获取</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
