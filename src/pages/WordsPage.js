// src/pages/WordsPage.js
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getWordsForLevel } from '../data/words';
import { chapters } from '../data';
import WordGrid from '../components/words/WordGrid';
import WordModal from '../components/words/WordModal';

export default function WordsPage() {
  const {
    wordMastery,
    expandedLevels,
    toggleLevel
  } = useApp();

  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleCloseModal = () => {
    setSelectedWord(null);
  };

  return (
    <section className="view is-active" data-view="words">
      <header className="header">
        <h1>Words</h1>
        <p className="header-desc">
          All words are visible. Mastery increases when you correctly answer sentences containing these words.
        </p>
      </header>

      <div className="words-scrollable">
        <ul className="level-list">
          {/* Foundation Level (always first) */}
          <li className="level-item">
            <div
              className="level-header foundation-header"
              onClick={() => toggleLevel('foundation')}
            >
              <span className="level-expand-icon">
                {expandedLevels['foundation'] ? '▼' : '▶'}
              </span>
              <span className="level-name">
                Foundation
                <span className="foundation-badge">Always Known</span>
              </span>
              <span className="level-stats">
                {getWordsForLevel(1).length} words
              </span>
            </div>

            {expandedLevels['foundation'] && (
              <div className="level-content">
                <p className="level-description">
                  19 essential words for building basic sentences
                </p>

                <WordGrid
                  words={getWordsForLevel(1)}
                  wordMastery={wordMastery}
                  selectedWordId={selectedWord?.id}
                  onWordClick={handleWordClick}
                />
              </div>
            )}
          </li>

          {/* Chapters */}
          {chapters.map((chapter) => (
            <li key={chapter.id} className="level-item">
              <div
                className="level-header chapter-header"
                onClick={() => toggleLevel(`chapter-${chapter.id}`)}
              >
                <span className="level-expand-icon">
                  {expandedLevels[`chapter-${chapter.id}`] ? '▼' : '▶'}
                </span>
                <span className="level-name">
                  Chapter {chapter.id}: {chapter.title}
                </span>
                <span className="level-stats">
                  {chapter.words.length} words
                </span>
              </div>

              {expandedLevels[`chapter-${chapter.id}`] && (
                <div className="level-content">
                  <p className="level-description">{chapter.description}</p>

                  <WordGrid
                    words={chapter.words.map(wordId =>
                      getWordsForLevel(Math.floor(wordId / 10)).find(w => w.id === wordId)
                    ).filter(Boolean)}
                    wordMastery={wordMastery}
                    selectedWordId={selectedWord?.id}
                    onWordClick={handleWordClick}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {selectedWord && (
        <WordModal
          word={selectedWord}
          masteryCount={wordMastery[selectedWord.id] || 0}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}