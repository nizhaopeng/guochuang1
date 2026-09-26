<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ElSelect, ElOption, ElButton, ElInput, ElCard, ElMessage, ElRadioGroup, ElRadio } from 'element-plus'
import { PenTool, Sparkles, Save, Edit3 } from 'lucide-vue-next'
import { dramaTypes } from '@/data/materials'
import { analysisResults } from '@/data/analysisResult'
import { scriptTemplates, type ScriptTemplate, type Character } from '@/data/scriptTemplates'
import Loading from '@/components/Loading.vue'

const route = useRoute()

const isLoading = ref(true)
const isGenerating = ref(false)

const selectedDrama = ref('')
const selectedThemes = ref<string[]>([])

// 从「我的作品」跳转过来编辑时，记录被编辑作品的 id
const editingWorkId = ref('')
// 回填作品时会先设置剧种，需要跳过一次 watch 的主题清空逻辑
const skipDramaReset = ref(false)

const generatedTitle = ref('')
const selectedTitle = ref('')
const editedStructure = ref('')
const editedCharacters = ref<Character[]>([])
const editedCoreConflict = ref('')
const editedSampleLines = ref('')

const currentThemes = computed(() => {
  const result = analysisResults.find((r) => r.drama === selectedDrama.value)
  return result?.themes.map((t) => t.themeName) || []
})

const availableTemplates = computed(() => {
  return scriptTemplates.filter(
    (t) => t.drama === selectedDrama.value && selectedThemes.value.includes(t.theme)
  )
})

const hasGenerated = ref(false)

const generateOutline = () => {
  if (!selectedDrama.value || selectedThemes.value.length === 0) {
    ElMessage.warning('请先选择剧种和主题')
    return
  }

  isGenerating.value = true

  setTimeout(() => {
    const templates = availableTemplates.value
    if (templates.length > 0) {
      const template = templates[0]
      
      selectedTitle.value = template.suggestedTitle[0]
      generatedTitle.value = template.suggestedTitle.join(' / ')
      editedStructure.value = template.structure
      editedCharacters.value = JSON.parse(JSON.stringify(template.characters))
      editedCoreConflict.value = template.coreConflict
      editedSampleLines.value = template.sampleLines
      
      hasGenerated.value = true
    } else {
      ElMessage.warning('暂无可用于生成剧本的模板')
    }
    isGenerating.value = false
  }, 2000)
}

const saveScript = () => {
  if (!selectedTitle.value) {
    ElMessage.warning('请选择或输入一个剧名')
    return
  }

  const works = JSON.parse(localStorage.getItem('works') || '[]')

  // 编辑已有作品时原地更新，保留原创建时间
  if (editingWorkId.value) {
    const index = works.findIndex((w: { id: string }) => w.id === editingWorkId.value)
    if (index >= 0) {
      works[index] = {
        ...works[index],
        title: selectedTitle.value,
        drama: selectedDrama.value,
        themes: selectedThemes.value.join(', '),
        structure: editedStructure.value,
        characters: editedCharacters.value,
        coreConflict: editedCoreConflict.value,
        sampleLines: editedSampleLines.value,
      }
      localStorage.setItem('works', JSON.stringify(works))
      ElMessage.success('剧本更新成功！')
      return
    }
  }

  const work = {
    id: `work-${Date.now()}`,
    title: selectedTitle.value,
    drama: selectedDrama.value,
    themes: selectedThemes.value.join(', '),
    structure: editedStructure.value,
    characters: editedCharacters.value,
    coreConflict: editedCoreConflict.value,
    sampleLines: editedSampleLines.value,
    createdAt: new Date().toISOString(),
  }

  works.unshift(work)
  localStorage.setItem('works', JSON.stringify(works))

  ElMessage.success('剧本保存成功！')
}

// 从 localStorage 读取指定作品并回填到编辑区
const loadWorkForEdit = (workId: string) => {
  const works = JSON.parse(localStorage.getItem('works') || '[]')
  const work = works.find((w: { id: string }) => w.id === workId)

  if (!work) {
    ElMessage.warning('未找到该剧本，已切换为新建模式')
    selectedDrama.value = dramaTypes[0]
    return
  }

  editingWorkId.value = work.id
  if (selectedDrama.value !== work.drama) {
    skipDramaReset.value = true
    selectedDrama.value = work.drama
  }
  selectedThemes.value = String(work.themes || '').split(', ').filter(Boolean)
  selectedTitle.value = work.title
  generatedTitle.value = work.title
  editedStructure.value = work.structure
  editedCharacters.value = JSON.parse(JSON.stringify(work.characters || []))
  editedCoreConflict.value = work.coreConflict
  editedSampleLines.value = work.sampleLines
  hasGenerated.value = true
}

// 退出编辑模式，清空编辑区回到新建状态
const exitEditing = () => {
  editingWorkId.value = ''
  if (selectedDrama.value !== dramaTypes[0]) {
    skipDramaReset.value = true
    selectedDrama.value = dramaTypes[0]
  }
  selectedThemes.value = []
  selectedTitle.value = ''
  generatedTitle.value = ''
  editedStructure.value = ''
  editedCharacters.value = []
  editedCoreConflict.value = ''
  editedSampleLines.value = ''
  hasGenerated.value = false
}

