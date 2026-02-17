// src/pages/SettingsPage.js
import React from 'react';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const { 
    wordMastery, 
    answeredSentences, 
    resetAllProgress,
    setCurrentPage 
  } = useApp();

  const handleReset = () => {
    if (window.confirm('Are you absolutely sure? This will reset ALL your learning progress and cannot be undone.')) {
      resetAllProgress();
      alert('All progress has been reset!');
      setCurrentPage('words');
    }
  };

  return (
    <section className="view is-active" data-view="settings">
      <header className="header">
        <h1>Settings</h1>
        <p className="header-desc"></p>
      </header>

      <div className="settings-panel">
        <h2 className="settings-subtitle">Progress</h2>
        <p className="settings-desc">Reset all your learning progress. This will clear:</p>
        <ul className="settings-list">
          <li>Words Learned</li>
          <li>Sentences Revealed</li>
          <li>Session History</li>
        </ul>
        <p className="settings-warning">
          ⚠️ This action cannot be undone. All progress will be permanently lost.
        </p>
        
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={handleReset}
        >
          Reset All Progress
        </button>
        
        <h2 className="settings-subtitle" style={{ marginTop: '2rem' }}>About</h2>
        <p className="settings-desc">
          <strong>Cloze Chinese</strong> • Made by Nick
        </p>
        <p className="settings-desc">
          A fill-in-the-blank language learning app for Simplified Chinese. 
          100% free to play.
        </p>
      </div>
    </section>
  );
}