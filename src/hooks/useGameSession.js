import { useState } from 'react';
import { chapters } from '../data';

export function useGameSession() {
  // Session state
  const [gameState, setGameState] = useState('setup');
  const [mode, setMode] = useState('practice');
  const [chapterId, setChapterId] = useState(null);
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterImage, setChapterImage] = useState('');
  const [sessionSize, setSessionSize] = useState(5);
  const [practiceLevel, setPracticeLevel] = useState(0);
  const [sessionSentences, setSessionSentences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionResults, setSessionResults] = useState({});
  const [isReplay, setIsReplay] = useState(false);

  // Current question state
  const [currentSentence, setCurrentSentence] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);

  /**
   * Start a new session with selected sentences
   * @param {Array} sentences - Array of sentence objects to use
   * @param {string} sessionMode - 'practice' or 'story'
   * @param {number} sessionChapterId - Chapter ID if in story mode
   * @param {string} sessionChapterTitle - Chapter title
   * @param {string} sessionChapterImage - Chapter image path
   */
  const startSession = (sentences, sessionMode, sessionChapterId = null, sessionChapterTitle = '', sessionChapterImage = '') => {
    if (sentences.length === 0) return;

    setMode(sessionMode);
    setChapterId(sessionChapterId);
    setChapterTitle(sessionChapterTitle);
    setChapterImage(sessionChapterImage);

    setSessionSentences(sentences);
    setCurrentSentence(sentences[0]);
    setCurrentIndex(0);
    setSessionResults({});
    setUserAnswer('');
    setIsAnswered(false);
    setFeedback('');
    setShowExplanation(false);
    setSelectedWord(null);
    setGameState('playing');
  };

  /**
   * Handle checking the user's answer
   * @param {string} correctAnswer 
   * @returns {boolean} - Whether answer was correct
   */
  const checkAnswer = (correctAnswer) => {
    const isCorrect = userAnswer.trim() === correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Not quite');
    setIsAnswered(true);
    return isCorrect;
  };

  /**
   * Move to next question or review
   */
  const goToNext = () => {
    const nextIndex = currentIndex + 1;
    setSelectedWord(null);

    if (nextIndex >= sessionSentences.length) {
      setGameState('review');
    } else {
      setCurrentSentence(sessionSentences[nextIndex]);
      setCurrentIndex(nextIndex);
      setUserAnswer('');
      setIsAnswered(false);
      setFeedback('');
      setShowExplanation(false);
    }
  };

  /**
   * Toggle explanation visibility
   */
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  /**
   * Reset to setup screen
   */
  const resetToSetup = () => {
    setSelectedWord(null);
    setGameState('setup');
    setSessionResults({});
    setMode('practice');
    setChapterId(null);
    setChapterTitle('');
    setChapterImage('');
  };

  /**
   * Record result for current sentence
   * @param {number} sentenceId 
   * @param {boolean} wasCorrect 
   */
  const recordResult = (sentenceId, result) => {
    setSessionResults(prev => ({
      ...prev,
      [sentenceId]: result
    }));
  };

  /**
   * Clear selected word (close modal)
   */
  const clearSelectedWord = () => {
    setSelectedWord(null);
  };

  return {
    // State
    gameState,
    mode,
    chapterId,
    chapterTitle,
    chapterImage,
    sessionSize,
    practiceLevel,
    sessionSentences,
    currentIndex,
    sessionResults,
    currentSentence,
    userAnswer,
    isAnswered,
    feedback,
    showExplanation,
    selectedWord,
    isReplay,
    setIsReplay,

    // Setters - EXPOSE ALL SETTERS
    setGameState,
    setMode,
    setChapterId,
    setChapterTitle,
    setChapterImage,
    setSessionSize,
    setPracticeLevel,
    setSessionSentences,
    setCurrentIndex,
    setSessionResults,
    setCurrentSentence,
    setUserAnswer,
    setIsAnswered,
    setFeedback,
    setShowExplanation,
    setSelectedWord,

    // Actions
    startSession,
    checkAnswer,
    goToNext,
    toggleExplanation,
    resetToSetup,
    recordResult,
    clearSelectedWord
  };
}