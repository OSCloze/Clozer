// src/pages/PlayPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useGameSession } from '../hooks/useGameSession';
import SetupScreen from '../components/play/SetupScreen';
import GameScreen from '../components/play/GameScreen';
import ReviewScreen from '../components/play/ReviewScreen';

export default function PlayPage() {
  const navigate = useNavigate();
  const { words, incrementMastery, selectedLevel, completeLevel } = useApp();
  const gameSession = useGameSession();
  const [usedDontKnow, setUsedDontKnow] = useState(false);

  const handleStart = (sentences) => {
    console.log('Starting session with sentences:', sentences);
    gameSession.startSession(sentences);
    setUsedDontKnow(false);
  };

  const handleCheck = () => {
    const isCorrect = gameSession.checkAnswer(gameSession.currentSentence.answer);

    if (isCorrect) {
      incrementMastery(gameSession.currentSentence.targetWordId); // <-- add this
    }

    gameSession.recordResult(gameSession.currentSentence.id, {
      correct: isCorrect,
      answer: gameSession.userAnswer,
      usedDontKnow: false
    });
  };

  const handleDontKnow = (sentence) => {
    gameSession.setFeedback('Not quite');
    gameSession.setIsAnswered(true);
    gameSession.setUserAnswer(sentence.answer);
    gameSession.setShowExplanation(true);

    gameSession.recordResult(sentence.id, {
      correct: false,
      answer: sentence.answer,
      usedDontKnow: true
    });

    setUsedDontKnow(true);
  };

  const handleNext = () => {
    gameSession.goToNext();
    setUsedDontKnow(false);
  };

  const handleWordClick = (wordData) => {
    gameSession.setSelectedWord(wordData);
  };

  // Check for level completion when entering review state
  useEffect(() => {
    if (gameSession.gameState === 'review' && selectedLevel) {
      // Check if all answers were correct and no "I don't know" was used
      const allCorrect = Object.values(gameSession.sessionResults).every(r => r.correct === true);
      const noDontKnow = Object.values(gameSession.sessionResults).every(r => !r.usedDontKnow);

      if (allCorrect && noDontKnow) {
        console.log(`Level ${selectedLevel} completed!`);
        completeLevel(selectedLevel);
      }
    }
  }, [gameSession.gameState, gameSession.sessionResults, selectedLevel, completeLevel]);

  // Build review items
  const reviewItems = gameSession.sessionSentences
    .filter(s => gameSession.sessionResults[s.id])
    .map(s => {
      const r = gameSession.sessionResults[s.id];
      return {
        sentence: s.text,
        native: s.nativeSentence,
        userAnswer: r.usedDontKnow ? '' : r.answer,
        correctAnswer: s.answer,
        isCorrect: r.correct,
        usedDontKnow: r.usedDontKnow || false
      };
    });

  return (
    <section className="view is-active" data-view="play">
      <header className="header header--play">
        <h1>Cloze 中文</h1>
      </header>

      {gameSession.gameState === 'setup' && (
        <SetupScreen onStart={handleStart} />
      )}

      {gameSession.gameState === 'playing' && gameSession.currentSentence && (
        <GameScreen
          currentSentence={gameSession.currentSentence}
          currentIndex={gameSession.currentIndex}
          sessionSentences={gameSession.sessionSentences}
          userAnswer={gameSession.userAnswer}
          setUserAnswer={gameSession.setUserAnswer}
          isAnswered={gameSession.isAnswered}
          feedback={gameSession.feedback}
          showExplanation={gameSession.showExplanation}
          selectedWord={gameSession.selectedWord}
          onCheck={handleCheck}
          onNext={handleNext}
          onToggleExplanation={gameSession.toggleExplanation}
          onWordClick={handleWordClick}
          onCloseTranslation={gameSession.clearSelectedWord}
          onDontKnow={handleDontKnow}
          usedDontKnow={usedDontKnow}
          words={words}
        />
      )}

      {gameSession.gameState === 'review' && (
        <ReviewScreen
          reviewItems={reviewItems}
          onPlayAgain={gameSession.resetToSetup}
          onReturnToChapters={() => navigate('/levels')}
        />
      )}
    </section>
  );
}