// src/components/play/SetupScreen.js
import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { getAvailableSentences, selectSessionSentences } from '../../utils/sentenceFilters';

export default function SetupScreen({ onStart }) {
  const { levels, sentences } = useApp();
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

      const levelSentencesMap = {};
      selectedLevels.forEach(levelId => {
        levelSentencesMap[levelId] = getAvailableSentences(sentences, levelId);
      });

      const emptyLevels = selectedLevels.filter(levelId => levelSentencesMap[levelId].length === 0);
      if (emptyLevels.length > 0) {
        alert(`Levels ${emptyLevels.join(', ')} have no sentences yet.`);
        return;
      }

      if (selectedLevels.length > sessionSize) {
        const shuffledLevels = [...selectedLevels].sort(() => Math.random() - 0.5);
        const levelsToUse = shuffledLevels.slice(0, sessionSize);

        let selectedSentences = [];
        levelsToUse.forEach(levelId => {
          const levelSentences = levelSentencesMap[levelId];
          const randomIndex = Math.floor(Math.random() * levelSentences.length);
          selectedSentences.push(levelSentences[randomIndex]);
        });

        const finalSession = selectedSentences.sort(() => Math.random() - 0.5);
        onStart(finalSession);
        return;
      }

      const sentencesPerLevel = Math.floor(sessionSize / selectedLevels.length);
      const remainder = sessionSize % selectedLevels.length;

      let selectedSentences = [];

      selectedLevels.forEach((levelId, index) => {
        const levelSentences = levelSentencesMap[levelId];
        const shuffled = [...levelSentences].sort(() => Math.random() - 0.5);
        const takeCount = sentencesPerLevel + (index < remainder ? 1 : 0);
        selectedSentences = [...selectedSentences, ...shuffled.slice(0, takeCount)];
      });

      const finalSession = selectedSentences.sort(() => Math.random() - 0.5);
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
            Select Levels
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

          {/* Selection summary and buttons moved here */}
          <div className="level-selection-footer">
            <div className="level-selection-actions">
              <button
                className="btn-small"
                onClick={selectAllLevels}
                type="button"
              >
                Select All
              </button>
              <button
                className="btn-small"
                onClick={clearAllLevels}
                type="button"
              >
                Clear
              </button>
            </div>
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
          Start Session ({selectedLevels.length} level{selectedLevels.length !== 1 ? 's' : ''})
        </button>
      </div>
    </div>
  );
}