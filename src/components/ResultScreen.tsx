import React from 'react';
import { FruitType, Answers } from '../types';
import { fruitPersonalities } from '../data/personalities';
import './ResultScreen.css';

interface ResultScreenProps {
  fruitType: FruitType;
  answers?: Answers;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  fruitType,
  answers,
}) => {
  const fruit = fruitPersonalities[fruitType];
  const colors = { 
    primary: '#FF6B9D', 
    secondary: '#C8A2FF', 
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C8A2FF 100%)' 
  };

  // 计算每个维度的百分比
  const calculatePercentages = () => {
    if (!answers) {
      return {
        warmth: 50,
        energy: 50,
        sweetness: 50,
        elegance: 50,
        passion: 50
      };
    }

    const maxScore = 200; // 假设最大分数
    return {
      warmth: Math.min(100, Math.round((answers.warmth / maxScore) * 100)),
      energy: Math.min(100, Math.round((answers.energy / maxScore) * 100)),
      sweetness: Math.min(100, Math.round((answers.sweetness / maxScore) * 100)),
      elegance: Math.min(100, Math.round((answers.elegance / maxScore) * 100)),
      passion: Math.min(100, Math.round((answers.passion / maxScore) * 100))
    };
  };

  const percentages = calculatePercentages();

  return (
    <div className="result-screen">
      {/* 水果展示 */}
      <div className="fruit-showcase" style={{ background: colors.gradient }}>
        <div className="fruit-emoji">{fruit.emoji}</div>
        <div className="fruit-name">{fruit.name}</div>
        <div className="fruit-title">{fruit.title}</div>
      </div>

      {/* 性格描述 */}
      <div className="result-description">
        <div className="description-section">
          <h3 className="section-title">✨ 你的性格特点</h3>
          <p className="personality-desc">{fruit.description}</p>
        </div>

        {/* 性格特质标签 */}
        <div className="traits-tags-section">
          <h3 className="section-title">🏷️ 性格标签</h3>
          <div className="traits-tags">
            {fruit.traits.map((trait, index) => (
              <span key={index} className="trait-tag" style={{ 
                background: colors.gradient 
              }}>
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* 性格维度统计 */}
        <div className="traits-section">
          <h3 className="section-title">📊 性格维度分析</h3>
          <div className="traits-stats">
            <div className="trait-stat-item">
              <div className="trait-stat-label">
                <span>💝 温暖度</span>
                <span className="trait-percentage">{percentages.warmth}%</span>
              </div>
              <div className="trait-progress-bar">
                <div 
                  className="trait-progress-fill" 
                  style={{ 
                    width: `${percentages.warmth}%`,
                    background: colors.gradient 
                  }}
                ></div>
              </div>
            </div>

            <div className="trait-stat-item">
              <div className="trait-stat-label">
                <span>⚡ 活力度</span>
                <span className="trait-percentage">{percentages.energy}%</span>
              </div>
              <div className="trait-progress-bar">
                <div 
                  className="trait-progress-fill" 
                  style={{ 
                    width: `${percentages.energy}%`,
                    background: colors.gradient 
                  }}
                ></div>
              </div>
            </div>

            <div className="trait-stat-item">
              <div className="trait-stat-label">
                <span>🍓 甜美度</span>
                <span className="trait-percentage">{percentages.sweetness}%</span>
              </div>
              <div className="trait-progress-bar">
                <div 
                  className="trait-progress-fill" 
                  style={{ 
                    width: `${percentages.sweetness}%`,
                    background: colors.gradient 
                  }}
                ></div>
              </div>
            </div>

            <div className="trait-stat-item">
              <div className="trait-stat-label">
                <span>✨ 优雅度</span>
                <span className="trait-percentage">{percentages.elegance}%</span>
              </div>
              <div className="trait-progress-bar">
                <div 
                  className="trait-progress-fill" 
                  style={{ 
                    width: `${percentages.elegance}%`,
                    background: colors.gradient 
                  }}
                ></div>
              </div>
            </div>

            <div className="trait-stat-item">
              <div className="trait-stat-label">
                <span>🔥 热情度</span>
                <span className="trait-percentage">{percentages.passion}%</span>
              </div>
              <div className="trait-progress-bar">
                <div 
                  className="trait-progress-fill" 
                  style={{ 
                    width: `${percentages.passion}%`,
                    background: colors.gradient 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* 优势特点 */}
        <div className="strengths-section">
          <h3 className="section-title">💪 你的优势</h3>
          <ul className="strengths-list">
            {fruit.strengths.map((strength, index) => (
              <li key={index} className="strength-item">
                <span className="strength-bullet">•</span>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* 生活建议 */}
        <div className="advice-section">
          <h3 className="section-title">💡 给你的建议</h3>
          <p className="advice-text">{fruit.advice}</p>
        </div>
      </div>
    </div>
  );
};
