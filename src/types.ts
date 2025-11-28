export interface Question {
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  score: number; // 1-10分，用于计算水果类型
  traits: string[]; // 性格特征标签
}

// 10种水果性格类型
export type FruitType = 
  | 'banana'      // 香蕉塑 - 柔和包容
  | 'apple'       // 苹果塑 - 健康积极
  | 'strawberry'  // 草莓塑 - 甜美可爱
  | 'watermelon'  // 西瓜塑 - 清爽大方
  | 'grape'       // 葡萄塑 - 优雅精致
  | 'orange'      // 橙子塑 - 活力阳光
  | 'peach'       // 桃子塑 - 温柔体贴
  | 'pineapple'   // 菠萝塑 - 热情奔放
  | 'cherry'      // 樱桃塑 - 小巧灵动
  | 'mango';      // 芒果塑 - 热带魅力

export interface FruitPersonality {
  name: string;
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  advice: string;
}

export interface Answers {
  // 性格维度得分
  warmth: number;      // 温暖度 (0-100)
  energy: number;      // 活力度 (0-100)
  sweetness: number;   // 甜美度 (0-100)
  elegance: number;    // 优雅度 (0-100)
  passion: number;     // 热情度 (0-100)
}
