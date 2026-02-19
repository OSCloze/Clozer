// src/utils/sentenceHelpers.js
import { chapters } from '../data';

/**
 * Get sentences for a specific level
 * @param {number} level 
 * @returns {Array} - Array of sentences
 */
export const getSentencesForLevel = (level) => {
  if (level === 0) {
    // Foundation level - no sentences (only words)
    return [];
  }

  // Find the chapter for this level
  const chapter = chapters.find(c => c.id === level);
  return chapter ? chapter.sentences : [];
};

export const selectSentencesByMastery = (sentences, sessionSize, wordMastery) => {
  if (!sentences || sentences.length === 0) return [];

  // Deduplicate by sentence id to avoid any chance of duplicates
  const uniqueSentences = [];
  const seenIds = new Set();
  sentences.forEach(s => {
    if (!seenIds.has(s.id)) {
      seenIds.add(s.id);
      uniqueSentences.push(s);
    }
  });

  // If after deduplication we have fewer sentences than requested, adjust session size
  const actualSize = Math.min(sessionSize, uniqueSentences.length);

  let available = [...uniqueSentences];
  let selected = [];

  const getWeight = (sentence) => {
    const mastery = wordMastery[sentence.targetWordId] || 0;
    // Lower mastery -> higher weight (inverse relationship)
    return 1 / (mastery + 1);
  };

  for (let i = 0; i < actualSize; i++) {
    if (available.length === 0) break;

    // Calculate total weight of remaining sentences
    const totalWeight = available.reduce((sum, s) => sum + getWeight(s), 0);
    if (totalWeight === 0) break;

    // Weighted random selection
    let rand = Math.random() * totalWeight;
    let index = 0;
    let cumulativeWeight = 0;

    for (let j = 0; j < available.length; j++) {
      cumulativeWeight += getWeight(available[j]);
      if (rand <= cumulativeWeight) {
        index = j;
        break;
      }
    }

    // Safety fallback
    if (index >= available.length) index = available.length - 1;

    selected.push(available[index]);
    available.splice(index, 1); // Remove selected sentence to prevent reuse
  }

  return selected;
};

/**
 * Select sentences for a practice session
 * @param {Array} sentences 
 * @param {number} sessionSize 
 * @param {Array} answeredSentences 
 * @returns {Array}
 */
export const selectSessionSentences = (sentences, sessionSize, answeredSentences) => {
  if (!sentences || sentences.length === 0) return [];

  const answered = answeredSentences || [];

  // Separate revealed and unrevealed sentences
  const revealed = sentences.filter(s => answered.includes(s.id));
  const unrevealed = sentences.filter(s => !answered.includes(s.id));

  let selected = [];

  // Prioritize unrevealed (70%)
  if (unrevealed.length > 0) {
    const targetUnrevealed = Math.ceil(sessionSize * 0.7);
    const unrevealedCount = Math.min(
      Math.max(targetUnrevealed, sessionSize - revealed.length),
      unrevealed.length
    );

    const unrevealedSelected = [...unrevealed]
      .sort(() => Math.random() - 0.5)
      .slice(0, unrevealedCount);
    selected.push(...unrevealedSelected);
  }

  // Fill remaining with revealed
  if (selected.length < sessionSize && revealed.length > 0) {
    const remaining = sessionSize - selected.length;
    const revealedSelected = [...revealed]
      .sort(() => Math.random() - 0.5)
      .slice(0, remaining);
    selected.push(...revealedSelected);
  }

  // If still need more, take any remaining unrevealed
  if (selected.length < sessionSize && unrevealed.length > selected.length) {
    const remaining = sessionSize - selected.length;
    const moreUnrevealed = [...unrevealed]
      .sort(() => Math.random() - 0.5)
      .slice(0, remaining);
    selected.push(...moreUnrevealed);
  }

  return selected.sort(() => Math.random() - 0.5);
};

/**
 * Separate sentences into revealed and unrevealed
 * @param {Array} sentences 
 * @param {Array} answeredSentences 
 * @returns {Object} - { revealed, unrevealed }
 */
export const separateByRevealed = (sentences, answeredSentences) => {
  if (!sentences || !Array.isArray(sentences)) {
    return { revealed: [], unrevealed: [] };
  }

  const answered = answeredSentences || [];

  const revealed = sentences.filter(s => answered.includes(s.id));
  const unrevealed = sentences.filter(s => !answered.includes(s.id));
  return { revealed, unrevealed };
};