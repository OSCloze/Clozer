// src/components/words/WordCard.js
import React from 'react';

export default function WordCard({ word, masteryCount, isSelected, onClick, isFoundation }) {
  // Determine card class based on mastery and foundation status
  const getCardClass = () => {
    if (isFoundation) {
      return 'word-card foundation-word';
    }

    if (masteryCount >= 10) {
      return 'word-card mastered-blue';
    }

    if (masteryCount >= 5) {
      return 'word-card mastered-green';
    }

    if (masteryCount >= 1) {
      return 'word-card learned';
    }

    return 'word-card';
  };

  return (
    <div
      className={`${getCardClass()} ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="word-character">{word.character}</span>
      <span className="word-pinyin">{word.pinyin}</span>
      <span className="word-meaning">{word.meaning}</span>
    </div>
  );
}