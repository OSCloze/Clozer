// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';
import { useWordMastery } from '../hooks/useWordMastery';
import { useStoryProgress } from '../hooks/useStoryProgress';
import { levels } from '../data';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('play');

  // UI state (expanded/collapsed levels)
  const [expandedLevels, setExpandedLevels] = useState({});

  // Custom hooks for data management
  const wordMasteryHook = useWordMastery();
  const storyProgressHook = useStoryProgress();

  /**
   * Toggle level accordion expansion
   */
  const toggleLevel = (levelId) => {
    setExpandedLevels(prev => ({
      ...prev,
      [levelId]: !prev[levelId]
    }));
  };

  /**
   * Handle a correct answer - updates word mastery and story progress
   */
  const handleCorrectAnswer = (wordId, sentenceId, chapterId) => {
    wordMasteryHook.incrementMastery(wordId);
    storyProgressHook.markSentenceRevealed(chapterId, sentenceId);
  };

  /**
   * Reset all progress (for settings page)
   */
  const resetAllProgress = () => {
    wordMasteryHook.resetMastery();
    storyProgressHook.resetStoryProgress();
  };

  const value = {
    // Navigation
    currentPage,
    setCurrentPage,

    // UI
    expandedLevels,
    toggleLevel,

    // Word mastery
    wordMastery: wordMasteryHook.wordMastery,
    getMasteryCount: wordMasteryHook.getMasteryCount,
    isWordLearned: wordMasteryHook.isWordLearned,
    isWordMastered: wordMasteryHook.isWordMastered,
    incrementMastery: wordMasteryHook.incrementMastery,
    resetMastery: wordMasteryHook.resetMastery,

    completedChapters: storyProgressHook.completedChapters,

    // Story progress - full API
    ...storyProgressHook, // Spread all methods and state from the hook

    // Combined actions
    handleCorrectAnswer,
    resetAllProgress,

    // Static data
    levels
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}