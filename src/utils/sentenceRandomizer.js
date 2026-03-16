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

    // Find the answer text (the word itself)
    const answer = targetWord?.word || '';

    return {
        ...sentence,
        targetWordId: target.wordId,
        targetPosition: target.position,
        answer,
        words: wordsWithBlank
    };
}

/**
 * Process a batch of sentences, randomizing targets for each
 */
export function randomizeSessionSentences(sentences, wordsData) {
    return sentences.map(s => randomizeTarget(s, wordsData));
}