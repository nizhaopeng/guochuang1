<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElInput, ElSelect, ElOption, ElDialog, ElForm, ElFormItem, ElMessage, ElMessageBox } from 'element-plus'
import { Plus, Search, Eye, Trash2, X } from 'lucide-vue-next'
import { materials as initialMaterials, dramaTypes, materialTypes, type Material } from '@/data/materials'
import Loading from '@/components/Loading.vue'

const isLoading = ref(true)
const materials = ref<Material[]>([...initialMaterials])

const searchKeyword = ref('')
const selectedDrama = ref('')
const selectedType = ref('')

const showAddModal = ref(false)
const showDetailModal = ref(false)

const selectedMaterial = ref<Material | null>(null)

const newMaterial = ref<Material>({
  id: '',
  drama: '昆曲',
  type: '访谈稿',
  title: '',
  content: '',
  keywords: [],
  region: '',
  year: new Date().getFullYear(),
  interviewee: '',
  source: '',
})

const keywordInput = ref('')

const filteredMaterials = computed(() => {
  return materials.value.filter((material) => {
    const matchKeyword = !searchKeyword.value || material.title.includes(searchKeyword.value)
    const matchDrama = !selectedDrama.value || material.drama === selectedDrama.value
    const matchType = !selectedType.value || material.type === selectedType.value
    return matchKeyword && matchDrama && matchType
  })
})

const addKeyword = () => {
  if (keywordInput.value.trim() && !newMaterial.value.keywords.includes(keywordInput.value.trim())) {
    newMaterial.value.keywords.push(keywordInput.value.trim())
    keywordInput.value = ''
  }
}

const removeKeyword = (keyword: string) => {
  newMaterial.value.keywords = newMaterial.value.keywords.filter((k) => k !== keyword)
}

const handleAddMaterial = () => {
  if (!newMaterial.value.title || !newMaterial.value.content) {
    ElMessage.warning('请填写标题和内容')
    return
  }

  const id = `${newMaterial.value.drama.charAt(0)}${newMaterial.value.type.charAt(0)}-${String(materials.value.length + 1).padStart(3, '0')}`
  newMaterial.value.id = id

  materials.value.unshift({ ...newMaterial.value })
  showAddModal.value = false
  ElMessage.success('资料添加成功')

  newMaterial.value = {
    id: '',
    drama: '昆曲',
    type: '访谈稿',
    title: '',
    content: '',
    keywords: [],
    region: '',
    year: new Date().getFullYear(),
    interviewee: '',
    source: '',
  }
}

const viewDetail = (material: Material) => {
  selectedMaterial.value = material
  showDetailModal.value = true
}

const deleteMaterial = (id: string) => {
  ElMessageBox.confirm('确定要删除这条资料吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      materials.value = materials.value.filter((m) => m.id !== id)
      ElMessage.success('删除成功')
    })
    .catch(() => {})
}

const getTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    '访谈稿': '访谈稿',
    '地方志': '地方志',
    '旧剧本': '旧剧本',
  }
  return labels[type] || type
}

setTimeout(() => {
  isLoading.value = false
}, 1000)
</script>

