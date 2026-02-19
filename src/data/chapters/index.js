// src/data/chapters/index.js
// Automatically imports ALL chapter files from the chapters folder

// Get all chapter files (chapter1.js, chapter2.js, chapter3.js, etc.)
const chapterModules = require.context('./', false, /chapter\d+\.js$/);

// This array will hold all chapter objects
const allChapters = [];

// Import each chapter file
chapterModules.keys().forEach((filename) => {
    // Get the module
    const module = chapterModules(filename);

    // Find the export that starts with 'chapter' (chapter1, chapter2, etc.)
    const exportName = Object.keys(module).find(key => key.startsWith('chapter'));

    if (exportName) {
        const chapter = module[exportName];
        // Store chapter by its ID for easy access
        if (chapter && chapter.id) {
            allChapters[chapter.id] = chapter;
        }
    }
});

// Filter out any undefined entries and sort by ID
export const chapters = allChapters.filter(Boolean).sort((a, b) => a.id - b.id);

// Helper function to get chapter by ID
export const getChapterById = (id) => {
    return chapters.find(chapter => chapter.id === id);
};

// Helper function to get chapter words (returns just the word IDs)
export const getChapterWords = (chapterId) => {
    const chapter = getChapterById(chapterId);
    return chapter ? chapter.words : [];
};

// Helper function to get chapter sentences
export const getChapterSentences = (chapterId) => {
    const chapter = getChapterById(chapterId);
    return chapter ? chapter.sentences : [];
};

// Helper function to get chapter by level
export const getChapterByLevel = (level) => {
    return chapters.find(chapter => chapter.level === level);
};

// Helper function to get total number of chapters
export const getTotalChapters = () => {
    return chapters.length;
};

// Helper function to get chapter progress info (used by components)
export const getChapterProgress = (chapterId, completedChapters, chapterProgress) => {
    const isCompleted = completedChapters.includes(chapterId);
    const progress = chapterProgress[chapterId];
    const revealedCount = progress?.revealedSentences?.length || 0;
    const chapter = getChapterById(chapterId);
    const totalSentences = chapter?.sentences?.length || 0;

    return {
        isCompleted,
        revealedCount,
        totalSentences,
        percentage: totalSentences > 0 ? Math.round((revealedCount / totalSentences) * 100) : 0
    };
};

// Helper function to check if chapter is locked
export const isChapterLocked = (chapterId, completedChapters) => {
    if (chapterId === 1) return false;
    return !completedChapters.includes(chapterId - 1);
};