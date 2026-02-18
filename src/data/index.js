// src/data/index.js

// Import everything
import { words, wordsByLevel, getWordsForLevel, getWordById } from './words/index';
import { sentences, sentencesByLevel, getSentencesForLevel, getSentencesForWord, getSentenceById } from './sentences/index';
import { levels, getWordsForLevel as getLevelWords } from './levels';

// Export everything
export {
    words,                       // This was missing!
    wordsByLevel,
    getWordsForLevel,
    getWordById,
    sentences,
    sentencesByLevel,
    getSentencesForLevel,
    getSentencesForWord,
    getSentenceById,
    levels,
    getLevelWords
};