import { Question } from '../types';

// 中文版问题（与 questions.ts 相同）
export const questionsZh: Question[] = [
  {
    question: "周末你最想做什么？",
    options: [
      { text: "在家安静地看书或追剧 📚", score: 5, traits: ['温柔', '内敛'] },
      { text: "约朋友出去逛街聚会 🎉", score: 8, traits: ['活力', '社交'] },
      { text: "去咖啡厅享受悠闲时光 ☕", score: 6, traits: ['优雅', '品味'] },
      { text: "尝试新的冒险活动 🎢", score: 9, traits: ['热情', '冒险'] }
    ]
  },
  {
    question: "朋友心情不好时，你会？",
    options: [
      { text: "静静陪伴，给个温暖的拥抱 🤗", score: 7, traits: ['温暖', '体贴'] },
      { text: "带TA出去玩，转移注意力 🎮", score: 8, traits: ['活力', '乐观'] },
      { text: "认真倾听，给予建议 💭", score: 6, traits: ['理性', '包容'] },
      { text: "用幽默的方式逗TA开心 😄", score: 7, traits: ['甜美', '可爱'] }
    ]
  },
  {
    question: "你的穿衣风格是？",
    options: [
      { text: "简约舒适，以舒服为主 👕", score: 5, traits: ['自然', '随性'] },
      { text: "时尚潮流，追求个性 👗", score: 9, traits: ['魅力', '独特'] },
      { text: "优雅精致，注重细节 👔", score: 8, traits: ['优雅', '精致'] },
      { text: "可爱甜美，充满少女感 🎀", score: 7, traits: ['甜美', '可爱'] }
    ]
  },
  {
    question: "在聚会上，你通常是？",
    options: [
      { text: "安静的倾听者 👂", score: 5, traits: ['温柔', '内敛'] },
      { text: "活跃的话题制造者 🎤", score: 9, traits: ['活力', '社交'] },
      { text: "优雅的观察者 👀", score: 6, traits: ['优雅', '细腻'] },
      { text: "开心果，让大家笑个不停 😆", score: 8, traits: ['甜美', '乐观'] }
    ]
  },
  {
    question: "你喜欢什么样的音乐？",
    options: [
      { text: "轻柔舒缓的音乐 🎵", score: 6, traits: ['温柔', '平和'] },
      { text: "节奏感强的流行音乐 🎶", score: 8, traits: ['活力', '热情'] },
      { text: "古典或爵士乐 🎼", score: 7, traits: ['优雅', '品味'] },
      { text: "欢快可爱的歌曲 🎸", score: 7, traits: ['甜美', '活泼'] }
    ]
  },
  {
    question: "面对压力时，你会？",
    options: [
      { text: "找个安静的地方独处 🌙", score: 5, traits: ['内敛', '沉稳'] },
      { text: "运动或做些激烈的活动 🏃", score: 8, traits: ['活力', '释放'] },
      { text: "听音乐、品茶放松 🍵", score: 6, traits: ['优雅', '从容'] },
      { text: "找朋友倾诉或寻求安慰 💕", score: 7, traits: ['温暖', '依赖'] }
    ]
  },
  {
    question: "你的理想约会是？",
    options: [
      { text: "在家一起做饭看电影 🍿", score: 6, traits: ['温馨', '居家'] },
      { text: "去游乐园或音乐节 🎡", score: 9, traits: ['热情', '冒险'] },
      { text: "高级餐厅烛光晚餐 🕯️", score: 8, traits: ['优雅', '浪漫'] },
      { text: "逛街购物吃甜品 🍰", score: 7, traits: ['甜美', '轻松'] }
    ]
  },
  {
    question: "你最喜欢的颜色系？",
    options: [
      { text: "温暖的米色、奶茶色 🤎", score: 6, traits: ['温柔', '柔和'] },
      { text: "明亮的橙色、黄色 💛", score: 8, traits: ['活力', '阳光'] },
      { text: "优雅的紫色、酒红色 💜", score: 7, traits: ['优雅', '神秘'] },
      { text: "可爱的粉色、桃色 💗", score: 7, traits: ['甜美', '少女'] }
    ]
  },
  {
    question: "你的社交圈是？",
    options: [
      { text: "几个知心好友 👥", score: 6, traits: ['深度', '真诚'] },
      { text: "朋友遍天下 🌍", score: 9, traits: ['社交', '外向'] },
      { text: "精选的高质量社交 ✨", score: 7, traits: ['优雅', '选择'] },
      { text: "温暖的小圈子 🏡", score: 6, traits: ['温馨', '亲密'] }
    ]
  },
  {
    question: "你的工作风格是？",
    options: [
      { text: "稳扎稳打，按部就班 📋", score: 5, traits: ['踏实', '可靠'] },
      { text: "充满激情，追求效率 ⚡", score: 8, traits: ['活力', '高效'] },
      { text: "注重细节，追求完美 🎯", score: 7, traits: ['精致', '完美'] },
      { text: "灵活应变，富有创意 💡", score: 7, traits: ['灵动', '创新'] }
    ]
  },
  {
    question: "你喜欢的旅行方式？",
    options: [
      { text: "慢节奏的深度游 🚶", score: 6, traits: ['从容', '深度'] },
      { text: "刺激的冒险之旅 🏔️", score: 9, traits: ['冒险', '刺激'] },
      { text: "精致的文化之旅 🏛️", score: 7, traits: ['优雅', '文化'] },
      { text: "轻松愉快的度假 🏖️", score: 7, traits: ['放松', '享受'] }
    ]
  },
  {
    question: "你的表达方式是？",
    options: [
      { text: "温和委婉，顾及他人感受 🌸", score: 6, traits: ['温柔', '体贴'] },
      { text: "直接热情，表达清晰 📢", score: 8, traits: ['直率', '热情'] },
      { text: "优雅得体，措辞讲究 📝", score: 7, traits: ['优雅', '修养'] },
      { text: "活泼可爱，充满表情 😊", score: 7, traits: ['活泼', '可爱'] }
    ]
  },
  {
    question: "你最看重的品质是？",
    options: [
      { text: "善良温柔 💝", score: 6, traits: ['善良', '温暖'] },
      { text: "热情活力 🔥", score: 8, traits: ['热情', '活力'] },
      { text: "优雅气质 👑", score: 7, traits: ['优雅', '气质'] },
      { text: "真诚可爱 🌟", score: 7, traits: ['真诚', '可爱'] }
    ]
  },
  {
    question: "你的生活节奏是？",
    options: [
      { text: "慢节奏，享受当下 🐌", score: 5, traits: ['从容', '享受'] },
      { text: "快节奏，充实忙碌 🏃‍♀️", score: 9, traits: ['高效', '充实'] },
      { text: "有条不紊，张弛有度 ⚖️", score: 7, traits: ['平衡', '有序'] },
      { text: "随性自在，跟着感觉走 🎈", score: 7, traits: ['随性', '自在'] }
    ]
  },
  {
    question: "你喜欢的电影类型？",
    options: [
      { text: "温馨治愈系 🌈", score: 6, traits: ['温暖', '治愈'] },
      { text: "动作冒险片 💥", score: 8, traits: ['刺激', '冒险'] },
      { text: "文艺浪漫片 🎬", score: 7, traits: ['浪漫', '文艺'] },
      { text: "轻松喜剧片 😂", score: 7, traits: ['轻松', '快乐'] }
    ]
  },
  {
    question: "你的兴趣爱好是？",
    options: [
      { text: "阅读、写作、手工 ✍️", score: 6, traits: ['文静', '细腻'] },
      { text: "运动、旅行、探险 🎿", score: 9, traits: ['活跃', '探索'] },
      { text: "艺术、音乐、品茶 🎨", score: 7, traits: ['艺术', '品味'] },
      { text: "美食、摄影、逛街 📸", score: 7, traits: ['享受', '生活'] }
    ]
  },
  {
    question: "你的魅力来源于？",
    options: [
      { text: "温柔的性格和善良的心 💖", score: 6, traits: ['温柔', '善良'] },
      { text: "充满活力的个性 ⚡", score: 8, traits: ['活力', '个性'] },
      { text: "优雅的气质和品味 ✨", score: 7, traits: ['优雅', '品味'] },
      { text: "独特的魅力和风格 🌺", score: 8, traits: ['独特', '魅力'] }
    ]
  },
  {
    question: "你希望给人的印象是？",
    options: [
      { text: "温暖可靠，值得信赖 🤝", score: 6, traits: ['可靠', '温暖'] },
      { text: "充满活力，积极向上 🌞", score: 8, traits: ['积极', '活力'] },
      { text: "优雅大方，有气质 👗", score: 7, traits: ['优雅', '大方'] },
      { text: "可爱迷人，讨人喜欢 💕", score: 7, traits: ['可爱', '迷人'] }
    ]
  },
  {
    question: "你的人生态度是？",
    options: [
      { text: "平和淡然，顺其自然 🍃", score: 5, traits: ['平和', '淡然'] },
      { text: "积极进取，勇往直前 🚀", score: 9, traits: ['进取', '勇敢'] },
      { text: "追求品质，精致生活 🌹", score: 7, traits: ['品质', '精致'] },
      { text: "享受当下，快乐至上 🎊", score: 7, traits: ['享受', '快乐'] }
    ]
  },
  {
    question: "你最想成为什么样的人？",
    options: [
      { text: "温柔体贴，让人感到温暖 🌸", score: 6, traits: ['温柔', '体贴'] },
      { text: "充满能量，激励他人 💪", score: 8, traits: ['能量', '激励'] },
      { text: "优雅从容，有独特魅力 👑", score: 7, traits: ['优雅', '魅力'] },
      { text: "真实可爱，活出自我 🦋", score: 7, traits: ['真实', '自我'] }
    ]
  }
];
