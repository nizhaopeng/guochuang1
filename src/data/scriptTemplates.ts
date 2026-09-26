export interface Character {
  name: string
  role: string
  description: string
}

export interface ScriptTemplate {
  drama: string
  theme: string
  suggestedTitle: string[]
  structure: string
  characters: Character[]
  coreConflict: string
  sampleLines: string
}

export const scriptTemplates: ScriptTemplate[] = [
  {
    drama: '滨州渔鼓戏',
    theme: '渔鼓戏的传承与保护',
    suggestedTitle: ['渔鼓声声', '传承之路', '鲁北新韵'],
    structure: '第一幕 渔鼓回响 → 第二幕 传承危机 → 第三幕 薪火相传',
    characters: [
      {
        name: '张秀英',
        role: '渔鼓戏老艺人',
        description: '滨州渔鼓戏传承人，技艺精湛，年事已高'
      },
      {
        name: '李小梅',
        role: '青年渔鼓戏演员',
        description: '热爱渔鼓戏，但面临现代生活的压力'
      },
      {
        name: '王文化',
        role: '文化学者',
        description: '致力于渔鼓戏研究和保护的专家'
      },
      {
        name: '陈乡长',
        role: '乡长',
        description: '支持传统文化保护的地方干部'
      }
    ],
    coreConflict: '传统渔鼓戏在现代社会面临传承困境，老一辈艺人与青年演员在观念和方法上产生碰撞，最终在政府和学者的帮助下共同探索出一条传统与现代融合的传承之路。',
    sampleLines: '张秀英："渔鼓一响，精神就爽，这是咱鲁北人的魂啊！"李小梅："张奶奶，我想把渔鼓戏带到更大的舞台上去！"'
  },
  {
    drama: '滨州渔鼓戏',
    theme: '渔鼓戏的艺术特色',
    suggestedTitle: ['渔鼓神韵', '鲁腔渔韵', '声动滨州'],
    structure: '第一幕 曲牌古韵 → 第二幕 表演创新 → 第三幕 艺术升华',
    characters: [
      {
        name: '赵师傅',
        role: '渔鼓戏唱腔老师',
        description: '精通渔鼓戏各种曲牌和唱腔'
      },
      {
        name: '孙小芳',
        role: '年轻渔鼓戏演员',
        description: '富有创新精神的青年演员'
      },
      {
        name: '李导演',
        role: '戏曲导演',
        description: '致力于传统戏曲创新的导演'
      },
      {
        name: '观众代表',
        role: '观众',
        description: '热爱渔鼓戏的普通观众'
      }
    ],
    coreConflict: '渔鼓戏的传统唱腔与现代观众的审美需求之间存在差距，年轻演员希望在保留传统韵味的基础上进行创新，老艺人则担心创新会失去渔鼓戏的本质特色。',
    sampleLines: '赵师傅："这曲牌是老祖宗传下来的，不能乱改！"孙小芳："赵师傅，我们可以在传统基础上加点新东西嘛！"'
  },
  {
    drama: '永安大腔戏',
    theme: '大腔戏的历史渊源',
    suggestedTitle: ['大腔古韵', '永安遗音', '明代绝唱'],
    structure: '第一幕 大腔起源 → 第二幕 兴盛时期 → 第三幕 传承延续',
    characters: [
      {
        name: '刘老艺人',
        role: '大腔戏传承人',
        description: '精通大腔戏历史和技艺的老艺人'
      },
      {
        name: '小林',
        role: '年轻研究者',
        description: '研究大腔戏历史的年轻学者'
      },
      {
        name: '王团长',
        role: '剧团团长',
        description: '大腔戏剧团的负责人'
      },
      {
        name: '说书人',
        role: '旁白',
        description: '讲述大腔戏历史的说书人'
      }
    ],
    coreConflict: '大腔戏作为明代古老剧种，其历史渊源和文化价值有待深入挖掘和传承，年轻研究者与老艺人共同努力，揭开大腔戏神秘的历史面纱。',
    sampleLines: '刘老艺人："大腔戏从明代传到现在，已经几百年了，不容易啊！"小林："刘爷爷，您讲的这些历史太珍贵了，我一定要记录下来！"'
  },
  {
    drama: '永安大腔戏',
    theme: '大腔戏的艺术特色',
    suggestedTitle: ['粗犷大腔', '声震山谷', '永安雄风'],
    structure: '第一幕 大腔震撼 → 第二幕 表演特色 → 第三幕 艺术魅力',
    characters: [
      {
        name: '陈大生',
        role: '大腔戏须生',
        description: '擅长演唱大腔的资深演员'
      },
      {
        name: '周小丽',
        role: '青年旦角演员',
        description: '学习大腔戏表演的年轻演员'
      },
      {
        name: '吴老师',
        role: '艺术指导',
        description: '研究大腔戏表演艺术的专家'
      },
      {
        name: '戏迷',
        role: '观众',
        description: '热爱大腔戏的忠实观众'
      }
    ],
    coreConflict: '大腔戏粗犷豪放的表演风格与现代观众的审美存在差异，年轻演员在学习和传承过程中面临如何把握传统韵味与现代呈现的平衡问题。',
    sampleLines: '陈大生："大腔戏讲究的就是气势，要唱得山摇地动！"周小丽："陈老师，我怎么才能唱出那种粗犷的感觉呢？"'
  },
  {
    drama: '永修丫丫戏',
    theme: '丫丫戏的起源与发展',
    suggestedTitle: ['丫丫传奇', '赣北风韵', '乡音乡情'],
    structure: '第一幕 民间小调 → 第二幕 丫丫成形 → 第三幕 走向舞台',
    characters: [
      {
        name: '王奶奶',
        role: '丫丫戏老艺人',
        description: '见证丫丫戏从民间小调发展成为地方剧种'
      },
      {
        name: '春花',
        role: '年轻丫丫戏演员',
        description: '充满活力的新一代丫丫戏演员'
      },
      {
        name: '李书记',
        role: '文化站站长',
        description: '支持丫丫戏发展的基层干部'
      },
      {
        name: '乡亲们',
        role: '村民',
        description: '热爱丫丫戏的当地群众'
      }
    ],
    coreConflict: '丫丫戏从民间小调发展成为地方剧种的历程中，面临着如何在保留乡土气息的同时提升艺术水准的挑战，老艺人与年轻演员共同努力，推动丫丫戏走向更大的舞台。',
    sampleLines: '王奶奶："当初我们就在田埂上唱，没想到现在能登上大舞台！"春花："王奶奶，我们一定会把丫丫戏唱得更好！"'
  },
  {
    drama: '永修丫丫戏',
    theme: '传统剧目研究',
    suggestedTitle: ['打猪草新传', '观灯趣事', '丫丫经典'],
    structure: '第一幕 经典重现 → 第二幕 现代解读 → 第三幕 创新演绎',
    characters: [
      {
        name: '刘编剧',
        role: '戏曲编剧',
        description: '致力于丫丫戏剧目整理和创新的编剧'
      },
      {
        name: '张演员',
        role: '丫丫戏主演',
        description: '擅长表演传统丫丫戏剧目的演员'
      },
      {
        name: '陈导演',
        role: '导演',
        description: '指导剧目排演的导演'
      },
      {
        name: '观众',
        role: '现代观众',
        description: '观看丫丫戏演出的现代观众'
      }
    ],
    coreConflict: '传统丫丫戏剧目如何在现代社会中焕发新的生命力，编剧和演员在整理传统剧目的同时尝试融入现代元素，使古老剧目适应现代观众的审美需求。',
    sampleLines: '刘编剧："这些传统剧目是瑰宝，我们要好好挖掘！"张演员："刘老师，您改的剧本让老戏有了新味道！"'
  },
  {
    drama: '淮北花鼓戏',
    theme: '花鼓戏的音乐特色',
    suggestedTitle: ['花鼓新韵', '淮北乡音', '鼓乐声声'],
    structure: '第一幕 花鼓溯源 → 第二幕 音乐创新 → 第三幕 声动江淮',
    characters: [
      {
        name: '李琴师',
        role: '花鼓戏琴师',
        description: '精通花鼓戏音乐的老琴师'
      },
      {
        name: '小王',
        role: '青年音乐创作人',
        description: '致力于花鼓戏音乐创新的年轻人'
      },
      {
        name: '赵团长',
        role: '花鼓戏剧团团长',
        description: '支持音乐创新的剧团负责人'
      },
      {
        name: '乐迷',
        role: '观众',
        description: '热爱花鼓戏音乐的听众'
      }
    ],
    coreConflict: '花鼓戏传统音乐与现代音乐创作之间存在碰撞，老琴师坚持传统韵味，青年创作者希望融入现代音乐元素，最终找到传统与现代融合的平衡点。',
    sampleLines: '李琴师："花鼓调的韵味就在这股乡土气息里！"小王："李师傅，我们可以用现代乐器来烘托传统曲调！"'
  },
  {
    drama: '淮北花鼓戏',
    theme: '经典剧目赏析',
    suggestedTitle: ['四告状', '货郎新传', '花鼓春秋'],
    structure: '第一幕 经典上演 → 第二幕 剧情解读 → 第三幕 现实意义',
    characters: [
      {
        name: '王主演',
        role: '花鼓戏主演',
        description: '擅长表演经典花鼓戏剧目的资深演员'
      },
      {
        name: '张教授',
        role: '戏曲评论家',
        description: '研究花鼓戏剧目的学者'
      },
      {
        name: '李观众',
        role: '观众代表',
        description: '观看演出的普通观众'
      },
      {
        name: '主持人',
        role: '主持人',
        description: '剧目赏析活动的主持人'
      }
    ],
    coreConflict: '经典花鼓戏剧目如何在现代社会中传递其深刻的社会意义，演员和学者共同解读剧目内涵，使观众理解传统剧目所蕴含的人文价值。',
    sampleLines: '王主演："演了几十年《四告》，每次都有新体会！"张教授："这部戏揭示的孝道主题，在今天仍然具有现实意义！"'
  },
  {
    drama: '傣戏',
    theme: '傣族叙事长诗改编',
    suggestedTitle: ['娥并与桑洛', '孔雀之恋', '傣韵流长'],
    structure: '第一幕 相遇相恋 → 第二幕 爱情受阻 → 第三幕 生死不渝',
    characters: [
      {
        name: '娥并',
        role: '傣族少女',
        description: '美丽善良的傣族姑娘'
      },
      {
        name: '桑洛',
        role: '傣族青年',
        description: '勇敢忠贞的傣族青年'
      },
      {
        name: '桑洛母亲',
        role: '老旦',
        description: '反对儿子与娥并相恋的母亲'
      },
      {
        name: '乡亲',
        role: '村民',
        description: '同情娥并与桑洛的傣族乡亲'
      }
    ],
    coreConflict: '娥并与桑洛的爱情受到家庭和社会的阻挠，他们用生命捍卫爱情的忠贞，展现了傣族人民对自由爱情的追求和对封建礼教的反抗。',
    sampleLines: '娥并："桑洛哥，无论遇到什么困难，我都不会离开你！"桑洛："娥并妹，我们的爱情会像孔雀一样美丽！"'
  },
  {
    drama: '白剧',
    theme: '白族传说与历史改编',
    suggestedTitle: ['望夫云传奇', '苍山盟', '白族风情'],
    structure: '第一幕 公主思凡 → 第二幕 猎人相救 → 第三幕 化为彩云',
    characters: [
      {
        name: '阿凤公主',
        role: '公主',
        description: '美丽善良的南诏公主'
      },
      {
        name: '阿龙',
        role: '猎人',
        description: '勇敢正直的年轻猎人'
      },
      {
        name: '南诏王',
        role: '国王',
        description: '反对公主与猎人相恋的国王'
      },
      {
        name: '苍山神',
        role: '神仙',
        description: '见证爱情的苍山神灵'
      }
    ],
    coreConflict: '阿凤公主与猎人阿龙的爱情受到南诏王的强烈反对，他们的爱情感动了天地，最终化为苍山之巅的望夫云，成为白族人民传颂千古的爱情传说。',
    sampleLines: '阿凤公主："阿龙哥，哪怕化为彩云，我也要和你在一起！"阿龙："公主，我们的爱情会永远留在苍山之上！"'
  },
  {
    drama: '西安高腔',
    theme: '高腔的艺术特色',
    suggestedTitle: ['高腔绝唱', '干唱传情', '衢州古韵'],
    structure: '第一幕 干唱震撼 → 第二幕 帮腔呼应 → 第三幕 艺术升华',
    characters: [
      {
        name: '陈老师',
        role: '高腔老艺人',
        description: '精通高腔干唱技艺的传承人'
      },
      {
        name: '小林',
        role: '青年演员',
        description: '学习高腔表演的年轻演员'
      },
      {
        name: '王团长',
        role: '剧团团长',
        description: '支持高腔传承的负责人'
      },
      {
        name: '观众',
        role: '观众',
        description: '欣赏高腔艺术的观众'
      }
    ],
    coreConflict: '高腔独特的干唱无伴奏形式在现代舞台上面临挑战，老艺人如何传授这一绝技，年轻演员如何领悟并创新演绎，使高腔艺术焕发新的生命力。',
    sampleLines: '陈老师："高腔讲究的就是干唱，要唱得声情并茂！"小林："陈老师，我终于体会到干唱的韵味了！"'
  },
  {
    drama: '醒感戏',
    theme: '醒感戏的仪式性质',
    suggestedTitle: ['醒感神韵', '祈福戏韵', '永康秘戏'],
    structure: '第一幕 庙会祈福 → 第二幕 醒感上演 → 第三幕 人神共欢',
    characters: [
      {
        name: '胡师傅',
        role: '醒感戏传承人',
        description: '精通醒感戏仪式表演的老艺人'
      },
      {
        name: '小周',
        role: '年轻演员',
        description: '学习醒感戏表演的年轻人'
      },
      {
        name: '李会长',
        role: '庙会会长',
        description: '组织庙会活动的负责人'
      },
      {
        name: '香客',
        role: '村民',
        description: '参与庙会的当地群众'
      }
    ],
    coreConflict: '醒感戏作为兼具宗教仪式和戏曲表演性质的独特艺术形式，如何在现代社会中保持其仪式性和艺术性，老艺人与年轻演员共同探索传承之路。',
    sampleLines: '胡师傅："醒感戏不只是唱戏，更是祈福仪式！"小周："胡师傅，我明白了，每一个动作都有深意！"'
  },
  {
    drama: '台州乱弹',
    theme: '乱弹的音乐特色',
    suggestedTitle: ['乱弹新声', '台州绝唱', '声腔交融'],
    structure: '第一幕 声腔溯源 → 第二幕 乱弹创新 → 第三幕 艺韵流芳',
    characters: [
      {
        name: '章老师',
        role: '乱弹音乐专家',
        description: '精通乱弹各种声腔的老艺人'
      },
      {
        name: '小陈',
        role: '青年音乐创作人',
        description: '致力于乱弹音乐创新的年轻人'
      },
      {
        name: '赵团长',
        role: '乱弹剧团团长',
        description: '支持音乐创新的负责人'
      },
      {
        name: '戏迷',
        role: '观众',
        description: '热爱乱弹的戏迷'
      }
    ],
    coreConflict: '台州乱弹融合多种声腔的艺术特色在现代社会中如何展现其独特魅力，老艺人与青年创作者在传承与创新之间找到平衡，使乱弹音乐焕发新的光彩。',
    sampleLines: '章老师："乱弹的魅力就在于多种声腔的交融！"小陈："章老师，我想用现代编曲来呈现传统乱弹！"'
  },
  {
    drama: '松阳高腔',
    theme: '高腔的艺术特色',
    suggestedTitle: ['松阳绝唱', '古韵新声', '帮腔传情'],
    structure: '第一幕 古韵传承 → 第二幕 帮腔魅力 → 第三幕 艺术新生',
    characters: [
      {
        name: '叶老艺人',
        role: '高腔传承人',
        description: '精通松阳高腔帮腔艺术的老艺人'
      },
      {
        name: '小吴',
        role: '青年演员',
        description: '学习高腔帮腔的年轻演员'
      },
      {
        name: '王导演',
        role: '戏曲导演',
        description: '致力于高腔创新的导演'
      },
      {
        name: '观众',
        role: '观众',
        description: '欣赏高腔艺术的现代观众'
      }
    ],
    coreConflict: '松阳高腔独特的帮腔艺术如何在现代舞台上传承和创新，老艺人传授帮腔绝技，年轻演员领悟并融入现代表演元素，使古老高腔焕发新的生命力。',
    sampleLines: '叶老艺人："帮腔是高腔的灵魂，要唱得和谐优美！"小吴："叶爷爷，我终于学会帮腔的诀窍了！"'
  },
  {
    drama: '宁海平调',
    theme: '平调的"耍牙"艺术',
    suggestedTitle: ['耍牙传奇', '平调绝技', '宁海一绝'],
    structure: '第一幕 绝技揭秘 → 第二幕 苦练成才 → 第三幕 技惊四座',
    characters: [
      {
        name: '叶师傅',
        role: '耍牙传承人',
        description: '精通平调耍牙绝技的老艺人'
      },
      {
        name: '小孙',
        role: '青年演员',
        description: '学习耍牙技艺的年轻演员'
      },
      {
        name: '李团长',
        role: '平调剧团团长',
        description: '支持绝技传承的负责人'
      },
      {
        name: '评委',
        role: '专家',
        description: '评审耍牙表演的专家'
      }
    ],
    coreConflict: '宁海平调独特的"耍牙"绝技面临失传的危险，老艺人如何传授这一艰辛的技艺，年轻演员如何克服困难掌握绝技，使这一非物质文化遗产得以传承。',
    sampleLines: '叶师傅："耍牙不仅是技术，更是艺术！"小孙："叶师傅，我一定不辜负您的期望！"'
  },
  {
    drama: '甬剧',
    theme: '经典剧目赏析',
    suggestedTitle: ['天要落雨', '半把剪刀', '甬剧春秋'],
    structure: '第一幕 经典上演 → 第二幕 情感共鸣 → 第三幕 现代启示',
    characters: [
      {
        name: '王主演',
        role: '甬剧主演',
        description: '擅长表演经典甬剧的资深演员'
      },
      {
        name: '张教授',
        role: '戏曲评论家',
        description: '研究甬剧的学者'
      },
      {
        name: '李观众',
        role: '现代观众',
        description: '观看甬剧演出的年轻观众'
      },
      {
        name: '主持人',
        role: '主持人',
        description: '剧目赏析活动的主持人'
      }
    ],
    coreConflict: '经典甬剧如何在现代社会中传递其深刻的人文内涵，演员和学者共同解读剧目，使现代观众理解传统甬剧所蕴含的情感和价值观。',
    sampleLines: '王主演："演《天要落雨娘要嫁》，每次都被母爱感动！"张教授："这部戏展现的母爱，跨越时代，打动人心！"'
  },
  {
    drama: '姚剧',
    theme: '姚剧的音乐特色',
    suggestedTitle: ['余姚新韵', '姚剧春秋', '乡土之声'],
    structure: '第一幕 乡土溯源 → 第二幕 音乐创新 → 第三幕 声动江南',
    characters: [
      {
        name: '沈老师',
        role: '姚剧音乐专家',
        description: '精通姚剧音乐的老艺人'
      },
      {
        name: '小林',
        role: '青年音乐创作人',
        description: '致力于姚剧音乐创新的年轻人'
      },
      {
        name: '赵团长',
        role: '姚剧团团长',
        description: '支持音乐创新的负责人'
      },
      {
        name: '听众',
        role: '观众',
        description: '热爱姚剧音乐的听众'
      }
    ],
    coreConflict: '姚剧音乐如何在保留乡土特色的同时融入现代元素，老艺人与青年创作者共同探索，使姚剧音乐既保持传统韵味又适应现代审美。',
    sampleLines: '沈老师："姚剧的韵味就在这乡土气息里！"小林："沈老师，我想用江南丝竹来衬托姚剧曲调！"'
  },
  {
    drama: '湖剧',
    theme: '传统剧目研究',
    suggestedTitle: ['珍珠塔新传', '百花公主', '湖剧古韵'],
    structure: '第一幕 经典重现 → 第二幕 人物解读 → 第三幕 现代演绎',
    characters: [
      {
        name: '刘编剧',
        role: '戏曲编剧',
        description: '致力于湖戏剧目整理的编剧'
      },
      {
        name: '张演员',
        role: '湖剧主演',
        description: '擅长表演传统湖剧的演员'
      },
      {
        name: '陈导演',
        role: '导演',
        description: '指导剧目排演的导演'
      },
      {
        name: '观众',
        role: '现代观众',
        description: '观看湖剧演出的观众'
      }
    ],
    coreConflict: '传统湖戏剧目如何在现代社会中焕发新的生命力，编剧和演员在整理传统剧目的同时尝试融入现代元素，使古老剧目适应现代观众的审美需求。',
    sampleLines: '刘编剧："《珍珠塔》是经典，我们要赋予它新的内涵！"张演员："刘老师，您改的剧本让老戏有了新味道！"'
  },
  {
    drama: '杭剧',
    theme: '杭剧与杭州文化',
    suggestedTitle: ['西湖情韵', '杭剧新声', '钱塘绝唱'],
    structure: '第一幕 杭剧溯源 → 第二幕 西湖情缘 → 第三幕 文化传承',
    characters: [
      {
        name: '翁老师',
        role: '杭剧传承人',
        description: '精通杭剧表演的老艺人'
      },
      {
        name: '小周',
        role: '青年演员',
        description: '热爱杭剧的年轻演员'
      },
      {
        name: '李书记',
        role: '文化部门负责人',
        description: '支持杭剧发展的干部'
      },
      {
        name: '游客',
        role: '观众',
        description: '来杭州旅游的游客'
      }
    ],
    coreConflict: '杭剧如何与杭州的地域文化相结合，展现西湖之美和钱塘风情，老艺人与年轻演员共同努力，使杭剧成为杭州文化的一张名片。',
    sampleLines: '翁老师："杭剧就是杭州的声音！"小周："翁老师，我要把杭剧唱遍西湖！"'
  },
  {
    drama: '睦剧',
    theme: '传统与现代剧目',
    suggestedTitle: ['南山新麦', '白毛女', '睦州风情'],
    structure: '第一幕 传统再现 → 第二幕 现代改编 → 第三幕 薪火相传',
    characters: [
      {
        name: '方师傅',
        role: '睦剧老艺人',
        description: '见证睦剧发展的老艺人'
      },
      {
        name: '小陈',
        role: '青年演员',
        description: '勇于创新的年轻演员'
      },
      {
        name: '王团长',
        role: '睦剧团团长',
        description: '支持睦剧创新的负责人'
      },
      {
        name: '村民',
        role: '观众',
        description: '观看睦剧的当地群众'
      }
    ],
    coreConflict: '睦剧如何在保留乡土气息的同时进行现代改编，传统剧目与现代剧目如何相互促进，使睦剧在新时代焕发新的光彩。',
    sampleLines: '方师傅："《南山种麦》是经典，不能丢！"小陈："方师傅，我们可以用现代手法来演！"'
  },
  {
    drama: '和剧',
    theme: '和剧的音乐特色',
    suggestedTitle: ['和剧新韵', '温州声腔', '瓯越绝唱'],
    structure: '第一幕 声腔溯源 → 第二幕 和剧调创新 → 第三幕 艺韵流芳',
    characters: [
      {
        name: '王老师',
        role: '和剧音乐专家',
        description: '精通和剧音乐的老艺人'
      },
      {
        name: '小林',
        role: '青年音乐创作人',
        description: '致力于和剧音乐创新的年轻人'
      },
      {
        name: '赵团长',
        role: '和剧团团长',
        description: '支持音乐创新的负责人'
      },
      {
        name: '戏迷',
        role: '观众',
        description: '热爱和剧的戏迷'
      }
    ],
    coreConflict: '和剧独特的音乐风格如何在现代社会中传承和创新，老艺人传授和剧调技艺，青年创作者融入现代元素，使和剧音乐焕发新的生命力。',
    sampleLines: '王老师："和剧调的韵味就在这瓯越风情里！"小林："王老师，我想用现代乐器来丰富和剧音乐！"'
  },
  {
    drama: '章哈剧',
    theme: '傣族叙事长诗改编',
    suggestedTitle: ['召树屯传奇', '孔雀公主', '版纳风情'],
    structure: '第一幕 王子奇遇 → 第二幕 孔雀相恋 → 第三幕 幸福生活',
    characters: [
      {
        name: '召树屯',
        role: '王子',
        description: '勇敢善良的傣族王子'
      },
      {
        name: '喃木诺娜',
        role: '孔雀公主',
        description: '美丽善良的孔雀公主'
      },
      {
        name: '国王',
        role: '国王',
        description: '考验王子的国王'
      },
      {
        name: '大臣',
        role: '大臣',
        description: '辅佐国王的大臣'
      }
    ],
    coreConflict: '召树屯王子与孔雀公主喃木诺娜的爱情经历考验，他们用智慧和勇气克服困难，最终获得幸福，展现了傣族人民对美好爱情的向往和追求。',
    sampleLines: '召树屯："喃木诺娜，你是我心中最美的孔雀！"喃木诺娜："召树屯王子，我愿意永远陪伴你！"'
  },
  {
    drama: '岳西高腔',
    theme: '高腔的艺术特色',
    suggestedTitle: ['岳西绝唱', '古韵新声', '帮腔传情'],
    structure: '第一幕 干唱震撼 → 第二幕 帮腔呼应 → 第三幕 艺术升华',
    characters: [
      {
        name: '储老师',
        role: '高腔老艺人',
        description: '精通岳西高腔干唱技艺的传承人'
      },
      {
        name: '小吴',
        role: '青年演员',
        description: '学习高腔表演的年轻演员'
      },
      {
        name: '王团长',
        role: '剧团团长',
        description: '支持高腔传承的负责人'
      },
      {
        name: '观众',
        role: '观众',
        description: '欣赏高腔艺术的观众'
      }
    ],
    coreConflict: '岳西高腔独特的干唱无伴奏形式在现代舞台上面，老艺人如何传授这一绝技，年轻演员如何领悟并创新演绎，使高腔艺术焕发新的生命力。',
    sampleLines: '储老师："高腔讲究的就是干唱，要唱得声情并茂！"小吴："储老师，我终于体会到干唱的韵味了！"'
  },
  {
    drama: '新昌调腔',
    theme: '古典剧目改编',
    suggestedTitle: ['北西厢新韵', '汉宫秋', '调腔古韵'],
    structure: '第一幕 古韵重现 → 第二幕 情感演绎 → 第三幕 现代解读',
    characters: [
      {
        name: '章主演',
        role: '调腔主演',
        description: '擅长表演古典调腔的资深演员'
      },
      {
        name: '刘编剧',
        role: '戏曲编剧',
        description: '致力于调腔古典剧目改编的编剧'
      },
      {
        name: '陈导演',
        role: '导演',
        description: '指导剧目排演的导演'
      },
      {
        name: '学者',
        role: '戏曲评论家',
        description: '研究调腔古典剧目的学者'
      }
    ],
    coreConflict: '调腔古典剧目如何在现代舞台上展现其独特魅力，演员和创作者在保留古典韵味的基础上进行现代解读，使古老剧目适应现代观众的审美需求。',
    sampleLines: '章主演："调腔唱《西厢记》，别有一番韵味！"刘编剧："我们要让古典剧目焕发新的生命力！"'
  },
  {
    drama: '永嘉昆曲',
    theme: '南戏经典改编',
    suggestedTitle: ['张协状元', '琵琶记新传', '永昆古韵'],
    structure: '第一幕 南戏溯源 → 第二幕 经典改编 → 第三幕 艺术传承',
    characters: [
      {
        name: '林老师',
        role: '永昆传承人',
        description: '精通永昆表演的老艺人'
      },
      {
        name: '小王',
        role: '青年演员',
        description: '学习永昆的年轻演员'
      },
      {
        name: '王导演',
        role: '戏曲导演',
        description: '致力于永昆创新的导演'
      },
      {
        name: '学者',
        role: '戏曲研究专家',
        description: '研究南戏的学者'
      }
    ],
    coreConflict: '永嘉昆曲作为南戏活化石，如何在现代社会中传承和创新，老艺人传授永昆技艺，年轻演员领悟并演绎南戏经典，使永昆艺术焕发新的光彩。',
    sampleLines: '林老师："永昆是南戏的活化石，要好好传承！"小王："林老师，我一定把永昆发扬光大！"'
  },
  {
    drama: '瓯剧',
    theme: '经典剧目赏析',
    suggestedTitle: ['高机与吴三春', '杀狗记', '瓯剧春秋'],
    structure: '第一幕 经典上演 → 第二幕 地方特色 → 第三幕 文化传承',
    characters: [
      {
        name: '陈主演',
        role: '瓯剧主演',
        description: '擅长表演经典瓯剧的资深演员'
      },
      {
        name: '张教授',
        role: '戏曲评论家',
        description: '研究瓯剧的学者'
      },
      {
        name: '李观众',
        role: '现代观众',
        description: '观看瓯剧演出的年轻观众'
      },
      {
        name: '主持人',
        role: '主持人',
        description: '剧目赏析活动的主持人'
      }
    ],
    coreConflict: '经典瓯剧如何在现代社会中展现其地方特色和文化价值，演员和学者共同解读剧目，使现代观众理解瓯剧所蕴含的温州文化内涵。',
    sampleLines: '陈主演："《高机与吴三春》是瓯剧的经典！"张教授："这部戏展现了温州人的情感和价值观！"'
  },
  {
    drama: '丹剧',
    theme: '传统剧目研究',
    suggestedTitle: ['珍珠塔', '刘海砍樵', '丹剧新韵'],
    structure: '第一幕 经典重现 → 第二幕 江南风情 → 第三幕 创新演绎',
    characters: [
      {
        name: '黄老师',
        role: '丹剧老艺人',
        description: '精通丹剧表演的传承人'
      },
      {
        name: '小林',
        role: '青年演员',
        description: '学习丹剧的年轻演员'
      },
      {
        name: '陈导演',
        role: '导演',
        description: '指导剧目排演的导演'
      },
      {
        name: '观众',
        role: '现代观众',
        description: '观看丹剧演出的观众'
      }
    ],
    coreConflict: '丹剧传统剧目如何在现代社会中展现江南风情和艺术魅力，老艺人传授技艺，年轻演员创新演绎，使丹剧在新时代焕发新的光彩。',
    sampleLines: '黄老师："丹剧就是江南的声音！"小林："黄老师，我要把丹剧唱遍大江南北！"'
  }
]