<template>
  <div class="p-4 lg:p-8">
    <Loading v-if="isLoading" text="正在加载资料..." />
    
    <div v-else>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-[#1A1A1A]">资料管理</h2>
        <ElButton type="primary" @click="showAddModal = true" class="bg-[#C41E3A] border-[#C41E3A]">
          <Plus class="w-4 h-4 mr-1" />
          新增资料
        </ElButton>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div class="flex flex-wrap gap-4 mb-6">
          <div class="flex items-center gap-2">
            <Search class="w-5 h-5 text-gray-400" />
            <ElInput
              v-model="searchKeyword"
              placeholder="按标题搜索"
              class="w-full sm:w-64"
              clearable
            />
          </div>
          
          <ElSelect
            v-model="selectedDrama"
            placeholder="选择剧种"
            class="w-40"
            clearable
          >
            <ElOption v-for="drama in dramaTypes" :key="drama" :label="drama" :value="drama" />
          </ElSelect>
          
          <ElSelect
            v-model="selectedType"
            placeholder="选择类型"
            class="w-40"
            clearable
          >
            <ElOption v-for="type in materialTypes" :key="type" :label="getTypeLabel(type)" :value="type" />
          </ElSelect>
        </div>
        
        <ElTable :data="filteredMaterials" border stripe>
          <ElTableColumn prop="drama" label="剧种" width="100" />
          <ElTableColumn prop="type" label="类型" width="100">
            <template #default="{ row }">
              <span :class="[
                'px-2 py-1 rounded text-xs',
                row.type === '访谈稿' ? 'bg-red-100 text-red-800' :
                row.type === '地方志' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              ]">
                {{ getTypeLabel(row.type) }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn prop="title" label="标题" min-width="200" />
          <ElTableColumn prop="keywords" label="关键词" min-width="150">
            <template #default="{ row }">
              <span v-for="keyword in row.keywords.slice(0, 3)" :key="keyword" class="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs mr-1">
                {{ keyword }}
              </span>
              <span v-if="row.keywords.length > 3" class="text-xs text-gray-400">+{{ row.keywords.length - 3 }}</span>
            </template>
          </ElTableColumn>
          <ElTableColumn prop="region" label="地域" width="120" />
          <ElTableColumn prop="year" label="年份" width="80" />
          <ElTableColumn label="操作" width="140" fixed="right">
            <template #default="{ row }">
              <ElButton size="small" type="primary" link @click="viewDetail(row as Material)">
                <Eye class="w-4 h-4" />
              </ElButton>
              <ElButton size="small" type="danger" link @click="deleteMaterial((row as Material).id)">
                <Trash2 class="w-4 h-4" />
              </ElButton>
            </template>
          </ElTableColumn>
        </ElTable>
      </div>
    </div>
    
    <ElDialog title="新增资料" v-model="showAddModal" width="600px">
      <ElForm :model="newMaterial" label-width="100px">
        <ElFormItem label="剧种">
          <ElSelect v-model="newMaterial.drama">
            <ElOption v-for="drama in dramaTypes" :key="drama" :label="drama" :value="drama" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="类型">
          <ElSelect v-model="newMaterial.type">
            <ElOption v-for="type in materialTypes" :key="type" :label="getTypeLabel(type)" :value="type" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="标题">
          <ElInput v-model="newMaterial.title" placeholder="请输入标题" />
        </ElFormItem>
        <ElFormItem label="内容">
          <ElInput v-model="newMaterial.content" type="textarea" :rows="4" placeholder="请输入内容摘要" />
        </ElFormItem>
        <ElFormItem label="关键词">
          <div class="flex gap-2 mb-2">
            <ElInput v-model="keywordInput" placeholder="输入关键词" @keyup.enter="addKeyword" />
            <ElButton type="primary" @click="addKeyword">添加</ElButton>
          </div>
          <div v-if="newMaterial.keywords.length > 0" class="flex flex-wrap gap-2">
            <span v-for="keyword in newMaterial.keywords" :key="keyword" class="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-sm">
              {{ keyword }}
              <X class="w-3 h-3 cursor-pointer" @click="removeKeyword(keyword)" />
            </span>
          </div>
        </ElFormItem>
        <ElFormItem label="地域">
          <ElInput v-model="newMaterial.region" placeholder="请输入地域" />
        </ElFormItem>
        <ElFormItem label="年份">
          <ElInput v-model.number="newMaterial.year" type="number" placeholder="请输入年份" />
        </ElFormItem>
        <ElFormItem v-if="newMaterial.type === '访谈稿'" label="受访者">
          <ElInput v-model="newMaterial.interviewee" placeholder="请输入受访者" />
        </ElFormItem>
        <ElFormItem v-if="newMaterial.type === '地方志'" label="出处">
          <ElInput v-model="newMaterial.source" placeholder="请输入出处" />
        </ElFormItem>
      </ElForm>
      <template #footer>
        <ElButton @click="showAddModal = false">取消</ElButton>
        <ElButton type="primary" @click="handleAddMaterial" class="bg-[#C41E3A] border-[#C41E3A]">确定</ElButton>
      </template>
    </ElDialog>
    
    <ElDialog title="资料详情" v-model="showDetailModal" width="700px">
      <div v-if="selectedMaterial" class="space-y-4">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-lg font-bold text-[#1A1A1A]">{{ selectedMaterial.title }}</h3>
            <div class="flex gap-2 mt-2">
              <span class="px-2 py-1 bg-[#C41E3A] text-white text-xs rounded">{{ selectedMaterial.drama }}</span>
              <span :class="[
                'px-2 py-1 rounded text-xs',
                selectedMaterial.type === '访谈稿' ? 'bg-red-100 text-red-800' :
                selectedMaterial.type === '地方志' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              ]">
                {{ getTypeLabel(selectedMaterial.type) }}
              </span>
            </div>
          </div>
          <div class="text-right text-sm text-gray-500">
            <p>{{ selectedMaterial.region }}</p>
            <p>{{ selectedMaterial.year }}年</p>
          </div>
        </div>
        
        <div v-if="selectedMaterial.interviewee" class="text-sm text-gray-600">
          <span class="font-medium">受访者：</span>{{ selectedMaterial.interviewee }}
        </div>
        <div v-if="selectedMaterial.source" class="text-sm text-gray-600">
          <span class="font-medium">出处：</span>{{ selectedMaterial.source }}
        </div>
        
        <div>
          <p class="font-medium text-gray-700 mb-2">内容：</p>
          <p class="text-gray-600 leading-relaxed">{{ selectedMaterial.content }}</p>
        </div>
        
        <div>
          <p class="font-medium text-gray-700 mb-2">关键词：</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="keyword in selectedMaterial.keywords" :key="keyword" class="px-3 py-1 bg-[#F5F5DC] text-[#1A1A1A] rounded-full text-sm">
              {{ keyword }}
            </span>
          </div>
        </div>
      </div>
      <template #footer>
        <ElButton @click="showDetailModal = false">关闭</ElButton>
      </template>
    </ElDialog>
  </div>
</template>
