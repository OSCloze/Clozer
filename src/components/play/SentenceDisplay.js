// src/components/play/SentenceDisplay.js
import React from 'react';
import { words } from '../../data/words';

export default function SentenceDisplay({
  sentence,
  userAnswer,
  setUserAnswer,
  isAnswered,
  feedback,
  onCheck,
  onWordClick
}) {

  const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === 'Enter' && userAnswer.trim()) {
      e.preventDefault();
      onCheck();
    }
  };

  // Find the word data for the answer (if answered)
  const getAnswerWordData = () => {
    const answerWordId = sentence.targetWordId;
    return words[answerWordId];
  };

  return (
    <>
      {/* Clickable words with integrated blank */}
      <div className="sentence-clickable-container">
        {sentence.words && sentence.words.map((word, idx) => {
          // Check if this word is the one that should be blank
          const isBlankWord = word.wordId === sentence.blankWordId;

          return (
            <span
              key={idx}
              className={`clickable-word ${word.isPunctuation ? 'punctuation' : ''} ${isBlankWord ? 'answer-word' : ''}`}
              onClick={() => {
                // Allow clicking on any non-punctuation word, including the answer word after it's answered
                if (!word.isPunctuation && word.wordId) {
                  // Find the word data to show in translation box
                  const wordData = words[word.wordId];
                  if (wordData) {
                    onWordClick({
                      text: wordData.character,
                      pinyin: wordData.pinyin,
                      meaning: wordData.meaning
                    });
                  }
                }
              }}
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
                    width: `${Math.max(sentence.answer.length * 1.5, 2)}em`,
                    minWidth: '2em'
                  }}
                />
              ) : isBlankWord && isAnswered ? (
                // Make the answer word clickable by wrapping it in a span with the clickable-word class
                <span className={`${feedback.includes('Correct') ? 'answer-correct' : 'answer-incorrect'} clickable-answer`}>
                  {sentence.answer}
                </span>
              ) : (
                word.text
              )}
            </span>
          );
        })}
      </div>

      {/* User's incorrect answer display */}
      {isAnswered && !feedback.includes('Correct') && userAnswer && (
        <div className="user-answer-display">
          <span className="user-answer-label">You answered: </span>
          <span className="user-answer-value">{userAnswer}</span>
        </div>
      )}
    </>
  );
}