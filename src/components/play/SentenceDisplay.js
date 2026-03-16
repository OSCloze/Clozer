// src/components/play/SentenceDisplay.js
import React from 'react';

export default function SentenceDisplay({
  sentence,
  userAnswer,
  setUserAnswer,
  isAnswered,
  feedback,
  onCheck,
  onWordClick,
  usedDontKnow
}) {
  const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === 'Enter' && userAnswer.trim()) {
      e.preventDefault();
      onCheck();
    }
  };

  const handleWordClick = (word) => {
    // word is an object from processedWords
    if (!word.isPunctuation && word.wordId) {
      const isBlankWord = word.isBlank;
      // Only allow click if:
      // - It's not the blank word, OR
      // - It IS the blank word AND the question has been answered
      if (!isBlankWord || (isBlankWord && isAnswered)) {
        onWordClick({
          text: word.isBlank ? sentence.answer : word.text,
          pinyin: word.pinyin,
          meaning: word.meaning,
          wordId: word.wordId
        });
      }
    }
  };

  // Use processedWords directly from the sentence (provided by randomizer)
  const displayWords = sentence.processedWords || [];

  return (
    <>
      <div className="sentence-clickable-container">
        {displayWords.map((word, idx) => {
          const isBlankWord = word.isBlank;

          return (
            <span
              key={idx}
              className={`clickable-word ${word.isPunctuation ? 'punctuation' : ''} ${isBlankWord ? 'answer-word' : ''} ${isBlankWord && !isAnswered ? 'blank-not-clickable' : ''}`}
              onClick={() => handleWordClick(word)}
            >
              {isBlankWord && !isAnswered ? (
                <input
                  type="text"
                  className="inline-answer-word-input"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onClick={(e) => e.stopPropagation()}
                  autoFocus
                  style={{
                    width: `${Math.max(sentence.answer.length * 1.5, 4)}em`,
                    minWidth: '4em'
                  }}
                  placeholder=" "
                />
              ) : isBlankWord && isAnswered ? (
                <span className={`${feedback?.includes('Correct') ? 'answer-correct' : 'answer-incorrect'} clickable-answer`}>
                  {sentence.answer}
                </span>
              ) : (
                word.text
              )}
            </span>
          );
        })}
      </div>

      {/* Show user's wrong answer if not using "I don't know" */}
      {isAnswered && !feedback?.includes('Correct') && userAnswer && !usedDontKnow && (
        <div className="user-answer-display">
          <span className="user-answer-label">You answered: </span>
          <span className="user-answer-value">{userAnswer}</span>
        </div>
      )}
    </>
  );
}