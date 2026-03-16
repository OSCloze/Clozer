// src/components/play/TranslationBox.js
import React from 'react';

export default function TranslationBox({ word, onClose }) {
  if (!word) return null;

  console.log('TranslationBox received:', word); // Debug log

  return (
    <div className="translation-box">
      <div className="translation-header">
        <span className="translation-word">{word.text}</span>
        <span className="translation-pinyin">{word.pinyin || ''}</span>
        <button
          className="translation-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <div className="translation-meaning">
        {word.meaning || 'No translation available'}
      </div>
    </div>
  );
}