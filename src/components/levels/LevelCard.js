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
    completedLevels,
    onSelectLevel,
    onWordClick
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    // Check if this level has been completed
    const isCompleted = completedLevels?.has(level.id) || false;

    // Get all sentences for this level (with safety check)
    const levelSentences = sentences?.filter(s => s.level === level.id) || [];
    const totalSentences = levelSentences.length;

    // Get keyword objects for display
    const levelWords = level.keywordIds || [];
    const keywords = levelWords
        .map(id => words?.find(w => w.id === id))
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

    // Helper function to get pinyin for a word ID from processedWords
    const getWordPinyin = (wordId, processedWords) => {
        const word = processedWords?.find(w => w.wordId === wordId);
        return word?.pinyin || '';
    };

    return (
        <div className={`level-item ${isCompleted ? 'completed' : ''}`}>
            <div className="level-header" onClick={toggleExpand}>
                <span className="level-expand-icon">
                    {isExpanded ? '▼' : '▶'}
                </span>
                <span className="level-name">
                    {level.name}
                </span>
                <span className="level-stats">
                    {isCompleted ? '✓ Completed' : `${totalSentences} sentences`}
                </span>
            </div>

            {isExpanded && (
                <div className="level-content">
                    <p className="level-description">{level.description}</p>


                    {/* Sentences list */}
                    <div className="sentences-section">
                        <h4 className="sentences-title">Sentences in this Level:</h4>
                        <div className="sentences-list">
                            {levelSentences.map((sentence, index) => {
                                // Use processedWords for display
                                const displayWords = sentence.processedWords || [];

                                return (
                                    <div key={sentence.id} className="sentence-item">
                                        <div className="sentence-number">{index + 1}.</div>
                                        <div className="sentence-content">
                                            <div className="sentence-hanzi">
                                                {displayWords.map((word, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`sentence-word ${word.isPunctuation ? 'punctuation' : ''}`}
                                                    >
                                                        {word.text}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="sentence-pinyin">
                                                {displayWords.map((word, idx) => (
                                                    <span key={idx} className="sentence-pinyin-word">
                                                        {word.isPunctuation ? '' : word.pinyin}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="sentence-english">
                                                {sentence.nativeSentence}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}