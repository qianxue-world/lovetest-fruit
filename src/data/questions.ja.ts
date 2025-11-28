import { Question } from '../types';

// 日文版问题（简化版，使用英文作为占位）
export const questionsJa: Question[] = [
  {
    question: "週末に一番やりたいことは？",
    options: [
      { text: "家で静かに読書やドラマ鑑賞 📚", score: 5, traits: ['温柔', '内敛'] },
      { text: "友達と外出してパーティー 🎉", score: 8, traits: ['活力', '社交'] },
      { text: "カフェでゆっくり過ごす ☕", score: 6, traits: ['优雅', '品味'] },
      { text: "新しい冒険活動に挑戦 🎢", score: 9, traits: ['热情', '冒险'] }
    ]
  },
  {
    question: "友達が落ち込んでいる時、あなたは？",
    options: [
      { text: "静かに寄り添い、温かいハグを 🤗", score: 7, traits: ['温暖', '体贴'] },
      { text: "外に連れ出して気分転換 🎮", score: 8, traits: ['活力', '乐观'] },
      { text: "真剣に聞いてアドバイス 💭", score: 6, traits: ['理性', '包容'] },
      { text: "ユーモアで笑わせる 😄", score: 7, traits: ['甜美', '可爱'] }
    ]
  },
  {
    question: "あなたのファッションスタイルは？",
    options: [
      { text: "シンプルで快適 👕", score: 5, traits: ['自然', '随性'] },
      { text: "トレンディで個性的 👗", score: 9, traits: ['魅力', '独特'] },
      { text: "エレガントで細部にこだわる 👔", score: 8, traits: ['优雅', '精致'] },
      { text: "可愛くて甘い 🎀", score: 7, traits: ['甜美', '可爱'] }
    ]
  },
  {
    question: "パーティーでは通常？",
    options: [
      { text: "静かな聞き手 👂", score: 5, traits: ['温柔', '内敛'] },
      { text: "活発な話題提供者 🎤", score: 9, traits: ['活力', '社交'] },
      { text: "エレガントな観察者 👀", score: 6, traits: ['优雅', '细腻'] },
      { text: "ムードメーカー 😆", score: 8, traits: ['甜美', '乐观'] }
    ]
  },
  {
    question: "好きな音楽のタイプは？",
    options: [
      { text: "優しく穏やかな音楽 🎵", score: 6, traits: ['温柔', '平和'] },
      { text: "リズミカルなポップス 🎶", score: 8, traits: ['活力', '热情'] },
      { text: "クラシックやジャズ 🎼", score: 7, traits: ['优雅', '品味'] },
      { text: "明るく可愛い曲 🎸", score: 7, traits: ['甜美', '活泼'] }
    ]
  },
  {
    question: "ストレスを感じた時は？",
    options: [
      { text: "静かな場所で一人になる 🌙", score: 5, traits: ['内敛', '沉稳'] },
      { text: "運動や激しい活動 🏃", score: 8, traits: ['活力', '释放'] },
      { text: "音楽を聴いてお茶を飲む 🍵", score: 6, traits: ['优雅', '从容'] },
      { text: "友達に相談する 💕", score: 7, traits: ['温暖', '依赖'] }
    ]
  },
  {
    question: "理想のデートは？",
    options: [
      { text: "家で一緒に料理して映画鑑賞 🍿", score: 6, traits: ['温馨', '居家'] },
      { text: "遊園地や音楽フェス 🎡", score: 9, traits: ['热情', '冒险'] },
      { text: "高級レストランでキャンドルディナー 🕯️", score: 8, traits: ['优雅', '浪漫'] },
      { text: "ショッピングとスイーツ 🍰", score: 7, traits: ['甜美', '轻松'] }
    ]
  },
  {
    question: "好きな色は？",
    options: [
      { text: "温かいベージュ、ミルクティー色 🤎", score: 6, traits: ['温柔', '柔和'] },
      { text: "明るいオレンジ、イエロー 💛", score: 8, traits: ['活力', '阳光'] },
      { text: "エレガントな紫、ワインレッド 💜", score: 7, traits: ['优雅', '神秘'] },
      { text: "可愛いピンク、ピーチ 💗", score: 7, traits: ['甜美', '少女'] }
    ]
  },
  {
    question: "あなたの社交範囲は？",
    options: [
      { text: "数人の親友 👥", score: 6, traits: ['深度', '真诚'] },
      { text: "友達がたくさん 🌍", score: 9, traits: ['社交', '外向'] },
      { text: "厳選された質の高い交流 ✨", score: 7, traits: ['优雅', '选择'] },
      { text: "温かい小さなサークル 🏡", score: 6, traits: ['温馨', '亲密'] }
    ]
  },
  {
    question: "あなたの仕事スタイルは？",
    options: [
      { text: "着実に計画的に 📋", score: 5, traits: ['踏实', '可靠'] },
      { text: "情熱的で効率重視 ⚡", score: 8, traits: ['活力', '高效'] },
      { text: "細部にこだわり完璧を追求 🎯", score: 7, traits: ['精致', '完美'] },
      { text: "柔軟で創造的 💡", score: 7, traits: ['灵动', '创新'] }
    ]
  },
  {
    question: "好きな旅行スタイルは？",
    options: [
      { text: "ゆっくりとした深い旅 🚶", score: 6, traits: ['从容', '深度'] },
      { text: "刺激的な冒険の旅 🏔️", score: 9, traits: ['冒险', '刺激'] },
      { text: "洗練された文化の旅 🏛️", score: 7, traits: ['优雅', '文化'] },
      { text: "リラックスした休暇 🏖️", score: 7, traits: ['放松', '享受'] }
    ]
  },
  {
    question: "あなたの表現方法は？",
    options: [
      { text: "優しく婉曲的 🌸", score: 6, traits: ['温柔', '体贴'] },
      { text: "直接的で情熱的 📢", score: 8, traits: ['直率', '热情'] },
      { text: "エレガントで丁寧 📝", score: 7, traits: ['优雅', '修养'] },
      { text: "活発で表情豊か 😊", score: 7, traits: ['活泼', '可爱'] }
    ]
  },
  {
    question: "最も重視する品質は？",
    options: [
      { text: "優しさと温かさ 💝", score: 6, traits: ['善良', '温暖'] },
      { text: "情熱と活力 🔥", score: 8, traits: ['热情', '活力'] },
      { text: "エレガントな気質 👑", score: 7, traits: ['优雅', '气质'] },
      { text: "誠実で可愛い 🌟", score: 7, traits: ['真诚', '可爱'] }
    ]
  },
  {
    question: "あなたの生活リズムは？",
    options: [
      { text: "ゆっくりと今を楽しむ 🐌", score: 5, traits: ['从容', '享受'] },
      { text: "速いペースで充実 🏃‍♀️", score: 9, traits: ['高效', '充实'] },
      { text: "整然としてバランスが取れている ⚖️", score: 7, traits: ['平衡', '有序'] },
      { text: "自由気ままに 🎈", score: 7, traits: ['随性', '自在'] }
    ]
  },
  {
    question: "好きな映画のジャンルは？",
    options: [
      { text: "温かい癒し系 🌈", score: 6, traits: ['温暖', '治愈'] },
      { text: "アクション冒険 💥", score: 8, traits: ['刺激', '冒险'] },
      { text: "文芸ロマンス 🎬", score: 7, traits: ['浪漫', '文艺'] },
      { text: "軽いコメディ 😂", score: 7, traits: ['轻松', '快乐'] }
    ]
  },
  {
    question: "あなたの趣味は？",
    options: [
      { text: "読書、執筆、手芸 ✍️", score: 6, traits: ['文静', '细腻'] },
      { text: "スポーツ、旅行、探検 🎿", score: 9, traits: ['活跃', '探索'] },
      { text: "芸術、音楽、お茶 🎨", score: 7, traits: ['艺术', '品味'] },
      { text: "グルメ、写真、ショッピング 📸", score: 7, traits: ['享受', '生活'] }
    ]
  },
  {
    question: "あなたの魅力の源は？",
    options: [
      { text: "優しい性格と善良な心 💖", score: 6, traits: ['温柔', '善良'] },
      { text: "活力に満ちた個性 ⚡", score: 8, traits: ['活力', '个性'] },
      { text: "エレガントな気質と品位 ✨", score: 7, traits: ['优雅', '品味'] },
      { text: "独特な魅力とスタイル 🌺", score: 8, traits: ['独特', '魅力'] }
    ]
  },
  {
    question: "人に与えたい印象は？",
    options: [
      { text: "温かく信頼できる 🤝", score: 6, traits: ['可靠', '温暖'] },
      { text: "活力に満ち前向き 🌞", score: 8, traits: ['积极', '活力'] },
      { text: "エレガントで気品がある 👗", score: 7, traits: ['优雅', '大方'] },
      { text: "可愛く魅力的 💕", score: 7, traits: ['可爱', '迷人'] }
    ]
  },
  {
    question: "あなたの人生観は？",
    options: [
      { text: "穏やかで自然体 🍃", score: 5, traits: ['平和', '淡然'] },
      { text: "積極的で前進 🚀", score: 9, traits: ['进取', '勇敢'] },
      { text: "品質を追求し洗練された生活 🌹", score: 7, traits: ['品质', '精致'] },
      { text: "今を楽しみ幸せ第一 🎊", score: 7, traits: ['享受', '快乐'] }
    ]
  },
  {
    question: "どんな人になりたい？",
    options: [
      { text: "優しく思いやりがあり温かい 🌸", score: 6, traits: ['温柔', '体贴'] },
      { text: "エネルギッシュで人を励ます 💪", score: 8, traits: ['能量', '激励'] },
      { text: "エレガントで独特な魅力 👑", score: 7, traits: ['优雅', '魅力'] },
      { text: "本物で可愛く自分らしく 🦋", score: 7, traits: ['真实', '自我'] }
    ]
  }
];