watch(selectedDrama, () => {
  if (skipDramaReset.value) {
    skipDramaReset.value = false
    return
  }
  selectedThemes.value = []
  hasGenerated.value = false
})

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false

    const workId = route.query.workId
    if (typeof workId === 'string' && workId) {
      loadWorkForEdit(workId)
    } else {
      selectedDrama.value = dramaTypes[0]
    }
  }, 1000)
})
</script>

<template>
  <div class="p-4 lg:p-8">
    <Loading v-if="isLoading" text="正在加载创编系统..." />
    
    <div v-else>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-[#1A1A1A]">剧本创编</h2>
        <div v-if="editingWorkId" class="flex items-center gap-3">
          <span class="text-sm text-[#C41E3A] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            正在编辑：{{ selectedTitle }}
          </span>
          <ElButton size="small" @click="exitEditing">新建剧本</ElButton>
        </div>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6">
        <div class="space-y-6">
          <div>
            <h3 class="flex items-center gap-2 text-lg font-bold text-[#1A1A1A] mb-4">
              <span class="w-8 h-8 bg-[#C41E3A] text-white rounded-full flex items-center justify-center text-sm">1</span>
              选择剧种
            </h3>
            <ElSelect v-model="selectedDrama" class="w-full sm:w-64">
              <ElOption v-for="drama in dramaTypes" :key="drama" :label="drama" :value="drama" />
            </ElSelect>
          </div>
          
          <div>
            <h3 class="flex items-center gap-2 text-lg font-bold text-[#1A1A1A] mb-4">
              <span class="w-8 h-8 bg-[#C41E3A] text-white rounded-full flex items-center justify-center text-sm">2</span>
              选择主题
            </h3>
            <div class="flex flex-wrap gap-2">
              <ElButton
                v-for="theme in currentThemes"
                :key="theme"
                :type="selectedThemes.includes(theme) ? 'primary' : 'default'"
                :class="selectedThemes.includes(theme) ? 'bg-[#C41E3A] border-[#C41E3A]' : ''"
                @click="selectedThemes.includes(theme) ? selectedThemes = selectedThemes.filter(t => t !== theme) : selectedThemes.push(theme)"
              >
                {{ theme }}
              </ElButton>
            </div>
            <p v-if="currentThemes.length === 0" class="text-sm text-gray-500 mt-2">请先选择剧种</p>
          </div>
          
          <div>
            <h3 class="flex items-center gap-2 text-lg font-bold text-[#1A1A1A] mb-4">
              <span class="w-8 h-8 bg-[#C41E3A] text-white rounded-full flex items-center justify-center text-sm">3</span>
              生成剧本大纲
            </h3>
            <ElButton
              type="primary"
              @click="generateOutline"
              :loading="isGenerating"
              class="bg-[#C41E3A] border-[#C41E3A]"
            >
              <Sparkles class="w-4 h-4 mr-1" />
              {{ isGenerating ? '生成中...' : '生成剧本大纲' }}
            </ElButton>
          </div>
        </div>
      </div>
      
      <div v-if="isGenerating" class="flex justify-center py-16">
        <Loading text="正在生成剧本大纲，请稍候..." />
      </div>
      
      <div v-else-if="hasGenerated" class="space-y-6">
        <ElCard shadow="hover" class="border-gray-100">
          <template #header>
            <div class="flex items-center gap-2">
              <PenTool class="w-5 h-5 text-[#C41E3A]" />
              <span class="font-bold text-[#1A1A1A]">剧本大纲</span>
            </div>
          </template>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">建议剧名</label>
              <ElRadioGroup v-model="selectedTitle">
                <ElRadio
                  v-for="title in generatedTitle.split(' / ')"
                  :key="title"
                  :value="title"
                  class="mr-4"
                >
                  {{ title }}
                </ElRadio>
              </ElRadioGroup>
              <div class="mt-2">
                <ElInput v-model="selectedTitle" placeholder="或自定义剧名" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">分幕结构</label>
              <ElInput
                v-model="editedStructure"
                type="textarea"
                :rows="3"
                placeholder="请输入分幕结构"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">角色设定</label>
              <div class="space-y-4">
                <div
                  v-for="(character, index) in editedCharacters"
                  :key="index"
                  class="bg-[#F5F5DC] rounded-lg p-4"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <span class="font-bold text-[#1A1A1A]">{{ character.name }}</span>
                    <span class="text-sm text-gray-500">({{ character.role }})</span>
                  </div>
                  <ElInput
                    v-model="character.description"
                    type="textarea"
                    :rows="2"
                    placeholder="请输入角色描述"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">核心冲突</label>
              <ElInput
                v-model="editedCoreConflict"
                type="textarea"
                :rows="4"
                placeholder="请输入核心冲突描述"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">示例台词</label>
              <ElInput
                v-model="editedSampleLines"
                type="textarea"
                :rows="4"
                placeholder="请输入示例台词片段"
              />
            </div>
          </div>
        </ElCard>
        
        <div class="flex justify-center">
          <ElButton
            type="primary"
            @click="saveScript"
            class="bg-[#C41E3A] border-[#C41E3A] px-8"
          >
            <Save class="w-4 h-4 mr-2" />
            {{ editingWorkId ? '更新剧本' : '保存剧本' }}
          </ElButton>
        </div>
      </div>
      
      <div v-else class="text-center py-16 text-gray-500">
        <Edit3 class="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>请选择剧种和主题，点击"生成剧本大纲"按钮开始创编</p>
      </div>
    </div>
  </div>
</template>
