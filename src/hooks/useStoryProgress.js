import { useState, useEffect } from 'react';
import { chapters } from '../data';

export function useStoryProgress() {
    const [currentChapter, setCurrentChapter] = useState(() => {
        const saved = localStorage.getItem('currentChapter');
        return saved ? parseInt(saved) : 1;
    });

    const [completedChapters, setCompletedChapters] = useState(() => {
        const saved = localStorage.getItem('completedChapters');
        return saved ? JSON.parse(saved) : [];
    });

    const [chapterProgress, setChapterProgress] = useState(() => {
        const saved = localStorage.getItem('chapterProgress');
        if (saved) return JSON.parse(saved);

        const initial = {};
        chapters.forEach(chapter => {
            initial[chapter.id] = {
                completed: false,
                revealedSentences: [],
                currentSentenceIndex: 0
            };
        });
        return initial;
    });

    const [replayChapterId, setReplayChapterId] = useState(null);

    useEffect(() => {
        localStorage.setItem('currentChapter', currentChapter.toString());
    }, [currentChapter]);

    useEffect(() => {
        localStorage.setItem('completedChapters', JSON.stringify(completedChapters));
    }, [completedChapters]);

    useEffect(() => {
        localStorage.setItem('chapterProgress', JSON.stringify(chapterProgress));
    }, [chapterProgress]);

    const startChapter = (chapterId) => {
        setCurrentChapter(chapterId);
        // Reset progress for this chapter when starting
        setChapterProgress(prev => ({
            ...prev,
            [chapterId]: {
                completed: false,
                revealedSentences: [],
                currentSentenceIndex: 0
            }
        }));
    };
    const markSentenceRevealed = (chapterId, sentenceId) => {
        setChapterProgress(prev => {
            const chapter = prev[chapterId];
            if (!chapter) return prev;

            if (!chapter.revealedSentences.includes(sentenceId)) {
                const updatedRevealed = [...chapter.revealedSentences, sentenceId];
                const chapterSentences = chapters.find(c => c.id === chapterId)?.sentences || [];
                const isCompleted = updatedRevealed.length === chapterSentences.length;

                if (isCompleted && !completedChapters.includes(chapterId)) {
                    setCompletedChapters(prev => [...prev, chapterId]);
                }

                return {
                    ...prev,
                    [chapterId]: {
                        ...chapter,
                        revealedSentences: updatedRevealed,
                        completed: isCompleted,
                        // Don't update currentSentenceIndex - we always start from beginning
                    }
                };
            }
            return prev;
        });
    };

    // Replace the existing getCurrentSentence function:
    const getCurrentSentence = (chapterId) => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (!chapter) return null;

        // Always return the first sentence, regardless of progress
        return chapter.sentences[0];
    };

    const moveToNextSentence = (chapterId) => {
        setChapterProgress(prev => {
            const chapter = prev[chapterId];
            if (!chapter) return prev;

            const chapterSentences = chapters.find(c => c.id === chapterId)?.sentences || [];
            const nextIndex = chapter.currentSentenceIndex + 1;

            if (nextIndex >= chapterSentences.length) return prev;

            return {
                ...prev,
                [chapterId]: {
                    ...chapter,
                    currentSentenceIndex: nextIndex
                }
            };
        });
    };

    const isChapterCompleted = (chapterId) => {
        return completedChapters.includes(chapterId);
    };

    const getChapterProgress = (chapterId) => {
        return chapterProgress[chapterId] || {
            revealedSentences: [],
            completed: false,
            currentSentenceIndex: 0
        };
    };

    const getChapterStats = (chapterId) => {
        const chapter = chapters.find(c => c.id === chapterId);
        const progress = chapterProgress[chapterId];
        const revealedCount = progress?.revealedSentences?.length || 0;
        const totalSentences = chapter?.sentences?.length || 0;

        return {
            revealedCount,
            totalSentences,
            percentage: totalSentences > 0 ? Math.round((revealedCount / totalSentences) * 100) : 0,
            isCompleted: completedChapters.includes(chapterId)
        };
    };

    const resetStoryProgress = () => {
        setCurrentChapter(1);
        setCompletedChapters([]);
        const initial = {};
        chapters.forEach(chapter => {
            initial[chapter.id] = {
                completed: false,
                revealedSentences: [],
                currentSentenceIndex: 0
            };
        });
        setChapterProgress(initial);
    };

    const resetChapterProgress = (chapterId) => {
        setChapterProgress(prev => ({
            ...prev,
            [chapterId]: {
                completed: false,
                revealedSentences: [],
                currentSentenceIndex: 0
            }
        }));
        setCompletedChapters(prev => prev.filter(id => id !== chapterId));
    };

    return {
        currentChapter,
        completedChapters,
        chapterProgress,
        replayChapterId,
        setReplayChapterId,
        startChapter,
        markSentenceRevealed,
        getCurrentSentence,
        moveToNextSentence,
        isChapterCompleted,
        getChapterProgress,
        getChapterStats,
        resetStoryProgress,
        resetChapterProgress
    };
}