// src/utils/sentenceRandomizer.js

/**
 * Takes a sentence and randomly selects a target position from its candidates
 * Returns a new sentence object with the blank applied at that specific position
 */
export function randomizeTarget(sentence, wordsData) {
    if (!sentence.candidates || sentence.candidates.length === 0) {
        return sentence;
    }

    // Randomly select a candidate (which includes position and wordId)
    const randomIndex = Math.floor(Math.random() * sentence.candidates.length);
    const target = sentence.candidates[randomIndex];

    // Find the word object for the target
    const targetWord = wordsData.find(w => w.id === target.wordId);

    // Create new words array with the blank at the specific position
    const wordsWithBlank = sentence.words.map((value, index) => {
        if (index === target.position) {
            // This is the target position - make it negative to indicate blank
            return -Math.abs(value);
        }
        return value;
    });

    // Create processed words array for display (with the blank)
    // We need to reconstruct this from wordsData to ensure pinyin and meaning are available
    const processedWords = wordsWithBlank.map(value => {
        // Handle punctuation (0-9)
        if (value >= 0 && value <= 9) {
            const punctuationMap = { 0: "。", 1: "，", 2: "？", 3: "！", 4: "、" };
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

        // Handle regular word (positive value)
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

    // Find the answer text (the word itself)
    const answer = targetWord?.word || '';

    return {
        ...sentence,
        targetWordId: target.wordId,
        targetPosition: target.position,
        answer,
        words: wordsWithBlank,
        processedWords: processedWords // This now contains all the rich data needed for translations
    };
}

/**
 * Process a batch of sentences, randomizing targets for each
 */
export function randomizeSessionSentences(sentences, wordsData) {
    return sentences.map(s => randomizeTarget(s, wordsData));
}