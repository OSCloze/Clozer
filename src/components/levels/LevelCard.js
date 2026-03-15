// src/components/levels/LevelCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordCard from '../words/WordCard';

export default function LevelCard({
    level,
    words,
    learnedWords,
    wordMastery,
    sentences,
    completedLevels, // Set of level IDs that have been completed with a perfect session
    onSelectLevel,
    onWordClick
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    // Check if this level has been completed (all sentences correct in one session)
    const isCompleted = completedLevels?.has(level.id) || false;

    // Get all sentences for this level
    const levelSentences = sentences.filter(s => s.level === level.id);
    const totalSentences = levelSentences.length;

    // Get keyword objects for display
    const levelWords = level.keywordIds || [];
    const keywords = levelWords
        .map(id => words.find(w => w.id === id))
        .filter(Boolean);

    const handlePractice = () => {
        onSelectLevel(level.id);
        navigate('/play');
    };

    const toggleExpand = (e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    const handleWordClick = (word) => {
        if (onWordClick) {
            onWordClick(word);
        }
    };

    return (
        <div className={`level-item ${isCompleted ? 'completed' : ''}`}>
            <div className="level-header" onClick={toggleExpand}>
                <span className="level-expand-icon">
                    {isExpanded ? '▼' : '▶'}
                </span>
                <span className="level-name">
                    Level {level.id}: {level.name}
                    {level.icon && <span className="level-icon">{level.icon}</span>}
                </span>
                <span className="level-stats">
                    {isCompleted ? '✓ Completed' : `${totalSentences} sentences`}
                </span>
            </div>

            {isExpanded && (
                <div className="level-content">
                    <p className="level-description">{level.description}</p>

                    {/* Keywords grid using WordCard component */}
                    <div className="keywords-section">
                        <h4 className="keywords-title">Key Words in this Level:</h4>
                        <div className="word-grid">
                            {keywords.map(word => {
                                const wordWithCharacter = {
                                    ...word,
                                    character: word.word
                                };

                                return (
                                    <WordCard
                                        key={word.id}
                                        word={wordWithCharacter}
                                        masteryCount={wordMastery[word.id] || 0}
                                        isSelected={false}
                                        onClick={() => handleWordClick(wordWithCharacter)}
                                        isFoundation={level.id === 1}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Practice button */}
                    <button
                        className={`btn-secondary level-practice-btn ${isCompleted ? 'completed' : ''}`}
                        onClick={handlePractice}
                    >
                        {isCompleted ? 'Practice Again' : 'Start Level'}
                    </button>
                </div>
            )}
        </div>
    );
}