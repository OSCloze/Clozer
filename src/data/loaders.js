// src/data/loaders.js
import wordsData from './words.json';
import { processWordsArray, extractWordIds, extractContextWordIds } from '../utils/sentenceHelpers';

function importAll(r) {
    return r.keys().map(r);
}

const levelFiles = require.context('./levels', false, /\.json$/);
const levelModules = importAll(levelFiles).map(module => module);

export const loadSentences = async () => {
    let allSentences = [];

    levelModules.forEach(levelData => {
        const sentences = levelData.sentences.map(s => {
            // Find the target word ID from the negative value
            const blankValue = s.words.find(v => v < 0);
            const targetWordId = blankValue ? Math.abs(blankValue) : null;

            // CRITICAL: Process the words array to convert numbers into rich objects
            const processedWords = processWordsArray(s.words, targetWordId, wordsData);

            // Extract word IDs for filtering (optional but useful)
            const wordIds = extractWordIds(s.words);
            const contextWordIds = extractContextWordIds(s.words, targetWordId);

            return {
                id: s.id,
                text: s.text,
                nativeSentence: s.native,
                targetWordId: targetWordId,
                wordIds: wordIds,
                contextWordIds: contextWordIds,
                level: levelData.level,
                answer: s.answer,
                explanation: s.explain,
                words: processedWords,  // ✅ This now contains objects with .text, .isPunctuation, etc.
            };
        });

        allSentences = [...allSentences, ...sentences];
    });

    // Optional: sort by ID
    return allSentences.sort((a, b) => a.id - b.id);
};

export const loadLevels = async () => {
    return levelModules
        .map(level => {
            const targetWordIds = [...new Set(
                level.sentences.map(s => {
                    const blank = s.words.find(v => v < 0);
                    return blank ? Math.abs(blank) : null;
                }).filter(Boolean)
            )];

            return {
                id: level.level,
                name: level.name,
                description: level.desc,
                icon: level.icon || '📚',
                keywordIds: targetWordIds,
                sentenceCount: level.sentences.length,
                wordCount: targetWordIds.length
            };
        })
        .sort((a, b) => a.id - b.id);
};

export const loadWords = async () => wordsData;