import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { chapters, getWordById, getWordsForLevel } from '../data';
import WordGrid from '../components/words/WordGrid';
import WordModal from '../components/words/WordModal';

export default function ChaptersPage() {
    const {
        wordMastery,
        expandedLevels,
        toggleLevel,
        setCurrentPage,
        startChapter,
        completedChapters,
        setReplayChapterId
    } = useApp();

    const [selectedWord, setSelectedWord] = useState(null);

    const foundationWords = getWordsForLevel(0);

    const handleWordClick = (word) => {
        setSelectedWord(word);
    };

    const handleCloseModal = () => {
        setSelectedWord(null);
    };

    const handlePlayStory = (chapterId) => {
        startChapter(chapterId);
        setCurrentPage('play');
    };

    const handleReplayChapter = (chapterId) => {
        startChapter(chapterId);
        setReplayChapterId(chapterId);
        setCurrentPage('play');
    };

    const isChapterLocked = (chapterId) => {
        if (chapterId === 1) return false;
        return !completedChapters.includes(chapterId - 1);
    };

    const isChapterCompleted = (chapterId) => {
        return completedChapters.includes(chapterId);
    };

    const getWordObjectsFromIds = (wordIds) => {
        return wordIds.map(id => getWordById(id)).filter(Boolean);
    };

    return (
        <section className="view is-active" data-view="chapters">
            <header className="header">
                <h1>Chapters</h1>
                <p className="header-desc">
                    Learn words by chapter. Expand each section to see vocabulary.
                </p>
            </header>

            <div className="chapters-scrollable">
                <ul className="chapter-list">
                    {/* Foundation Section */}
                    <li className="chapter-item foundation-item">
                        <div
                            className={`chapter-header ${expandedLevels['foundation'] ? 'expanded' : ''}`}
                            onClick={() => toggleLevel('foundation')}
                        >
                            <span className="chapter-expand-icon">
                                {expandedLevels['foundation'] ? '▼' : '▶'}
                            </span>
                            <span className="chapter-title foundation-title">
                                Foundation
                            </span>
                            <span className="chapter-stats">
                                {foundationWords.length} words
                            </span>
                        </div>

                        {expandedLevels['foundation'] && (
                            <div className="chapter-content">
                                <p className="chapter-description">
                                    20 essential grammatical words and particles
                                </p>
                                <WordGrid
                                    words={foundationWords}
                                    wordMastery={wordMastery}
                                    selectedWordId={selectedWord?.id}
                                    onWordClick={handleWordClick}
                                    isFoundation={true}
                                />
                            </div>
                        )}
                    </li>

                    {/* Chapters */}
                    {chapters.map((chapter) => {
                        const chapterWords = getWordObjectsFromIds(chapter.words || []);
                        const isExpanded = expandedLevels[`chapter-${chapter.id}`] || false;
                        const isLocked = isChapterLocked(chapter.id);
                        const isCompleted = isChapterCompleted(chapter.id);

                        return (
                            <li key={chapter.id} className="chapter-item">
                                <div
                                    className={`chapter-header ${isLocked ? 'locked' : ''} ${isExpanded ? 'expanded' : ''}`}
                                    onClick={() => !isLocked && toggleLevel(`chapter-${chapter.id}`)}
                                >
                                    <span className="chapter-expand-icon">
                                        {isExpanded ? '▼' : '▶'}
                                    </span>
                                    <span className={`chapter-title ${isCompleted ? 'completed-title' : ''}`}>
                                        Chapter {chapter.id}: {chapter.title}
                                    </span>
                                    <span className="chapter-stats">
                                        {chapterWords.length} words
                                    </span>
                                </div>

                                {isExpanded && !isLocked && (
                                    <div className="chapter-content">
                                        {isCompleted && (
                                            <div className="chapter-replay-container">
                                                <button
                                                    className="chapter-replay-pill"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleReplayChapter(chapter.id);
                                                    }}
                                                    title="Replay chapter"
                                                >
                                                    ↻ Play Again
                                                </button>
                                            </div>
                                        )}
                                        <p className="chapter-description">{chapter.description}</p>
                                        <WordGrid
                                            words={chapterWords}
                                            wordMastery={wordMastery}
                                            selectedWordId={selectedWord?.id}
                                            onWordClick={handleWordClick}
                                            isFoundation={false}
                                        />
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {selectedWord && (
                <WordModal
                    word={selectedWord}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
}