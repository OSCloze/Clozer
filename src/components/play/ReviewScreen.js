import React from 'react';

const ReviewScreen = ({ reviewItems, onPlayAgain, onReturnToChapters }) => {
    const totalQuestions = reviewItems?.length || 0;
    const correctCount = reviewItems?.filter(item => item?.isCorrect)?.length || 0;
    const incorrectCount = totalQuestions - correctCount;

    if (!reviewItems || reviewItems.length === 0) {
        return (
            <div className="review-panel">
                <h2 className="review-title">Review</h2>
                <div className="empty-message">No questions to review</div>
                <div className="post-check-row">
                    <button onClick={onReturnToChapters} className="btn-primary">
                        Return to Chapters
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="review-panel">
            <h2 className="review-title">Review</h2>

            <div className="review-stats">
                <div className="stat-item">
                    <div className={`stat-value ${correctCount > 0 ? 'correct' : ''}`}>
                        {correctCount}
                    </div>
                    <div className="stat-label">Correct</div>
                </div>
                <div className="stat-item">
                    <div className={`stat-value ${incorrectCount > 0 ? 'incorrect' : ''}`}>
                        {incorrectCount}
                    </div>
                    <div className="stat-label">Incorrect</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">{totalQuestions}</div>
                    <div className="stat-label">Total</div>
                </div>
            </div>

            <h3 className="review-subtitle">Question Details</h3>

            <ul className="review-list">
                {reviewItems.map((item, index) => {
                    const sentence = item?.sentence || '';
                    const native = item?.native || '';
                    const userAnswer = item?.userAnswer || '';
                    const correctAnswer = item?.correctAnswer || '';
                    const isCorrect = item?.isCorrect || false;
                    const usedDontKnow = item?.usedDontKnow || false;

                    return (
                        <li
                            key={index}
                            className={`review-item ${isCorrect ? 'review-item--correct' : 'review-item--wrong'}`}
                        >
                            <div className="review-item-header">
                                <span className={`review-badge ${isCorrect ? 'review-badge--correct' : 'review-badge--wrong'}`}>
                                    {isCorrect ? 'Correct' : usedDontKnow ? 'Didn\'t know' : 'Incorrect'}
                                </span>
                            </div>

                            <p className="review-sentence">{sentence}</p>
                            <p className="review-native">{native}</p>

                            {!isCorrect && (
                                <div className="review-incorrect-detail">
                                    {!usedDontKnow && userAnswer && (
                                        <div className="review-user-answer">
                                            Your answer: <span className="user-answer-value">{userAnswer}</span>
                                        </div>
                                    )}
                                    <div className="review-correct-answer">
                                        Correct: <span className="correct-highlight">{correctAnswer}</span>
                                    </div>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>

            <div className="post-check-row">
                <button onClick={onPlayAgain} className="btn-primary">
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default ReviewScreen;