import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useGameSession } from '../hooks/useGameSession';
import { chapters, getWordById } from '../data';
import { getAvailableLevels, isLevelUnlocked } from '../utils/levelHelpers';
import { getSentencesForLevel, selectSentencesByMastery } from '../utils/sentenceHelpers';
import PracticeSetup from '../components/play/PracticeSetup';
import VocabularyLearning from '../components/play/VocabularyLearning';
import GameScreen from '../components/play/GameScreen';
import ReviewScreen from '../components/play/ReviewScreen';

export default function PlayPage() {
  const [mode, setMode] = useState('story');
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [currentChapterWords, setCurrentChapterWords] = useState([]);

  // First, get all values from useApp
  const {
    completedLevels,
    handleCorrectAnswer,
    levels,
    answeredSentences,
    wordMastery,
    completedChapters,
    chapterProgress,
    getChapterProgress,
    getCurrentSentence,
    markSentenceRevealed,
    moveToNextSentence,
    isChapterCompleted,
    replayChapterId,
    setReplayChapterId,
    startChapter
  } = useApp();

  const gameSession = useGameSession();

  // Now we can safely use completedChapters
  const isChapter1Completed = completedChapters?.includes(1) || false;

  const getCurrentChapter = () => {
    for (let i = 1; i <= chapters.length; i++) {
      if (!completedChapters?.includes(i)) {
        return chapters.find(c => c.id === i);
      }
    }
    return chapters[chapters.length - 1];
  };

  const currentChapter = getCurrentChapter();
  const progress = currentChapter ? getChapterProgress(currentChapter.id) : null;
  const progressPercentage = currentChapter && progress ?
    Math.round((progress.revealedSentences.length / currentChapter.sentences.length) * 100) : 0;
  const isFirstTimeInChapter = currentChapter && progress && progress.revealedSentences.length === 0;

  // Handle replay flag
  useEffect(() => {
    if (replayChapterId) {
      const chapter = chapters.find(c => c.id === replayChapterId);
      if (chapter) {
        gameSession.setMode('story');
        gameSession.setChapterId(replayChapterId);
        gameSession.setChapterTitle(chapter.title);
        gameSession.setChapterImage(chapter.image);
        gameSession.startSession(
          chapter.sentences,
          'story',
          replayChapterId,
          chapter.title,
          chapter.image
        );
        setReplayChapterId(null);
      }
    }
  }, [replayChapterId]);

  // When story mode starts, set up the session with the current chapter's sentences
  useEffect(() => {
    if (gameSession.mode === 'story' && gameSession.chapterId && !gameSession.currentSentence) {
      const chapter = chapters.find(c => c.id === gameSession.chapterId);
      if (chapter) {
        const progress = getChapterProgress(gameSession.chapterId);
        const isFirstTime = progress.revealedSentences.length === 0;

        if (isFirstTime) {
          const chapterWords = chapter.words.map(id => getWordById(id)).filter(Boolean);
          setCurrentChapterWords(chapterWords);
          setShowVocabulary(true);
        } else {
          const currentSentence = getCurrentSentence(gameSession.chapterId);
          const remainingSentences = chapter.sentences.slice(
            chapter.sentences.findIndex(s => s.id === currentSentence?.id)
          );
          gameSession.startSession(
            remainingSentences,
            'story',
            gameSession.chapterId,
            chapter.title,
            chapter.image
          );
        }
      }
    }
  }, [gameSession.mode, gameSession.chapterId]);

  const handleVocabularyComplete = () => {
    setShowVocabulary(false);
    const chapter = chapters.find(c => c.id === gameSession.chapterId);
    if (chapter) {
      const currentSentence = getCurrentSentence(gameSession.chapterId);
      const remainingSentences = chapter.sentences.slice(
        chapter.sentences.findIndex(s => s.id === currentSentence?.id)
      );
      gameSession.startSession(
        remainingSentences,
        'story',
        gameSession.chapterId,
        chapter.title,
        chapter.image
      );
    }
  };

  const handleStartPractice = (selectedTopic, sessionSize) => {
    // Collect sentences from all completed chapters based on topic filter
    let allSentences = [];

    if (selectedTopic === 'all') {
      // Get all sentences from completed chapters
      completedChapters?.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences) {
          allSentences = [...allSentences, ...chapter.sentences];
        }
      });
    } else {
      // Get sentences filtered by topic from completed chapters
      completedChapters?.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences) {
          const filtered = chapter.sentences.filter(s => s.topic === selectedTopic);
          allSentences = [...allSentences, ...filtered];
        }
      });
    }

    if (allSentences.length === 0) {
      alert('No sentences available for the selected topic. Try a different topic.');
      return;
    }

    // Select sentences weighted by word mastery
    const selected = selectSentencesByMastery(
      allSentences,
      sessionSize,
      wordMastery
    );

    gameSession.startSession(selected, 'practice');
  };

  const handleStartStory = () => {
    if (!currentChapter) return;

    const progress = getChapterProgress(currentChapter.id);
    const isFirstTime = progress.revealedSentences.length === 0;

    gameSession.setMode('story');
    gameSession.setChapterId(currentChapter.id);
    gameSession.setChapterTitle(currentChapter.title);
    gameSession.setChapterImage(currentChapter.image);

    if (isFirstTime) {
      const chapterWords = currentChapter.words.map(id => getWordById(id)).filter(Boolean);
      setCurrentChapterWords(chapterWords);
      setShowVocabulary(true);
    } else {
      const currentSentence = getCurrentSentence(currentChapter.id);
      const remainingSentences = currentChapter.sentences.slice(
        currentChapter.sentences.findIndex(s => s.id === currentSentence?.id)
      );
      gameSession.startSession(
        remainingSentences,
        'story',
        currentChapter.id,
        currentChapter.title,
        currentChapter.image
      );
    }
  };

  const handleCheck = () => {
    const isCorrect = gameSession.checkAnswer(gameSession.currentSentence.answer);

    if (isCorrect) {
      handleCorrectAnswer(
        gameSession.currentSentence.targetWordId,
        gameSession.currentSentence.id,
        gameSession.currentSentence.level
      );

      if (gameSession.mode === 'story' && gameSession.chapterId) {
        markSentenceRevealed(
          gameSession.chapterId,
          gameSession.currentSentence.id
        );
      }
    }

    gameSession.recordResult(gameSession.currentSentence.id, {
      correct: isCorrect,
      answer: gameSession.userAnswer
    });

    if (gameSession.mode === 'story' && gameSession.chapterId) {
      const chapter = chapters.find(c => c.id === gameSession.chapterId);
      const currentIndex = chapter.sentences.findIndex(s => s.id === gameSession.currentSentence.id);
      const isLastSentence = currentIndex === chapter.sentences.length - 1;

      if (isCorrect && isLastSentence) {
        gameSession.setGameState('review');
      }
    }
  };

  const handleNext = () => {
    if (gameSession.mode === 'story' && gameSession.chapterId) {
      const nextIndex = gameSession.currentIndex + 1;
      const isLastInSession = nextIndex >= gameSession.sessionSentences.length;

      if (isLastInSession) {
        const chapter = chapters.find(c => c.id === gameSession.chapterId);
        const currentSentenceId = gameSession.currentSentence.id;
        const isLastChapterSentence = chapter.sentences[chapter.sentences.length - 1].id === currentSentenceId;

        if (isLastChapterSentence) {
          gameSession.setGameState('review');
          return;
        }
      }

      moveToNextSentence(gameSession.chapterId);
    }
    gameSession.goToNext();
  };

  const handleWordClick = (wordData) => {
    gameSession.setSelectedWord(wordData);
  };

  return (
    <section className="view is-active" data-view="play">
      <header className="header header--play">
        <h1>Cloze 中文</h1>
      </header>

      {showVocabulary ? (
        <VocabularyLearning
          words={currentChapterWords}
          onComplete={handleVocabularyComplete}
        />
      ) : (
        gameSession.gameState === 'setup' && (
          <div className="play-content play-content--config">
            <div className="mode-selector">
              <button
                className={`mode-btn ${mode === 'story' ? 'active' : ''}`}
                onClick={() => setMode('story')}
              >
                <span className="mode-label">Story Mode</span>
              </button>
              <button
                className={`mode-btn ${mode === 'practice' ? 'active' : ''} ${!isChapter1Completed ? 'disabled' : ''}`}
                onClick={() => {
                  if (isChapter1Completed) {
                    setMode('practice');
                  }
                }}
                disabled={!isChapter1Completed}
                title={!isChapter1Completed ? "Complete Chapter 1 first to unlock Practice Mode" : ""}
              >
                <span className="mode-label">Practice Mode</span>
              </button>
            </div>

            {mode === 'story' && currentChapter && (
              <div className="story-setup">
                <div className="current-chapter-card">
                  {currentChapter.image && (
                    <div className="chapter-image-container">
                      <img
                        src={currentChapter.image}
                        alt={`Chapter ${currentChapter.id}`}
                        className="chapter-image"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    </div>
                  )}
                  <div className="chapter-info">
                    <span className="chapter-number">Chapter {currentChapter.id}</span>
                    <h3 className="chapter-title">{currentChapter.title}</h3>
                    <p className="chapter-description">{currentChapter.description}</p>
                    <button
                      className="btn-primary continue-story-btn"
                      onClick={handleStartStory}
                    >
                      {isFirstTimeInChapter ? 'Start Story' : 'Continue Story'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {mode === 'practice' && (
              <div className="practice-setup">
                <PracticeSetup
                  onStart={handleStartPractice}
                  completedChapters={completedChapters}
                />
              </div>
            )}
          </div>
        )
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
          mode={gameSession.mode}
          chapterTitle={gameSession.chapterTitle}
          chapterImage={gameSession.chapterImage}
        />
      )}

      {gameSession.gameState === 'review' && (
        <ReviewScreen
          sessionSentences={gameSession.sessionSentences}
          sessionResults={gameSession.sessionResults}
          onPlayAgain={gameSession.resetToSetup}
          mode={gameSession.mode}
          chapterId={gameSession.chapterId}
          chapterTitle={gameSession.chapterTitle}
          isChapterComplete={gameSession.chapterId ? isChapterCompleted(gameSession.chapterId) : false}
        />
      )}
    </section>
  );
}