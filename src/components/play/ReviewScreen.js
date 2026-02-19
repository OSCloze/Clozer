import React from 'react';
import { useApp } from '../../context/AppContext';
import { getSessionStats } from '../../utils/gameHelpers';

export default function ReviewScreen({
  sessionSentences,
  sessionResults,
  onPlayAgain,
  mode,
  chapterId,
  chapterTitle,
  isChapterComplete
}) {
  const stats = getSessionStats(sessionResults);

  return (
    <div className="play-content play-content--review">
      <div className="review-panel">
        <h2 className="review-title">
          {mode === 'story' ? 'Chapter Complete!' : 'Session Complete'}
        </h2>

        {/* Simple chapter completion message */}
        {mode === 'story' && isChapterComplete && (
          <p className="chapter-complete-simple">
            You've completed Chapter {chapterId}: {chapterTitle}
          </p>
        )}

        {/* Summary stats */}
        <div className="review-stats">
          <div className="stat-item">
            <div className="stat-value correct">{stats.correct}</div>
            <div className="stat-label">Correct</div>
          </div>
          <div className="stat-item">
            <div className="stat-value incorrect">{stats.incorrect}</div>
            <div className="stat-label">Incorrect</div>
          </div>
        </div>

        <h3 className="review-subtitle">Review Answers</h3>

        <ul className="review-list">
          {sessionSentences.map((sentence, idx) => {
            const result = sessionResults[sentence.id];
            const wasCorrect = result?.correct || false;
            const userAnswer = result?.answer || '';

            return (
              <li key={idx} className={`review-item ${wasCorrect ? 'review-item--correct' : 'review-item--wrong'}`}>
                <div className="review-item-header">
                  <span className={`review-badge ${wasCorrect ? 'review-badge--correct' : 'review-badge--wrong'}`}>
                    {wasCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>

                {wasCorrect ? (
                  <p className="review-sentence">
                    {sentence.sentence.replace('_____', sentence.answer)}
                  </p>
                ) : (
                  <div className="review-incorrect-detail">
                    <p className="review-sentence">
                      {sentence.sentence.split('_____').map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i === 0 && (
                            <span className="review-user-answer">
                              {userAnswer || "???"}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                    <p className="review-correct-answer">
                      Correct answer: <span className="correct-highlight">{sentence.answer}</span>
                    </p>
                  </div>
                )}

                {sentence.nativeSentence && (
                  <p className="review-native">{sentence.nativeSentence}</p>
                )}
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="btn-primary"
          onClick={onPlayAgain}
        >
          {mode === 'story' ? 'Back to Chapters' : 'New Session'}
        </button>
      </div>
    </div>
  );
}