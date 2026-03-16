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
    // Allow clicking on any non-punctuation word
    if (!word.isPunctuation && word.wordId) {
      const isBlankWord = word.isBlank;

      // Only allow click if:
      // - It's not the blank word, OR
      // - It IS the blank word AND the question has been answered
      if (!isBlankWord || (isBlankWord && isAnswered)) {
        onWordClick({
          text: word.text === "___" ? sentence.answer : word.text,
          pinyin: word.pinyin,
          meaning: word.meaning,
          wordId: word.wordId
        });
      }
    }
  };

  // Process words for display (convert number array to objects with text)
  const displayWords = sentence.words.map(value => {
    // Handle punctuation (0-9)
    if (value >= 0 && value <= 9) {
      const punctuationMap = { 0: "。", 1: "，", 2: "？", 3: "！" };
      return {
        text: punctuationMap[value] || "？",
        isPunctuation: true,
        isBlank: false
      };
    }

    // Handle blank (negative value)
    if (value < 0) {
      const wordId = Math.abs(value);
      return {
        text: "___",
        wordId: wordId,
        isBlank: true,
        isPunctuation: false
      };
    }

    // Handle regular word (positive value)
    return {
      text: sentence.processedWords?.find(w => w.wordId === value)?.text || "?",
      wordId: value,
      isBlank: false,
      isPunctuation: false
    };
  });

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
                  placeholder="  "
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