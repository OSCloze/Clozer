import React, { useState } from 'react';
import WordModal from '../words/WordModal';

export default function VocabularyLearning({
    words,
    onComplete
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedWord, setSelectedWord] = useState(null);

    const currentWord = words[currentIndex];

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 < words.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // All words reviewed, move to story
            onComplete();
        }
    };

    const handleWordClick = (word) => {
        setSelectedWord(word);
    };

    const handleCloseModal = () => {
        setSelectedWord(null);
    };

    const goToWord = (index) => {
        setCurrentIndex(index);
    };

    // Calculate grid columns based on number of words
    const getGridColumns = () => {
        if (words.length <= 5) return 5;
        if (words.length <= 8) return 4;
        if (words.length <= 12) return 6;
        return 8;
    };

    return (
        <div className="vocabulary-learning">
            <h2 className="vocabulary-title">Chapter Vocabulary</h2>
            <p className="vocabulary-subtitle">
                Learn these words before starting the story
            </p>

            <div className="vocabulary-card">
                <div className="vocabulary-word-large">
                    {currentWord.character}
                </div>

                <div className="vocabulary-details">
                    <div className="vocabulary-pinyin">{currentWord.pinyin}</div>
                    <div className="vocabulary-meaning">{currentWord.meaning}</div>
                </div>

                <div className="vocabulary-actions">
                    <button
                        className="vocabulary-nav-btn prev-btn"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                    >
                        ← Previous
                    </button>
                    <button
                        className="vocabulary-nav-btn next-btn"
                        onClick={handleNext}
                    >
                        {currentIndex + 1 < words.length ? 'Next →' : 'Start Story →'}
                    </button>
                </div>
            </div>

            {/* Character Grid - No scrolling, shows only characters */}
            <div className="character-grid-container">
                <div
                    className="character-grid"
                    style={{
                        gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`
                    }}
                >
                    {words.map((word, index) => (
                        <button
                            key={word.id}
                            className={`character-grid-item ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToWord(index)}
                        >
                            <span className="character-only">{word.character}</span>
                        </button>
                    ))}
                </div>
            </div>

            {selectedWord && (
                <WordModal
                    word={selectedWord}
                    masteryCount={0}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}