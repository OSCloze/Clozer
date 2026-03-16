// src/components/play/GameScreen.js
import React from 'react';
import SentenceDisplay from './SentenceDisplay';
import TranslationBox from './TranslationBox';

export default function GameScreen({
  currentSentence,
  currentIndex,
  sessionSentences,
  userAnswer,
  setUserAnswer,
  isAnswered,
  feedback,
  selectedWord,
  onCheck,
  onNext,
  onWordClick,
  onCloseTranslation,
  onDontKnow,
  usedDontKnow,
  words
}) {
  const handleCheck = () => {
    onCheck();
  };

  const handleDontKnow = () => {
    if (onDontKnow) {
      onDontKnow(currentSentence);
    }
  };

  return (
    <div className="play-content play-content--game">
      <div className="main">
        <div className="game-header">
          <p className="progress">
            Question {currentIndex + 1} of {sessionSentences.length}
          </p>
          <div
            className={`feedback ${feedback.includes('Correct') ? 'correct' : feedback ? 'wrong' : ''}`}
            hidden={!feedback}
          >
            {feedback}
          </div>
        </div>

        <div className="english-translation">
          {currentSentence?.nativeSentence}
        </div>

        <SentenceDisplay
          sentence={currentSentence}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          isAnswered={isAnswered}
          feedback={feedback}
          onCheck={handleCheck}
          onWordClick={onWordClick}
          usedDontKnow={usedDontKnow}
          words={words}
        />

        {selectedWord && (
          <TranslationBox
            word={selectedWord}
            onClose={onCloseTranslation}
          />
        )}

        {!isAnswered && (
          <>
            <div className="check-row">
              <button
                type="button"
                id="checkButton"
                className="btn-primary"
                onClick={handleCheck}
                disabled={!userAnswer.trim()}
              >
                Check
              </button>
            </div>

            <div className="dont-know-row">
              <button
                type="button"
                id="dontKnowButton"
                className="btn-dont-know"
                onClick={handleDontKnow}
              >
                I don't know
              </button>
            </div>
          </>
        )}

        {isAnswered && (
          <div className="post-check-row">
            <button
              type="button"
              id="nextButton"
              className="btn-secondary"
              onClick={onNext}
            >
              {currentIndex + 1 >= sessionSentences.length ? 'See Results' : 'Next'}
            </button>
            {/* Explanation button and box removed */}
          </div>
        )}
      </div>
    </div>
  );
}