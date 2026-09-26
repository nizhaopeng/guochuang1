export interface HighFreqWord {
  name: string
  weight: number
}

export interface Theme {
  themeName: string
  keywords: string[]
  materialCount: number
  weight: number
}

export interface AnalysisResult {
  drama: string
  highFreqWords: HighFreqWord[]
  themes: Theme[]
}

export const analysisResults: AnalysisResult[] = [
  {
    drama: '滨州渔鼓戏',
    highFreqWords: [
      { name: '渔鼓戏', weight: 100 },
      { name: '滨州', weight: 85 },
      { name: '唱腔', weight: 80 },
      { name: '传承', weight: 75 },
      { name: '张美兰', weight: 70 },
      { name: '民间', weight: 65 },
      { name: '鲁北', weight: 60 },
      { name: '曲牌', weight: 55 },
      { name: '梁祝', weight: 50 },
      { name: '王小赶脚', weight: 45 },
      { name: '创新', weight: 40 },
      { name: '非遗', weight: 35 },
      { name: '演出', weight: 30 },
      { name: '地方', weight: 28 },
      { name: '艺术', weight: 25 }
    ],
    themes: [
      {
        themeName: '渔鼓戏的传承与保护',
        keywords: ['传承', '保护', '非遗', '张美兰', '年轻演员'],
        materialCount: 6,
        weight: 95
      },
      {
        themeName: '渔鼓戏的艺术特色',
        keywords: ['唱腔', '曲牌', '民间', '鲁北', '表演'],
        materialCount: 5,
        weight: 88
      },
      {
        themeName: '传统剧目研究',
        keywords: ['梁祝', '王小赶脚', '剧本', '经典', '传统'],
        materialCount: 4,
        weight: 82
      },
      {
        themeName: '渔鼓戏与地域文化',
        keywords: ['滨州', '鲁北', '地方特色', '民间艺术', '风土人情'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '永安大腔戏',
    highFreqWords: [
      { name: '大腔戏', weight: 100 },
      { name: '永安', weight: 88 },
      { name: '大腔', weight: 82 },
      { name: '刘汉玉', weight: 78 },
      { name: '非遗', weight: 75 },
      { name: '明代', weight: 70 },
      { name: '粗犷', weight: 65 },
      { name: '唱腔', weight: 60 },
      { name: '辕门斩子', weight: 55 },
      { name: '白兔记', weight: 50 },
      { name: '传承', weight: 45 },
      { name: '福建', weight: 42 },
      { name: '古老', weight: 38 },
      { name: '艺术', weight: 35 },
      { name: '音乐', weight: 30 }
    ],
    themes: [
      {
        themeName: '大腔戏的历史渊源',
        keywords: ['明代', '起源', '古老', '福建', '永安'],
        materialCount: 5,
        weight: 98
      },
      {
        themeName: '大腔戏的艺术特色',
        keywords: ['大腔', '粗犷', '唱腔', '表演', '音乐'],
        materialCount: 6,
        weight: 85
      },
      {
        themeName: '大腔戏的传承与保护',
        keywords: ['刘汉玉', '传承', '非遗', '保护', '现状'],
        materialCount: 5,
        weight: 80
      },
      {
        themeName: '经典剧目赏析',
        keywords: ['辕门斩子', '白兔记', '剧本', '传统', '艺术'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '永修丫丫戏',
    highFreqWords: [
      { name: '丫丫戏', weight: 100 },
      { name: '永修', weight: 85 },
      { name: '王春兰', weight: 80 },
      { name: '民间', weight: 75 },
      { name: '采茶戏', weight: 70 },
      { name: '唱腔', weight: 65 },
      { name: '打猪草', weight: 60 },
      { name: '夫妻观灯', weight: 55 },
      { name: '乡土', weight: 50 },
      { name: '江西', weight: 45 },
      { name: '传承', weight: 40 },
      { name: '创新', weight: 35 },
      { name: '小戏', weight: 30 },
      { name: '风俗', weight: 28 },
      { name: '艺术', weight: 25 }
    ],
    themes: [
      {
        themeName: '丫丫戏的起源与发展',
        keywords: ['起源', '永修', '采茶戏', '民间', '发展'],
        materialCount: 5,
        weight: 96
      },
      {
        themeName: '丫丫戏的艺术特色',
        keywords: ['唱腔', '乡土', '小戏', '风俗', '表演'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '传统剧目研究',
        keywords: ['打猪草', '夫妻观灯', '剧本', '传统', '经典'],
        materialCount: 4,
        weight: 82
      },
      {
        themeName: '丫丫戏的传承与创新',
        keywords: ['王春兰', '传承', '创新', '年轻观众', '现状'],
        materialCount: 5,
        weight: 68
      }
    ]
  },
  {
    drama: '淮北花鼓戏',
    highFreqWords: [
      { name: '花鼓戏', weight: 100 },
      { name: '淮北', weight: 88 },
      { name: '陈若梅', weight: 82 },
      { name: '唱腔', weight: 78 },
      { name: '花鼓灯', weight: 75 },
      { name: '民间', weight: 70 },
      { name: '四告', weight: 65 },
      { name: '货郎担', weight: 60 },
      { name: '音乐', weight: 55 },
      { name: '花鼓调', weight: 50 },
      { name: '安徽', weight: 45 },
      { name: '传承', weight: 42 },
      { name: '社会现实', weight: 38 },
      { name: '孝道', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '花鼓戏的起源与发展',
        keywords: ['起源', '淮北', '花鼓灯', '安徽', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '花鼓戏的音乐特色',
        keywords: ['唱腔', '音乐', '花鼓调', '民歌', '伴奏'],
        materialCount: 6,
        weight: 90
      },
      {
        themeName: '经典剧目赏析',
        keywords: ['四告', '货郎担', '孝道', '社会现实', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '花鼓戏与地域文化',
        keywords: ['淮北', '安徽', '民间文化', '风俗', '地方特色'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '新昌调腔',
    highFreqWords: [
      { name: '调腔', weight: 100 },
      { name: '新昌', weight: 85 },
      { name: '章华琴', weight: 80 },
      { name: '干唱', weight: 75 },
      { name: '高腔', weight: 70 },
      { name: '明代', weight: 65 },
      { name: '北西厢', weight: 60 },
      { name: '汉宫秋', weight: 55 },
      { name: '古老', weight: 50 },
      { name: '程式化', weight: 45 },
      { name: '浙江', weight: 42 },
      { name: '传承', weight: 40 },
      { name: '古典', weight: 35 },
      { name: '表演', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '调腔的历史渊源',
        keywords: ['明代', '古老', '浙江', '新昌', '起源'],
        materialCount: 5,
        weight: 95
      },
      {
        themeName: '调腔的艺术特色',
        keywords: ['干唱', '高腔', '程式化', '表演', '唱腔'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '古典剧目改编',
        keywords: ['北西厢', '汉宫秋', '西厢记', '元杂剧', '剧本'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '调腔的传承与发展',
        keywords: ['章华琴', '传承', '现状', '创新', '保护'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '永嘉昆曲',
    highFreqWords: [
      { name: '永嘉昆曲', weight: 100 },
      { name: '永昆', weight: 90 },
      { name: '林媚媚', weight: 85 },
      { name: '南戏', weight: 80 },
      { name: '永嘉', weight: 75 },
      { name: '张协状元', weight: 70 },
      { name: '琵琶记', weight: 65 },
      { name: '南宋', weight: 60 },
      { name: '活化石', weight: 55 },
      { name: '永嘉腔', weight: 50 },
      { name: '苏昆', weight: 45 },
      { name: '浙江', weight: 42 },
      { name: '唱腔', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '古老', weight: 30 }
    ],
    themes: [
      {
        themeName: '永昆的历史价值',
        keywords: ['南宋', '古老', '活化石', '南戏', '浙江'],
        materialCount: 5,
        weight: 98
      },
      {
        themeName: '永昆与苏昆的比较',
        keywords: ['永昆', '苏昆', '永嘉腔', '唱腔', '差异'],
        materialCount: 5,
        weight: 90
      },
      {
        themeName: '南戏经典改编',
        keywords: ['张协状元', '琵琶记', '南戏', '剧本', '传统'],
        materialCount: 6,
        weight: 85
      },
      {
        themeName: '永昆的传承与保护',
        keywords: ['林媚媚', '传承', '保护', '非遗', '现状'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '瓯剧',
    highFreqWords: [
      { name: '瓯剧', weight: 100 },
      { name: '温州', weight: 88 },
      { name: '陈茶花', weight: 82 },
      { name: '声腔', weight: 78 },
      { name: '高机与吴三春', weight: 75 },
      { name: '乱弹', weight: 70 },
      { name: '温州话', weight: 65 },
      { name: '杀狗记', weight: 60 },
      { name: '声腔融合', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '表演', weight: 45 },
      { name: '传承', weight: 42 },
      { name: '南戏', weight: 38 },
      { name: '爱情', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '瓯剧的形成与发展',
        keywords: ['形成', '温州', '声腔融合', '乱弹', '浙江'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '瓯剧的艺术特色',
        keywords: ['声腔', '温州话', '表演', '音乐', '特色'],
        materialCount: 6,
        weight: 90
      },
      {
        themeName: '经典剧目赏析',
        keywords: ['高机与吴三春', '杀狗记', '爱情', '南戏', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '瓯剧与温州文化',
        keywords: ['温州', '地方特色', '文化名片', '方言', '风俗'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '丹剧',
    highFreqWords: [
      { name: '丹剧', weight: 100 },
      { name: '丹阳', weight: 85 },
      { name: '黄素萍', weight: 80 },
      { name: '民间歌舞', weight: 75 },
      { name: '珍珠塔', weight: 70 },
      { name: '丹阳调', weight: 65 },
      { name: '刘海砍樵', weight: 60 },
      { name: '江南', weight: 55 },
      { name: '江苏', weight: 50 },
      { name: '唱腔', weight: 45 },
      { name: '音乐', weight: 42 },
      { name: '传承', weight: 38 },
      { name: '民间传说', weight: 35 },
      { name: '喜剧', weight: 30 },
      { name: '艺术', weight: 25 }
    ],
    themes: [
      {
        themeName: '丹剧的起源与发展',
        keywords: ['起源', '丹阳', '民间歌舞', '江苏', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '丹剧的音乐特色',
        keywords: ['唱腔', '音乐', '丹阳调', '江南民歌', '伴奏'],
        materialCount: 6,
        weight: 90
      },
      {
        themeName: '传统剧目研究',
        keywords: ['珍珠塔', '刘海砍樵', '民间传说', '喜剧', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '丹剧与江南文化',
        keywords: ['江南', '江苏', '丹阳', '水乡', '地方特色'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '傣戏',
    highFreqWords: [
      { name: '傣戏', weight: 100 },
      { name: '傣族', weight: 88 },
      { name: '玉旺', weight: 82 },
      { name: '德宏', weight: 78 },
      { name: '娥并与桑洛', weight: 75 },
      { name: '叙事长诗', weight: 70 },
      { name: '傣语', weight: 65 },
      { name: '朗推罕', weight: 60 },
      { name: '云南', weight: 55 },
      { name: '民间文学', weight: 50 },
      { name: '爱情', weight: 45 },
      { name: '传承', weight: 42 },
      { name: '神话', weight: 38 },
      { name: '民族特色', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '傣戏的起源与发展',
        keywords: ['起源', '傣族', '德宏', '云南', '发展'],
        materialCount: 5,
        weight: 95
      },
      {
        themeName: '傣戏的艺术特色',
        keywords: ['傣语', '民间文学', '叙事长诗', '表演', '音乐'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '傣族叙事长诗改编',
        keywords: ['娥并与桑洛', '朗推罕', '叙事长诗', '爱情', '神话'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '傣戏与傣族文化',
        keywords: ['傣族', '民族特色', '传统文化', '风俗', '价值观'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '白剧',
    highFreqWords: [
      { name: '白剧', weight: 100 },
      { name: '白族', weight: 88 },
      { name: '杨益琨', weight: 82 },
      { name: '大理', weight: 78 },
      { name: '望夫云', weight: 75 },
      { name: '吹吹腔', weight: 70 },
      { name: '苍山会盟', weight: 65 },
      { name: '白族调', weight: 60 },
      { name: '云南', weight: 55 },
      { name: '民间音乐', weight: 50 },
      { name: '爱情', weight: 45 },
      { name: '传承', weight: 42 },
      { name: '历史', weight: 38 },
      { name: '民族团结', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '白剧的起源与发展',
        keywords: ['起源', '白族', '大理', '吹吹腔', '云南'],
        materialCount: 5,
        weight: 95
      },
      {
        themeName: '白剧的艺术特色',
        keywords: ['白族调', '民间音乐', '表演', '音乐', '民族特色'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '白族传说与历史改编',
        keywords: ['望夫云', '苍山会盟', '爱情', '历史', '神话'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '白剧与白族文化',
        keywords: ['白族', '大理', '传统文化', '民族团结', '风俗'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '西安高腔',
    highFreqWords: [
      { name: '西安高腔', weight: 100 },
      { name: '高腔', weight: 90 },
      { name: '陈美兰', weight: 85 },
      { name: '衢州', weight: 80 },
      { name: '干唱', weight: 75 },
      { name: '帮腔', weight: 70 },
      { name: '明代', weight: 65 },
      { name: '槐荫记', weight: 60 },
      { name: '三请梨花', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '古老', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '传承', weight: 38 },
      { name: '表演', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '西安高腔的历史渊源',
        keywords: ['明代', '古老', '浙江', '衢州', '起源'],
        materialCount: 5,
        weight: 95
      },
      {
        themeName: '高腔的艺术特色',
        keywords: ['干唱', '帮腔', '唱腔', '表演', '程式化'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '传统剧目研究',
        keywords: ['槐荫记', '三请梨花', '董永', '樊梨花', '剧本'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '高腔的传承与保护',
        keywords: ['陈美兰', '传承', '保护', '非遗', '现状'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '醒感戏',
    highFreqWords: [
      { name: '醒感戏', weight: 100 },
      { name: '胡志远', weight: 85 },
      { name: '永康', weight: 80 },
      { name: '宗教仪式', weight: 75 },
      { name: '民俗', weight: 70 },
      { name: '清代', weight: 65 },
      { name: '毛头花姐', weight: 60 },
      { name: '龙王庙', weight: 55 },
      { name: '民间信仰', weight: 50 },
      { name: '浙江', weight: 45 },
      { name: '庙会', weight: 42 },
      { name: '传承', weight: 38 },
      { name: '神秘', weight: 35 },
      { name: '祈雨', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '醒感戏的仪式性质',
        keywords: ['宗教仪式', '民俗', '民间信仰', '庙会', '祈雨'],
        materialCount: 6,
        weight: 98
      },
      {
        themeName: '醒感戏的历史渊源',
        keywords: ['清代', '起源', '永康', '浙江', '发展'],
        materialCount: 5,
        weight: 90
      },
      {
        themeName: '传统剧目研究',
        keywords: ['毛头花姐', '龙王庙', '传说', '神秘', '剧本'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '醒感戏的保护与传承',
        keywords: ['胡志远', '传承', '保护', '现状', '民俗文化'],
        materialCount: 4,
        weight: 68
      }
    ]
  },
  {
    drama: '台州乱弹',
    highFreqWords: [
      { name: '台州乱弹', weight: 100 },
      { name: '乱弹', weight: 90 },
      { name: '章飞娟', weight: 85 },
      { name: '台州', weight: 80 },
      { name: '声腔融合', weight: 75 },
      { name: '乱弹调', weight: 70 },
      { name: '吕布与貂蝉', weight: 65 },
      { name: '双阳公主', weight: 60 },
      { name: '浙江', weight: 55 },
      { name: '清代', weight: 50 },
      { name: '武打', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '音乐', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '台州乱弹的形成与发展',
        keywords: ['形成', '台州', '声腔融合', '清代', '浙江'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '乱弹的音乐特色',
        keywords: ['乱弹调', '唱腔', '音乐', '伴奏', '声腔'],
        materialCount: 6,
        weight: 90
      },
      {
        themeName: '经典剧目赏析',
        keywords: ['吕布与貂蝉', '双阳公主', '武打', '传奇', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '乱弹与地域文化',
        keywords: ['台州', '浙江', '地方特色', '民俗', '文化'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '松阳高腔',
    highFreqWords: [
      { name: '松阳高腔', weight: 100 },
      { name: '高腔', weight: 90 },
      { name: '叶德法', weight: 85 },
      { name: '松阳', weight: 80 },
      { name: '干唱', weight: 75 },
      { name: '帮腔', weight: 70 },
      { name: '明代', weight: 65 },
      { name: '夫人传', weight: 60 },
      { name: '琵琶记', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '古老', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '表演', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '松阳高腔的历史渊源',
        keywords: ['明代', '古老', '浙江', '松阳', '起源'],
        materialCount: 5,
        weight: 95
      },
      {
        themeName: '高腔的艺术特色',
        keywords: ['干唱', '帮腔', '唱腔', '表演', '程式化'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '古典剧目改编',
        keywords: ['夫人传', '琵琶记', '赵五娘', '古典', '剧本'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '高腔的传承与发展',
        keywords: ['叶德法', '传承', '保护', '现状', '创新'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '宁海平调',
    highFreqWords: [
      { name: '宁海平调', weight: 100 },
      { name: '平调', weight: 90 },
      { name: '叶全民', weight: 85 },
      { name: '宁海', weight: 80 },
      { name: '耍牙', weight: 75 },
      { name: '绝技', weight: 70 },
      { name: '明末清初', weight: 65 },
      { name: '金莲斩蛟', weight: 60 },
      { name: '红鬃烈马', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '武打', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '表演', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '宁海平调的历史渊源',
        keywords: ['明末清初', '起源', '浙江', '宁海', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '平调的"耍牙"艺术',
        keywords: ['耍牙', '绝技', '表演', '武打', '特色'],
        materialCount: 6,
        weight: 98
      },
      {
        themeName: '传统剧目研究',
        keywords: ['金莲斩蛟', '红鬃烈马', '薛平贵', '剧本', '经典'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '平调的传承与保护',
        keywords: ['叶全民', '传承', '保护', '非遗', '现状'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '甬剧',
    highFreqWords: [
      { name: '甬剧', weight: 100 },
      { name: '王锦文', weight: 85 },
      { name: '宁波', weight: 80 },
      { name: '宁波话', weight: 75 },
      { name: '天要落雨娘要嫁', weight: 70 },
      { name: '半把剪刀', weight: 65 },
      { name: '串客', weight: 60 },
      { name: '民间小调', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '母爱', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '表演', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '悲剧', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '甬剧的起源与发展',
        keywords: ['起源', '宁波', '串客', '民间小调', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '甬剧的艺术特色',
        keywords: ['宁波话', '唱腔', '表演', '音乐', '地方特色'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '经典剧目赏析',
        keywords: ['天要落雨娘要嫁', '半把剪刀', '母爱', '悲剧', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '甬剧与宁波文化',
        keywords: ['宁波', '浙江', '文化名片', '方言', '风俗'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '姚剧',
    highFreqWords: [
      { name: '姚剧', weight: 100 },
      { name: '沈守良', weight: 85 },
      { name: '余姚', weight: 80 },
      { name: '双推磨', weight: 75 },
      { name: '强盗与尼姑', weight: 70 },
      { name: '灯戏', weight: 65 },
      { name: '余姚腔', weight: 60 },
      { name: '民间歌舞', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '爱情', weight: 45 },
      { name: '乡土', weight: 42 },
      { name: '唱腔', weight: 38 },
      { name: '音乐', weight: 35 },
      { name: '传承', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '姚剧的起源与发展',
        keywords: ['起源', '余姚', '灯戏', '民间歌舞', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '姚剧的音乐特色',
        keywords: ['余姚腔', '唱腔', '音乐', '江南民歌', '伴奏'],
        materialCount: 6,
        weight: 90
      },
      {
        themeName: '传统剧目研究',
        keywords: ['双推磨', '强盗与尼姑', '爱情', '人性', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '姚剧与江南文化',
        keywords: ['浙江', '余姚', '江南', '乡土', '地方特色'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '湖剧',
    highFreqWords: [
      { name: '湖剧', weight: 100 },
      { name: '许丽娟', weight: 85 },
      { name: '湖州', weight: 80 },
      { name: '珍珠塔', weight: 75 },
      { name: '百花公主', weight: 70 },
      { name: '湖州话', weight: 65 },
      { name: '民间说唱', weight: 60 },
      { name: '小调', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '方卿', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '表演', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '传奇', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '湖剧的起源与发展',
        keywords: ['起源', '湖州', '民间说唱', '小调', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '湖剧的艺术特色',
        keywords: ['湖州话', '唱腔', '表演', '音乐', '地方特色'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '传统剧目研究',
        keywords: ['珍珠塔', '百花公主', '方卿', '传奇', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '湖剧与湖州文化',
        keywords: ['湖州', '浙江', '江南', '水乡', '文化'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '杭剧',
    highFreqWords: [
      { name: '杭剧', weight: 100 },
      { name: '翁仁康', weight: 85 },
      { name: '杭州', weight: 80 },
      { name: '银瓶', weight: 75 },
      { name: '李慧娘', weight: 70 },
      { name: '小热昏', weight: 65 },
      { name: '杭州话', weight: 60 },
      { name: '民间说唱', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '岳飞', weight: 45 },
      { name: '忠烈', weight: 42 },
      { name: '唱腔', weight: 38 },
      { name: '音乐', weight: 35 },
      { name: '传承', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '杭剧的起源与发展',
        keywords: ['起源', '杭州', '小热昏', '民间说唱', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '杭剧的艺术特色',
        keywords: ['杭州话', '唱腔', '音乐', '表演', '地方特色'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '经典剧目赏析',
        keywords: ['银瓶', '李慧娘', '岳飞', '忠烈', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '杭剧与杭州文化',
        keywords: ['杭州', '浙江', '文化名片', '西湖', '民俗'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '睦剧',
    highFreqWords: [
      { name: '睦剧', weight: 100 },
      { name: '方浩明', weight: 85 },
      { name: '淳安', weight: 80 },
      { name: '南山种麦', weight: 75 },
      { name: '白毛女', weight: 70 },
      { name: '竹马', weight: 65 },
      { name: '睦州话', weight: 60 },
      { name: '民间歌舞', weight: 55 },
      { name: '浙江', weight: 50 },
      { name: '劳动', weight: 45 },
      { name: '乡土', weight: 42 },
      { name: '唱腔', weight: 38 },
      { name: '表演', weight: 35 },
      { name: '传承', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '睦剧的起源与发展',
        keywords: ['起源', '淳安', '竹马', '民间歌舞', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '睦剧的艺术特色',
        keywords: ['睦州话', '唱腔', '表演', '乡土', '地方特色'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '传统与现代剧目',
        keywords: ['南山种麦', '白毛女', '劳动', '农民', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '睦剧与浙西文化',
        keywords: ['淳安', '浙江', '山区', '民俗', '文化'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '和剧',
    highFreqWords: [
      { name: '和剧', weight: 100 },
      { name: '王凤朝', weight: 85 },
      { name: '温州', weight: 80 },
      { name: '和剧调', weight: 75 },
      { name: '三国', weight: 70 },
      { name: '红鬃烈马', weight: 65 },
      { name: '民间戏曲', weight: 60 },
      { name: '浙江', weight: 55 },
      { name: '清代', weight: 50 },
      { name: '英雄', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '音乐', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '薛平贵', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '和剧的起源与发展',
        keywords: ['起源', '温州', '民间戏曲', '清代', '发展'],
        materialCount: 5,
        weight: 92
      },
      {
        themeName: '和剧的音乐特色',
        keywords: ['和剧调', '唱腔', '音乐', '伴奏', '声腔'],
        materialCount: 6,
        weight: 90
      },
      {
        themeName: '传统剧目研究',
        keywords: ['三国', '红鬃烈马', '英雄', '薛平贵', '剧本'],
        materialCount: 5,
        weight: 85
      },
      {
        themeName: '和剧与温州文化',
        keywords: ['温州', '浙江', '地方特色', '民俗', '文化'],
        materialCount: 4,
        weight: 72
      }
    ]
  },
  {
    drama: '章哈剧',
    highFreqWords: [
      { name: '章哈剧', weight: 100 },
      { name: '岩温扁', weight: 85 },
      { name: '傣族', weight: 80 },
      { name: '西双版纳', weight: 75 },
      { name: '召树屯', weight: 70 },
      { name: '喃木诺娜', weight: 65 },
      { name: '章哈', weight: 60 },
      { name: '傣语', weight: 55 },
      { name: '云南', weight: 50 },
      { name: '叙事长诗', weight: 45 },
      { name: '爱情', weight: 42 },
      { name: '神话', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '民族特色', weight: 32 },
      { name: '艺术', weight: 28 }
    ],
    themes: [
      {
        themeName: '章哈剧的起源与发展',
        keywords: ['起源', '傣族', '西双版纳', '章哈', '发展'],
        materialCount: 5,
        weight: 95
      },
      {
        themeName: '章哈剧的艺术特色',
        keywords: ['傣语', '叙事长诗', '表演', '音乐', '民族特色'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '傣族叙事长诗改编',
        keywords: ['召树屯', '喃木诺娜', '千瓣莲花', '爱情', '神话'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '章哈剧与傣族文化',
        keywords: ['傣族', '云南', '传统文化', '风俗', '价值观'],
        materialCount: 4,
        weight: 70
      }
    ]
  },
  {
    drama: '岳西高腔',
    highFreqWords: [
      { name: '岳西高腔', weight: 100 },
      { name: '高腔', weight: 90 },
      { name: '储德翰', weight: 85 },
      { name: '岳西', weight: 80 },
      { name: '干唱', weight: 75 },
      { name: '帮腔', weight: 70 },
      { name: '明代', weight: 65 },
      { name: '琵琶记', weight: 60 },
      { name: '拜月记', weight: 55 },
      { name: '安徽', weight: 50 },
      { name: '古老', weight: 45 },
      { name: '唱腔', weight: 42 },
      { name: '表演', weight: 38 },
      { name: '传承', weight: 35 },
      { name: '艺术', weight: 30 }
    ],
    themes: [
      {
        themeName: '岳西高腔的历史渊源',
        keywords: ['明代', '古老', '安徽', '岳西', '起源'],
        materialCount: 5,
        weight: 95
      },
      {
        themeName: '高腔的艺术特色',
        keywords: ['干唱', '帮腔', '唱腔', '表演', '程式化'],
        materialCount: 6,
        weight: 88
      },
      {
        themeName: '古典剧目改编',
        keywords: ['琵琶记', '拜月记', '赵五娘', '拜月亭', '剧本'],
        materialCount: 5,
        weight: 82
      },
      {
        themeName: '高腔的传承与发展',
        keywords: ['储德翰', '传承', '保护', '现状', '创新'],
        materialCount: 4,
        weight: 70
      }
    ]
  }
]
