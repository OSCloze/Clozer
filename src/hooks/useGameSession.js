// src/hooks/useGameSession.js
import { useState, useCallback } from 'react';

export function useGameSession() {
  const [gameState, setGameState] = useState('setup');
  const [sessionSentences, setSessionSentences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [sessionResults, setSessionResults] = useState({});

  const currentSentence = sessionSentences[currentIndex] || null;

  const startSession = useCallback((sentences) => {
    setSessionSentences(sentences);
    setCurrentIndex(0);
    setUserAnswer('');
    setIsAnswered(false);
    setFeedback('');
    setShowExplanation(false);
    setSelectedWord(null);
    setSessionResults({});
    setGameState('playing');
  }, []);

  const checkAnswer = useCallback((correctAnswer) => {
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    setFeedback(isCorrect ? 'Correct!' : 'Not quite');
    setIsAnswered(true);
    return isCorrect;
  }, [userAnswer]);

  const recordResult = useCallback((sentenceId, result) => {
    setSessionResults(prev => ({ ...prev, [sentenceId]: result }));
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndex + 1 < sessionSentences.length) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setIsAnswered(false);
      setFeedback('');
      setShowExplanation(false);
      setSelectedWord(null);
    } else {
      setGameState('review');
    }
  }, [currentIndex, sessionSentences.length]);

  const resetToSetup = useCallback(() => {
    setGameState('setup');
  }, []);

  const toggleExplanation = useCallback(() => {
    setShowExplanation(prev => !prev);
  }, []);

  const clearSelectedWord = useCallback(() => {
    setSelectedWord(null);
  }, []);

  return {
    gameState,
    sessionSentences,
    currentIndex,
    currentSentence,
    userAnswer,
    setUserAnswer,
    isAnswered,
    setIsAnswered, // <-- ADD THIS
    feedback,
    setFeedback,
    showExplanation,
    setShowExplanation,
    selectedWord,
    setSelectedWord,
    sessionResults,
    startSession,
    checkAnswer,
    recordResult,
    goToNext,
    resetToSetup,
    toggleExplanation,
    clearSelectedWord,
  };
}