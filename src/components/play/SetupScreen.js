// src/components/play/SetupScreen.js
import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { selectSessionSentences } from '../../utils/sentenceFilters';
import { randomizeSessionSentences } from '../../utils/sentenceRandomizer';

export default function SetupScreen({ onStart }) {
  const { levels, sentences, words } = useApp();
  const [selectedLevels, setSelectedLevels] = useState([1]);
  const [sessionSize, setSessionSize] = useState(10);

  if (!levels || levels.length === 0) {
    return (
      <div className="play-content play-content--config">
        <div className="play-config">
          <h2 className="play-config-title">New Session</h2>
          <p>Loading levels...</p>
        </div>
      </div>
    );
  }

  const toggleLevel = (levelId) => {
    setSelectedLevels(prev => {
      if (prev.includes(levelId)) {
        return prev.filter(id => id !== levelId);
      } else {
        return [...prev, levelId].sort((a, b) => a - b);
      }
    });
  };

  const selectAllLevels = () => {
    setSelectedLevels(levels.map(l => l.id));
  };

  const clearAllLevels = () => {
    setSelectedLevels([]);
  };

  const handleStart = () => {
    try {
      if (selectedLevels.length === 0) {
        alert('Please select at least one level');
        return;
      }

      // Get all sentences from selected levels
      let available = [];
      selectedLevels.forEach(levelId => {
        const levelSentences = sentences.filter(s => s.level === levelId);
        available = [...available, ...levelSentences];
      });

      if (available.length === 0) {
        alert('No sentences available for the selected levels.');
        return;
      }

      // Case 1: More levels than questions
      if (selectedLevels.length > sessionSize) {
        // Randomly select which levels to include
        const shuffledLevels = [...selectedLevels].sort(() => Math.random() - 0.5);
        const levelsToUse = shuffledLevels.slice(0, sessionSize);

        // Get sentences from selected levels
        let selectedSentences = [];
        levelsToUse.forEach(levelId => {
          const levelSentences = available.filter(s => s.level === levelId);
          if (levelSentences.length > 0) {
            const randomIndex = Math.floor(Math.random() * levelSentences.length);
            selectedSentences.push(levelSentences[randomIndex]);
          }
        });

        // Randomize target words
        const finalSession = randomizeSessionSentences(selectedSentences, words);
        onStart(finalSession);
        return;
      }

      // Case 2: Fewer or equal levels than questions
      // Group sentences by level
      const sentencesByLevel = {};
      selectedLevels.forEach(levelId => {
        sentencesByLevel[levelId] = available.filter(s => s.level === levelId);
      });

      const sentencesPerLevel = Math.floor(sessionSize / selectedLevels.length);
      const remainder = sessionSize % selectedLevels.length;

      let selectedSentences = [];

      selectedLevels.forEach((levelId, index) => {
        const levelSentences = sentencesByLevel[levelId];
        // Shuffle the level's sentences
        const shuffled = [...levelSentences].sort(() => Math.random() - 0.5);

        // Take sentencesPerLevel, plus one extra for the first 'remainder' levels
        const takeCount = sentencesPerLevel + (index < remainder ? 1 : 0);
        selectedSentences = [...selectedSentences, ...shuffled.slice(0, takeCount)];
      });

      // Randomize target words for each sentence
      const finalSession = randomizeSessionSentences(selectedSentences, words);
      onStart(finalSession);
    } catch (error) {
      console.error('Error starting session:', error);
      alert('An error occurred while starting the session. Please try again.');
    }
  };

  return (
    <div className="play-content play-content--config">
      <div className="play-config">
        <h2 className="play-config-title">New Session</h2>

        {/* Level Selection */}
        <div className="play-config-row">
          <label className="play-config-label">
            Select Levels to Practice
          </label>

          <div className="level-list-container">
            {levels.map((level) => (
              <label key={level.id} className="level-list-item">
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(level.id)}
                  onChange={() => toggleLevel(level.id)}
                />
                <span className="level-item-content">
                  <span className="level-item-name">
                    {level.name}
                  </span>
                  <span className="level-item-icon">{level.icon || ''}</span>
                </span>
              </label>
            ))}
          </div>

          {/* Selection summary and buttons */}
          <div className="level-selection-footer">
            <span className="config-hint">
              {selectedLevels.length} level{selectedLevels.length !== 1 ? 's' : ''} selected
            </span>
          </div>
        </div>

        {/* Number of Questions Dropdown */}
        <div className="play-config-row">
          <label htmlFor="sessionSize" className="play-config-label">
            Number of questions
          </label>
          <select
            id="sessionSize"
            className="play-config-select"
            value={sessionSize}
            onChange={(e) => setSessionSize(Number(e.target.value))}
          >
            <option value={5}>5 questions</option>
            <option value={10}>10 questions</option>
            <option value={20}>20 questions</option>
            <option value={30}>30 questions</option>
            <option value={50}>50 questions</option>
          </select>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-full"
          onClick={handleStart}
          disabled={selectedLevels.length === 0}
        >
          Start Session
        </button>
      </div>
    </div>
  );
}