// src/data/index.js

// Export everything from levels
export {
    words,
    levels,
    wordsByLevel,
    getWordsForLevel,
    getWordById,
    isStarterLevel,
    isPermanentLevel
} from './levels';

// Export everything from chapters
export {
    chapters,
    getChapterById,
    getChapterWords,
    getChapterSentences,
    getChapterByLevel,
    getTotalChapters,
    getChapterProgress,
    isChapterLocked
} from './chapters';