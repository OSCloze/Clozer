// src/pages/WordsPage.js
import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import WordGrid from '../components/words/WordGrid';
import WordModal from '../components/words/WordModal';

// Helper function to strip tone marks from pinyin
function stripToneMarks(pinyin) {
  const toneMarkMap = {
    'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
    'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
    'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
    'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
    'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
    'ǖ': 'ü', 'ǘ': 'ü', 'ǚ': 'ü', 'ǜ': 'ü', 'ü': 'ü',
    'Ā': 'A', 'Á': 'A', 'Ǎ': 'A', 'À': 'A',
    'Ē': 'E', 'É': 'E', 'Ě': 'E', 'È': 'E',
    'Ī': 'I', 'Í': 'I', 'Ǐ': 'I', 'Ì': 'I',
    'Ō': 'O', 'Ó': 'O', 'Ǒ': 'O', 'Ò': 'O',
    'Ū': 'U', 'Ú': 'U', 'Ǔ': 'U', 'Ù': 'U',
    'Ǖ': 'Ü', 'Ǘ': 'Ü', 'Ǚ': 'Ü', 'Ǜ': 'Ü'
  };

  return pinyin.split('').map(char => toneMarkMap[char] || char).join('');
}

export default function WordsPage() {
  const { words, wordMastery = {} } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWordId, setSelectedWordId] = useState(null); // changed from selectedWord

  // First, add character property to all words
  const wordsWithCharacter = useMemo(() => {
    return words.map(word => ({
      ...word,
      character: word.word
    }));
  }, [words]);

  // Filter words based on search term (ignoring tone marks in pinyin)
  const filteredWords = useMemo(() => {
    if (!searchTerm.trim()) return wordsWithCharacter;

    const term = searchTerm.toLowerCase().trim();

    return wordsWithCharacter.filter(word => {
      // Search in Chinese character
      if (word.word.toLowerCase().includes(term)) return true;

      // Search in meaning
      if (word.meaning.toLowerCase().includes(term)) return true;

      // Search in pinyin (with and without tone marks)
      const pinyinLower = word.pinyin.toLowerCase();
      if (pinyinLower.includes(term)) return true;

      // Search in pinyin without tone marks
      const pinyinNoTones = stripToneMarks(pinyinLower);
      if (pinyinNoTones.includes(term)) return true;

      return false;
    });
  }, [wordsWithCharacter, searchTerm]);

  const handleWordClick = (word) => {
    setSelectedWordId(word.id); // store just the id
  };

  const handleCloseModal = () => {
    setSelectedWordId(null);
  };

  return (
    <section className="view is-active" data-view="words">
      <header className="header">
        <h1>Words</h1>
        <p className="header-desc">Browse all vocabulary</p>
      </header>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by character, pinyin, or meaning..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Word Grid */}
      <WordGrid
        words={filteredWords}
        wordMastery={wordMastery}
        selectedWordId={selectedWordId}
        onWordClick={handleWordClick}
      />

      {/* Word Modal */}
      {selectedWordId && (
        <WordModal
          wordId={selectedWordId}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}