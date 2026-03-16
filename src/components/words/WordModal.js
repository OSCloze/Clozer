// src/components/words/WordModal.js
import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export default function WordModal({ wordId, onClose }) {
  const { words, wordMastery } = useApp();
  const word = words.find(w => w.id === wordId);
  const masteryCount = wordMastery[wordId] || 0;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!word) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="word-floating-modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="word-detail">
          <div className="detail-character">{word.word}</div>
          <div className="detail-pinyin">{word.pinyin}</div>
          <div className="detail-meaning">{word.meaning}</div>

          {/* Only show mastery counter if word has been answered correctly at least once */}
          {masteryCount > 0 && (
            <div className="word-mastery-modal">
              <span className="mastery-count">
                🪙 {masteryCount}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}