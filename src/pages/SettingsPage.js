// src/pages/SettingsPage.js
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const { wordMastery, resetProgress } = useApp();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Calculate total correct answers from wordMastery
  const totalCorrectAnswers = Object.values(wordMastery || {}).reduce(
    (sum, count) => sum + count,
    0
  );

  const handleResetProgress = () => {
    if (resetProgress) {
      resetProgress();
      setShowResetConfirm(false);
    }
  };

  return (
    <section className="view is-active" data-view="settings">
      <header className="header">
        <h1>Settings</h1>
        <p className="header-desc">Manage your learning progress</p>
      </header>

      <div className="settings-panel">
        {/* Coin Counter with Emoji */}
        <div className="coin-counter-container">
          <div className="coin-emoji-wrapper">
            <span className="coin-emoji">🪭</span>
          </div>
          <div className="counter-stats">
            <span className="counter-label">Total Correct Answers</span>
            <span className="counter-value">{totalCorrectAnswers}</span>
          </div>
        </div>

        {/* Reset Progress Section */}
        <div className="reset-section">
          <h2 className="settings-subtitle">Reset Progress</h2>
          <p className="settings-desc">
            This will permanently delete all your learning progress, including:
          </p>
          <ul className="settings-list">
            <li>Word mastery counts</li>
            <li>Completed levels</li>
            <li>All learning statistics</li>
          </ul>

          {!showResetConfirm ? (
            <button
              className="btn-danger"
              onClick={() => setShowResetConfirm(true)}
            >
              Reset All Progress
            </button>
          ) : (
            <div className="reset-confirm">
              <p className="settings-warning">
                ⚠️ Are you sure? This action cannot be undone.
              </p>
              <div className="reset-actions">
                <button
                  className="btn-danger"
                  onClick={handleResetProgress}
                >
                  Yes, Reset Everything
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setShowResetConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}