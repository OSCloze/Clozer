// src/data/words/index.js
// Automatically imports ALL level files from the words folder

// Get all level files (level1.js, level2.js, level3.js, etc.)
const levelModules = require.context('./', false, /level\d+\.js$/);

// This array will hold all word arrays
const allLevelWords = [];

// Loop through each level file and import it
levelModules.keys().forEach((filename) => {
    // Get the module
    const module = levelModules(filename);

    // The export name might be level1Words, level2Words, etc.
    // We need to find the export that ends with 'Words'
    const exportName = Object.keys(module).find(key => key.endsWith('Words'));

    if (exportName) {
        allLevelWords.push(module[exportName]);
    }
});

// Sort by level ID (ensures level1 comes first, then level2, etc.)
allLevelWords.sort((a, b) => {
    // Get level number from the first word's ID
    const levelA = Math.floor(a[0]?.id / 100) || 1;
    const levelB = Math.floor(b[0]?.id / 100) || 1;
    return levelA - levelB;
});

// Build words object dynamically
export const words = Object.fromEntries(
    allLevelWords.flat().map(word => [word.id, word])
);

// Build wordsByLevel dynamically
export const wordsByLevel = Object.fromEntries(
    allLevelWords.map((levelWords, index) => [index + 1, levelWords])
);

// Helper functions
export const getWordsForLevel = (level) => {
    return wordsByLevel[level] || [];
};

export const getWordById = (id) => {
    return words[id] || null;
};