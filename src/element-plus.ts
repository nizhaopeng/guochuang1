/**
 * Element Plus 按需样式。
 *
 * 原来 main.ts 里 `import 'element-plus/dist/index.css'` 会把全部 ~80 个组件的
 * 样式（376KB）一股脑打进来，而本项目实际只用到下面这些。
 *
 * 每个组件的 style/css 会自动带上它的依赖（如 dialog 会带上 base + overlay），
 * 所以只需要列出组件本身即可。
 *
 * ⚠️ 新增用了 Element Plus 组件时，记得在这里补一行，否则组件能渲染但没有样式。
 *    组件名 → element-plus/es/components/<kebab-case 名>/style/css
 */

import 'element-plus/es/components/base/style/css'

// 模板里用到的组件
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/form/style/css'
import 'element-plus/es/components/form-item/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/option/style/css'
import 'element-plus/es/components/radio/style/css'
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/select/style/css'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'

// 以函数方式调用的反馈组件（ElMessage / ElMessageBox）
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
