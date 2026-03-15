// src/utils/sentenceHelpers.js
// Helper functions for processing the optimized sentence format

// Punctuation mapping (0 = period, 1 = comma, 2 = question mark, etc.)
const punctuationMap = {
    0: "。",
    1: "，",
    2: "？",
    3: "！",
    4: "、",
    5: "…",
    6: "—"
};

export function processWordsArray(wordsArray, targetWordId, wordsData) {
    const targetId = Math.abs(targetWordId); // In case we need to identify target

    return wordsArray.map(value => {
        // Handle punctuation (0-9 are punctuation codes)
        if (value >= 0 && value <= 9) {
            return {
                text: punctuationMap[value] || "？",
                isPunctuation: true,
                isBlank: false,
                wordId: null
            };
        }

        // Handle blank (negative value)
        if (value < 0) {
            const wordId = Math.abs(value);
            const word = wordsData.find(w => w.id === wordId);
            return {
                text: "___",
                wordId: wordId,
                isBlank: true,
                isPunctuation: false,
                pinyin: word?.pinyin || "",
                meaning: word?.meaning || ""
            };
        }

        // Handle regular word (positive value greater than 9)
        const word = wordsData.find(w => w.id === value);
        return {
            text: word?.word || "?",
            wordId: value,
            isBlank: false,
            isPunctuation: false,
            pinyin: word?.pinyin || "",
            meaning: word?.meaning || ""
        };
    });
}

export function extractWordIds(wordsArray) {
    return wordsArray
        .filter(val => Math.abs(val) > 9) // Filter out punctuation (0-9)
        .map(val => Math.abs(val));
}

export function extractContextWordIds(wordsArray, targetWordId) {
    return wordsArray
        .filter(val => Math.abs(val) > 9 && Math.abs(val) !== targetWordId)
        .map(val => Math.abs(val));
}