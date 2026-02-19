// src/utils/levelHelpers.js

/**
 * Get array of completed chapter IDs
 * @param {Array} completedChapters 
 * @returns {Array}
 */
export const getCompletedLevels = (completedChapters) => {
    return completedChapters || [];
};

/**
 * Get array of available level IDs for practice (only completed chapters)
 * @param {Array} completedChapters 
 * @returns {Array}
 */
export const getAvailablePracticeLevels = (completedChapters) => {
    return completedChapters || [];
};

/**
 * Check if a level is unlocked based on completed previous levels
 * @param {number} levelId 
 * @param {Array} completedLevels 
 * @returns {boolean}
 */
export const isLevelUnlocked = (levelId, completedLevels) => {
    const completed = completedLevels || [];
    if (levelId === 0) return true;
    if (levelId === 1) return true;
    return completed.includes(levelId - 1);
};

/**
 * Get array of available level IDs for story mode (unlocked)
 * @param {Array} completedLevels 
 * @returns {Array}
 */
export const getAvailableStoryLevels = (completedLevels) => {
    const completed = completedLevels || [];
    const available = [0, 1];
    completed.forEach(levelId => {
        if (levelId > 1 && !available.includes(levelId)) {
            available.push(levelId);
        }
    });
    const maxCompleted = Math.max(...completed, 1);
    if (maxCompleted >= 1 && !available.includes(maxCompleted + 1)) {
        available.push(maxCompleted + 1);
    }
    return available.sort((a, b) => a - b);
};

/**
 * Get level name for display
 * @param {number} levelId 
 * @param {Array} chapters 
 * @returns {string}
 */
export const getLevelName = (levelId, chapters) => {
    if (levelId === 0) return "Foundation";
    const chapter = chapters.find(c => c.id === levelId);
    return chapter ? `Chapter ${levelId}: ${chapter.title}` : `Level ${levelId}`;
};