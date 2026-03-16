// src/context/AppContext.js
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { loadWords, loadSentences, loadLevels } from '../data/loaders';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [words, setWords] = useState([]);
  const [sentences, setSentences] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Word mastery counts (persisted in localStorage) - start with empty object
  const [wordMastery, setWordMastery] = useState(() => {
    const saved = localStorage.getItem('wordMastery');
    return saved ? JSON.parse(saved) : {}; // Start empty
  });

  // Save mastery to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wordMastery', JSON.stringify(wordMastery));
  }, [wordMastery]);

  // Derived: learnedWords set (any word with mastery > 0)
  const learnedWords = useMemo(() => {
    return new Set(
      Object.entries(wordMastery)
        .filter(([_, count]) => count > 0)
        .map(([id]) => Number(id))
    );
  }, [wordMastery]);

  // Load data on mount
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const [w, s, l] = await Promise.all([
          loadWords(),
          loadSentences(),
          loadLevels()
        ]);
        setWords(w);
        setSentences(s);
        setLevels(l);
        setError(null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load vocabulary data');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Increment mastery count for a word
  const incrementMastery = (wordId) => {
    setWordMastery(prev => ({
      ...prev,
      [wordId]: (prev[wordId] || 0) + 1
    }));
  };

  // Reset all progress to zero
  const resetProgress = () => {
    setWordMastery({});               // Clear all mastery counts
    setCompletedLevels(new Set());    // Clear completed levels
    localStorage.removeItem('wordMastery'); // Remove from localStorage
    console.log('Progress reset to zero');
  };

  // Mark a level as completed
  const completeLevel = (levelId) => {
    setCompletedLevels(prev => new Set([...prev, levelId]));
  };

  // Check if a level is completed
  const isLevelCompleted = (levelId) => {
    return completedLevels.has(levelId);
  };

  // Check if a word is learned
  const isWordLearned = (wordId) => {
    return learnedWords.has(wordId);
  };

  // Get mastery count for a word
  const getWordMastery = (wordId) => {
    return wordMastery[wordId] || 0;
  };

  const value = {
    words,
    sentences,
    levels,
    learnedWords,
    wordMastery,
    getWordMastery,
    incrementMastery,
    resetProgress,
    selectedLevel,
    setSelectedLevel,
    completedLevels,
    isLevelCompleted,
    completeLevel,
    isWordLearned,
    loading,
    error
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};