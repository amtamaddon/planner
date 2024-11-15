import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { seasons, seasonStartDates } from './constants.js';

export default function SeasonalHeader() {
  const [currentSeasonKey, setCurrentSeasonKey] = useState('YEAR_END');
  const [currentWeek, setCurrentWeek] = useState(3);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSeasonChange = (direction) => {
    const seasonKeys = Object.keys(seasons);
    const currentIndex = seasonKeys.indexOf(currentSeasonKey);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % seasonKeys.length;
      setCurrentSeasonKey(seasonKeys[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + seasonKeys.length) % seasonKeys.length;
      setCurrentSeasonKey(seasonKeys[prevIndex]);
    }
    setCurrentWeek(1);
    updateDate(1, seasonKeys[currentIndex]);
  };

  const handleWeekChange = (direction) => {
    const newWeek = direction === 'next' 
      ? Math.min(currentWeek + 1, seasons[currentSeasonKey].weeks)
      : Math.max(1, currentWeek - 1);
    setCurrentWeek(newWeek);
    updateDate(newWeek, currentSeasonKey);
  };

  const updateDate = (week, seasonKey) => {
    const startDate = seasonStartDates[seasonKey];
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + (week - 1) * 7);
    setCurrentDate(newDate);
  };

  const currentSeason = seasons[currentSeasonKey];

  return (
    <div className="seasonal-header" style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => handleSeasonChange('prev')} style={{ padding: '4px' }}>
            <ChevronLeft size={16} />
          </button>
          <span style={{ fontWeight: 500 }}>{currentSeason.name}</span>
          <button onClick={() => handleSeasonChange('next')} style={{ padding: '4px' }}>
            <ChevronRight size={16} />
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '14px', color: '#666' }}>
          <span>{currentSeason.span}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => handleWeekChange('prev')} disabled={currentWeek === 1}>
              <ChevronLeft size={16} />
            </button>
            <span>Week {currentWeek}/{currentSeason.weeks}</span>
            <button onClick={() => handleWeekChange('next')} disabled={currentWeek === currentSeason.weeks}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '20px' }}>
        <div>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Season Focus:</div>
            <div style={{ color: '#666' }}>{currentSeason.focus}</div>
          </div>
          <div>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Energy Pattern:</div>
            <div style={{ color: '#666' }}>{currentSeason.energy}</div>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 500, marginBottom: '4px' }}>Key Practices:</div>
          <ul style={{ color: '#666', listStyle: 'none', padding: 0 }}>
            {currentSeason.practices.map((practice, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>• {practice}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: '8px' }}>Seasonal Cycle Progress</div>
        <div style={{ height: '4px', backgroundColor: '#e9ecef', borderRadius: '2px', overflow: 'hidden' }}>
          <div 
            style={{
              width: `${(currentWeek / currentSeason.weeks) * 100}%`,
              height: '100%',
              backgroundColor: '#0d6efd',
              transition: 'width 0.3s ease'
            }}
          />
        </div>
      </div>
    </div>
  );
}