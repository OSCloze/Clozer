// src/components/play/TranslationBox.js
import React from 'react';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';

export default function TranslationBox({ word, onClose }) {
  const { isMobile } = useDeviceDetect();

  if (!word) return null;

  // Proper Pleco URL scheme - this should open the app and search for the word
  const plecoUrl = `plecoapi://x-callback-url/query?q=${encodeURIComponent(word.text)}`;

  // Alternative scheme if the above doesn't work
  const plecoAltUrl = `plecoapi://query?q=${encodeURIComponent(word.text)}`;

  const openPleco = () => {
    if (isMobile) {
      // Try primary URL
      window.location.href = plecoUrl;

      // Fallback to alternative after a tiny delay if needed
      setTimeout(() => {
        // Check if app opened (this is tricky, but we'll keep it simple)
        // Just using the primary URL is usually enough
      }, 100);
    }
  };

  // For debugging - log the URL
  console.log('Opening Pleco with URL:', plecoUrl);

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
            title={`Look up "${word.text}" in Pleco`}
          >
            <span className="pleco-icon">📱</span>
            <span className="pleco-text">Open in Pleco</span>
          </button>
          <div className="pleco-word-hint">
            Searching for: <strong>{word.text}</strong>
          </div>
        </div>
      )}
    </div>
  );
}