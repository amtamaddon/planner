import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card.js";
import { timeBlocks } from './constants.js';

export default function DailyJournal() {
  const [scores, setScores] = useState({
    morning: { S: 0, C: 0, O: 0, R: 0, E: 0 },
    midday: { S: 0, C: 0, O: 0, R: 0, E: 0 },
    evening: { S: 0, C: 0, O: 0, R: 0, E: 0 }
  });

  const ScoreSection = ({ period, scores, onChange }) => (
    <div className="score-section">
      <h3 className="section-title">{period.toUpperCase()} SCORE</h3>
      {Object.keys(scores[period]).map((score) => (
        <div key={score} className="score-input">
          <label>{score}:</label>
          <input
            type="number"
            min="0"
            max="5"
            value={scores[period][score]}
            onChange={(e) => onChange(period, score, e.target.value)}
          />
        </div>
      ))}
    </div>
  );

  const TimeBlock = ({ block }) => (
    <div className="time-block">
      <div className="time-block-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {block.icon}
          <div>
            <div style={{ fontWeight: 500 }}>{block.name} ({block.time})</div>
            <div className="solar-info">{block.solar} • {block.kabb}</div>
          </div>
        </div>
      </div>
      
      <div className="checkbox-list">
        {block.focuses.map((focus, idx) => (
          <div key={idx} style={{ marginBottom: '4px' }}>
            <input type="checkbox" style={{ marginRight: '8px' }} />
            <span>{focus}</span>
          </div>
        ))}
      </div>
      
      <div className="metric-inputs">
        <div>
          Quality <input type="number" min="0" max="5" />
        </div>
        <div>
          Joy <input type="number" min="0" max="5" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="daily-journal">
      {/* Header section */}
      <div className="header-section">
        <h2 className="text-xl font-semibold mb-4">Daily Training Journal</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm mb-1">Vision on my heart today:</label>
            <input type="text" className="w-full" />
          </div>
          <div>
            <label className="block text-sm mb-1">One thing that would make today great:</label>
            <input type="text" className="w-full" />
          </div>
        </div>
      </div>

      {/* Score sections */}
      <div className="score-grid">
        {['morning', 'midday', 'evening'].map((period) => (
          <ScoreSection
            key={period}
            period={period}
            scores={scores}
            onChange={(p, s, v) => setScores(prev => ({
              ...prev,
              [p]: { ...prev[p], [s]: v }
            }))}
          />
        ))}
      </div>

      {/* Time blocks */}
      <div className="time-blocks">
        {timeBlocks.map((block, idx) => (
          <TimeBlock key={idx} block={block} />
        ))}
      </div>
    </div>
  );
}