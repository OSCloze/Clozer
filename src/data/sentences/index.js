// src/data/sentences/index.js
// Automatically imports ALL level files from the sentences folder

// Get all level files (level1.js, level2.js, level3.js, etc.)
const levelModules = require.context('./', false, /level\d+\.js$/);

// This array will hold all sentence arrays
const allLevelSentences = [];

// Loop through each level file and import it
levelModules.keys().forEach((filename) => {
    // Get the module
    const module = levelModules(filename);

    // The export name might be level1Sentences, level2Sentences, etc.
    const exportName = Object.keys(module).find(key => key.endsWith('Sentences'));

    if (exportName) {
        allLevelSentences.push(module[exportName]);
    }
});

// Sort by level ID
allLevelSentences.sort((a, b) => {
    const levelA = Math.floor(a[0]?.id / 100) || 1;
    const levelB = Math.floor(b[0]?.id / 100) || 1;
    return levelA - levelB;
});

// Combine all sentences dynamically
export const sentences = allLevelSentences.flat();

// Build sentencesByLevel dynamically
export const sentencesByLevel = Object.fromEntries(
    allLevelSentences.map((levelSentences, index) => [index + 1, levelSentences])
);

// Helper functions
export const getSentencesForLevel = (level) => {
    return sentencesByLevel[level] || [];
};

export const getSentencesForWord = (wordId) => {
    return sentences.filter(s => s.targetWordId === wordId);
};

export const getSentenceById = (id) => {
    return sentences.find(s => s.id === id) || null;
};