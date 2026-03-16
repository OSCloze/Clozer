// src/data/loaders.js
import wordsData from './words.json';
import { processWordsArray, extractWordIds } from '../utils/sentenceHelpers';

function importAll(r) {
    return r.keys().map(r);
}

const levelFiles = require.context('./levels', false, /\.json$/);
const levelModules = importAll(levelFiles).map(module => module);

export const loadSentences = async () => {
    let allSentences = [];

    levelModules.forEach(levelData => {
        const sentences = levelData.sentences.map(s => {
            // Extract all word IDs (positive values only, no blanks yet)
            const wordIds = extractWordIds(s.words);

            // If candidates not specified, use all content words (excluding punctuation) as potential targets
            // But we should exclude pronouns and common particles for better learning experience
            // For now, use all wordIds as candidates if not specified
            const candidates = s.candidates || wordIds;

            // Process words array for display purposes (when not in game mode)
            const processedWords = processWordsArray(s.words, null, wordsData);

            return {
                id: s.id,
                text: s.text,
                nativeSentence: s.native,
                level: levelData.level,
                words: s.words, // Keep original words array (no blanks)
                wordIds: wordIds,
                candidates: candidates,
                processedWords: processedWords, // For display in levels page
                explanation: s.explain
            };
        });

        allSentences = [...allSentences, ...sentences];
    });

    return allSentences.sort((a, b) => a.id - b.id);
};

export const loadLevels = async () => {
    return levelModules
        .map(level => {
            // Get unique target word IDs from sentences (using candidates if available, otherwise from words)
            const targetWordIds = [...new Set(
                level.sentences.flatMap(s => {
                    // If candidates exist, use them; otherwise extract from words
                    if (s.candidates) {
                        return s.candidates;
                    } else {
                        // Extract all content words (excluding punctuation)
                        return s.words
                            .filter(val => Math.abs(val) > 9)
                            .map(val => Math.abs(val));
                    }
                })
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