import React from 'react';
import './StartScreen.css';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {

  return (
    <div className="start-screen">
      <h1>🍎 水果塑性格测试 🍓</h1>
      
      <div className="intro-section">
        <h2>什么是水果塑？</h2>
        <p className="intro-text">
          水果塑是一种有趣的性格分类方式，通过测试你的性格特点，
          找出最符合你的水果类型。每种水果都代表着独特的性格魅力，
          快来看看你是哪种水果吧！
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🍌</div>
          <h3>10种水果性格</h3>
          <p>从香蕉到芒果，每种水果都有独特的性格特征</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💖</div>
          <h3>多维度分析</h3>
          <p>温暖度、活力度、甜美度、优雅度、热情度全方位解析</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>专属建议</h3>
          <p>获得针对你性格特点的专属生活建议</p>
        </div>
      </div>

      <div className="original-badge">
        <div className="badge-icon">🎯</div>
        <div className="badge-content">
          <strong>20道精心设计的问题</strong>
          <p>只需3分钟，发现真实的自己</p>
        </div>
      </div>

      <div className="btn" onClick={onStart}>
        <p>开始测试 🚀</p>
      </div>
    </div>
  );
};
