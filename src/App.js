import React from 'react';
import SeasonalHeader from './SeasonalHeader.js';
import DailyJournal from './DailyJournal.js';

export default function App() {
  return (
    <div className="app-container">
      <DailyJournal />
      <SeasonalHeader />
    </div>
  );
}