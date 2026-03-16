// src/pages/LevelsPage.js
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import LevelCard from '../components/levels/LevelCard';
import WordModal from '../components/words/WordModal';

export default function LevelsPage() {
    const {
        levels,
        words,
        learnedWords,
        wordMastery,
        sentences,  // Make sure this is included
        completedLevels,
        setSelectedLevel
    } = useApp();

    const [selectedWordId, setSelectedWordId] = useState(null);

    const handleSelectLevel = (levelId) => {
        setSelectedLevel(levelId);
    };

    const handleWordClick = (word) => {
        setSelectedWordId(word.id);
    };

    const handleCloseModal = () => {
        setSelectedWordId(null);
    };

    return (
        <section className="view is-active" data-view="levels">
            <header className="header">
                <h1>Levels</h1>
                <p className="header-desc">Explore sentences</p>
            </header>

            <div className="levels-container">
                {levels.map(level => (
                    <LevelCard
                        key={level.id}
                        level={level}
                        words={words}
                        sentences={sentences}  // Add this prop
                        learnedWords={learnedWords}
                        wordMastery={wordMastery}
                        completedLevels={completedLevels}  // Add this prop
                        onSelectLevel={handleSelectLevel}
                        onWordClick={handleWordClick}
                    />
                ))}
            </div>

            {selectedWordId && (
                <WordModal
                    wordId={selectedWordId}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
}