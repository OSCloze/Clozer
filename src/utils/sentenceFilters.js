// src/utils/sentenceFilters.js

// Returns sentences from specified levels (no vocabulary filtering)
export function getAvailableSentences(sentences, levelId = null) {
    if (levelId) {
        return sentences.filter(s => s.level === levelId);
    }
    return sentences;
}

// Select a random subset of sentences for a session
export function selectSessionSentences(availableSentences, count) {
    // Shuffle and take first 'count'
    const shuffled = [...availableSentences].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}