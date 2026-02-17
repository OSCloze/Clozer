// src/components/play/TranslationBox.js
import React from 'react';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';

export default function TranslationBox({ word, onClose }) {
  const { isMobile } = useDeviceDetect();

  if (!word) return null;

  const plecoAppUrl = `plecoapi://x-callback-url/query?q=${encodeURIComponent(word.text)}`;

  const openPleco = () => {
    // Only attempt to open Pleco on mobile
    if (isMobile) {
      window.location.href = plecoAppUrl;
    }
  };

  return (
    <div className="translation-box">
      <div className="translation-header">
        <span className="translation-word">{word.text}</span>
        <span className="translation-pinyin">{word.pinyin}</span>
        <button
          className="translation-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <div className="translation-meaning">
        {word.meaning}
      </div>

      {/* Only show Pleco button on mobile */}
      {isMobile && (
        <div className="translation-footer">
          <button
            className="pleco-button"
            onClick={openPleco}
            title="Look up in Pleco dictionary (audio, stroke order, examples)"
          >
            <span className="pleco-icon">📱</span>
            <span className="pleco-text">Open in Pleco</span>
          </button>
        </div>
      )}
    </div>
  );
}