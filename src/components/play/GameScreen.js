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
  showExplanation,
  selectedWord,
  onCheck,
  onNext,
  onToggleExplanation,
  onWordClick,
  onCloseTranslation,
  mode,
  chapterTitle,
  chapterImage
}) {
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

        {/* Story context banner with image and scene details */}
        {mode === 'story' && chapterTitle && (
          <div className="story-context">
            <div className="story-title-row">
              <span className="story-chapter">Chapter {currentSentence?.level}</span>
              <span className="story-title">{chapterTitle}</span>
            </div>

            {/* Sentence-specific image - between title and scene details */}
            {currentSentence?.image && (
              <div className="sentence-image-container">
                <img
                  src={currentSentence.image}
                  alt={`Scene ${currentIndex + 1}`}
                  className="sentence-image"
                  onError={(e) => {
                    console.log('Sentence image failed to load:', currentSentence.image);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* Scene details - italicized */}
            {currentSentence?.sceneDetails && (
              <div className="story-scene-details">
                {currentSentence.sceneDetails}
              </div>
            )}
          </div>
        )}

        {/* Native sentence */}
        {currentSentence?.nativeSentence && (
          <div className="native-sentence-container">
            {currentSentence.nativeSentence}
          </div>
        )}

        {/* Sentence Display with clickable words and blank */}
        <SentenceDisplay
          sentence={currentSentence}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          isAnswered={isAnswered}
          feedback={feedback}
          onCheck={onCheck}
          onWordClick={onWordClick}
        />

        {/* Translation Box */}
        {selectedWord && (
          <TranslationBox
            word={selectedWord}
            onClose={onCloseTranslation}
          />
        )}

        {/* Answer row */}
        {!isAnswered && (
          <div className="check-row">
            <button
              type="button"
              id="checkButton"
              className="btn-primary"
              onClick={onCheck}
              disabled={!userAnswer.trim()}
            >
              Check
            </button>
          </div>
        )}

        {/* Explanation */}
        {isAnswered && currentSentence?.explanation && (
          <div className="explanation" hidden={!showExplanation}>
            {currentSentence.explanation}
          </div>
        )}

        {/* Post-check row */}
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
            {currentSentence?.explanation && (
              <button
                type="button"
                className="btn-ghost"
                onClick={onToggleExplanation}
              >
                {showExplanation ? 'Hide Explanation' : 'View Explanation'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}