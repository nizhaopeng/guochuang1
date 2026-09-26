<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElTable, ElTableColumn, ElButton, ElMessage, ElMessageBox, ElDialog, ElInput } from 'element-plus'
import { FolderOpen, Eye, Trash2, Download, Edit3, X } from 'lucide-vue-next'
import Loading from '@/components/Loading.vue'

const router = useRouter()

interface Work {
  id: string
  title: string
  drama: string
  themes: string
  structure: string
  characters: { name: string; role: string; description: string }[]
  coreConflict: string
  sampleLines: string
  createdAt: string
}

const isLoading = ref(true)
const works = ref<Work[]>([])

const showDetailModal = ref(false)
const selectedWork = ref<Work | null>(null)

const loadWorks = () => {
  const saved = localStorage.getItem('works')
  if (saved) {
    works.value = JSON.parse(saved)
  } else {
    works.value = []
  }
}

const viewWork = (work: Work) => {
  selectedWork.value = work
  showDetailModal.value = true
}

// 跳转到创编页并携带作品 id，由创编页回填内容继续编辑
const editWork = (work: Work) => {
  router.push({ path: '/creation', query: { workId: work.id } })
}

const deleteWork = (id: string) => {
  ElMessageBox.confirm('确定要删除这个剧本吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      works.value = works.value.filter((w) => w.id !== id)
      localStorage.setItem('works', JSON.stringify(works.value))
      ElMessage.success('删除成功')
    })
    .catch(() => {})
}

const exportWork = (work: Work) => {
  const content = `剧本名称：${work.title}
剧种：${work.drama}
主题：${work.themes}
创建时间：${new Date(work.createdAt).toLocaleString()}

================== 分幕结构 ==================
${work.structure}

================== 角色设定 ==================
${work.characters.map((c) => `${c.name}（${c.role}）\n${c.description}`).join('\n\n')}

================== 核心冲突 ==================
${work.coreConflict}

================== 示例台词 ==================
${work.sampleLines || '暂无'}
`

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${work.title}.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  ElMessage.success('导出成功')
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN')
}

onMounted(() => {
  setTimeout(() => {
    loadWorks()
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <div class="p-8">
    <Loading v-if="isLoading" text="正在加载作品..." />
    
    <div v-else>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-[#1A1A1A]">我的作品</h2>
        <div class="text-sm text-gray-500">
          共 {{ works.length }} 个剧本
        </div>
      </div>
      
      <div v-if="works.length > 0" class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <ElTable :data="works" border stripe>
          <ElTableColumn prop="title" label="剧本名称" min-width="200" />
          <ElTableColumn prop="drama" label="剧种" width="100" />
          <ElTableColumn prop="themes" label="主题" min-width="150" />
          <ElTableColumn prop="createdAt" label="创建时间" width="120">
            <template #default="{ row }">
              {{ formatDate(row.createdAt) }}
            </template>
          </ElTableColumn>
          <ElTableColumn label="操作" width="290" fixed="right">
            <template #default="{ row }">
              <ElButton size="small" type="primary" link @click="viewWork(row as Work)">
                <Eye class="w-4 h-4" />
                查看
              </ElButton>
              <ElButton size="small" type="success" link @click="editWork(row as Work)">
                <Edit3 class="w-4 h-4" />
                编辑
              </ElButton>
              <ElButton size="small" type="warning" link @click="exportWork(row as Work)">
                <Download class="w-4 h-4" />
                导出
              </ElButton>
              <ElButton size="small" type="danger" link @click="deleteWork((row as Work).id)">
                <Trash2 class="w-4 h-4" />
                删除
              </ElButton>
            </template>
          </ElTableColumn>
        </ElTable>
      </div>
      
      <div v-else class="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center">
        <FolderOpen class="w-16 h-16 mx-auto mb-4 text-gray-300" />
        <p class="text-gray-500">暂无保存的剧本</p>
        <p class="text-sm text-gray-400 mt-2">前往"剧本创编"页面生成并保存剧本</p>
        <ElButton type="primary" @click="$router.push('/creation')" class="mt-4 bg-[#C41E3A] border-[#C41E3A]">
          去创编
        </ElButton>
      </div>
    </div>
    
    <ElDialog title="剧本详情" v-model="showDetailModal" width="800px">
      <div v-if="selectedWork" class="space-y-6">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-bold text-[#1A1A1A]">{{ selectedWork.title }}</h3>
            <div class="flex gap-2 mt-2">
              <span class="px-3 py-1 bg-[#C41E3A] text-white text-sm rounded">{{ selectedWork.drama }}</span>
            </div>
          </div>
          <div class="text-right text-sm text-gray-500">
            <p>创建时间：{{ formatDate(selectedWork.createdAt) }}</p>
          </div>
        </div>
        
        <div>
          <p class="font-medium text-gray-700 mb-2">主题：</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="theme in selectedWork.themes.split(', ')"
              :key="theme"
              class="px-3 py-1 bg-[#F5F5DC] text-[#1A1A1A] rounded-full text-sm"
            >
              {{ theme }}
            </span>
          </div>
        </div>
        
        <div>
          <p class="font-medium text-gray-700 mb-2">分幕结构：</p>
          <p class="text-gray-600 bg-[#F9F9F9] p-4 rounded-lg">{{ selectedWork.structure }}</p>
        </div>
        
        <div>
          <p class="font-medium text-gray-700 mb-2">角色设定：</p>
          <div class="space-y-3">
            <div
              v-for="(character, index) in selectedWork.characters"
              :key="index"
              class="bg-[#F5F5DC] rounded-lg p-4"
            >
              <div class="flex items-center gap-2 mb-1">
                <span class="font-bold text-[#1A1A1A]">{{ character.name }}</span>
                <span class="text-sm text-gray-500">({{ character.role }})</span>
              </div>
              <p class="text-sm text-gray-600">{{ character.description }}</p>
            </div>
          </div>
        </div>
        
        <div>
          <p class="font-medium text-gray-700 mb-2">核心冲突：</p>
          <p class="text-gray-600 bg-[#F9F9F9] p-4 rounded-lg">{{ selectedWork.coreConflict }}</p>
        </div>
        
        <div v-if="selectedWork.sampleLines">
          <p class="font-medium text-gray-700 mb-2">示例台词：</p>
          <p class="text-gray-600 bg-[#F9F9F9] p-4 rounded-lg font-italic">{{ selectedWork.sampleLines }}</p>
        </div>
      </div>
      <template #footer>
        <ElButton @click="showDetailModal = false">关闭</ElButton>
        <ElButton type="primary" @click="exportWork(selectedWork!)" class="bg-[#C41E3A] border-[#C41E3A]">
          <Download class="w-4 h-4 mr-1" />
          导出
        </ElButton>
      </template>
    </ElDialog>
  </div>
</template>
