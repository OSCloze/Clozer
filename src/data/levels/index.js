// src/data/levels/index.js
// Automatically imports ALL level files from the words folder

// Get all word level files (level0.js, level1.js, level2.js, etc.)
const wordModules = require.context('../words', false, /level\d+\.js$/);

// This array will hold all word arrays, sorted by level
const allLevelWords = [];

// Import each word level file
wordModules.keys().forEach((filename) => {
    try {
        const module = wordModules(filename);

        // Find the export that ends with 'Words' (level0Words, level1Words, etc.)
        const exportName = Object.keys(module).find(key => key.endsWith('Words'));

        if (exportName) {
            const words = module[exportName];
            // Get level number from filename (level0.js -> 0, level1.js -> 1)
            const match = filename.match(/level(\d+)\.js$/);
            if (match) {
                const levelNum = parseInt(match[1]);
                allLevelWords[levelNum] = words;
                console.log(`✅ Loaded level ${levelNum} with ${words.length} words`);
            }
        }
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
    }
});

// Safely build words object
let wordsObject = {};
try {
    // Filter out any undefined entries and flatten
    const validWords = allLevelWords.filter(Boolean).flat();

    // Build object manually instead of using Object.fromEntries
    validWords.forEach(word => {
        if (word && word.id) {
            wordsObject[word.id] = word;
        }
    });

    console.log(`✅ Built words object with ${Object.keys(wordsObject).length} words`);
} catch (error) {
    console.error('Error building words object:', error);
}

export const words = wordsObject;

// Safely build wordsByLevel
const wordsByLevelObject = {};
try {
    allLevelWords.forEach((levelWords, index) => {
        wordsByLevelObject[index] = levelWords || [];
    });
    console.log(`✅ Built wordsByLevel for ${Object.keys(wordsByLevelObject).length} levels`);
} catch (error) {
    console.error('Error building wordsByLevel:', error);
}

export const wordsByLevel = wordsByLevelObject;

// Level metadata
const levelMetadata = [
    {
        id: 0,
        name: "Foundation",
        description: "20 essential grammatical words and particles",
        isStarter: true,
        isPermanent: true
    },
    {
        id: 1,
        name: "Chapter 1: Family & Home",
        description: "Learn to talk about your home and family",
        isStarter: false,
        isPermanent: false
    },
    // Add to levelMetadata array after the existing entries
    {
        id: 2,
        name: "Chapter 2",
        description: "Chapter 2 description",
        isStarter: false,
        isPermanent: false
    },
    {
        id: 3,
        name: "Chapter 3",
        description: "Chapter 3 description",
        isStarter: false,
        isPermanent: false
    }
];

// Build levels array
export const levels = levelMetadata.map(meta => ({
    ...meta,
    wordIds: (wordsByLevelObject[meta.id] || []).map(word => word.id)
}));

// Helper functions
export const getWordsForLevel = (level) => {
    return wordsByLevelObject[level] || [];
};

export const getWordById = (id) => {
    return wordsObject[id] || null;
};

export const isStarterLevel = (levelId) => {
    const level = levels.find(l => l.id === levelId);
    return level ? level.isStarter : false;
};

export const isPermanentLevel = (levelId) => {
    const level = levels.find(l => l.id === levelId);
    return level ? level.isPermanent : false;
};

console.log('✅ levels/index.js loaded successfully');