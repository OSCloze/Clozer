// src/utils/topicHelpers.js
import { chapters } from '../data';

/**
 * Get all available topics from completed chapters
 * @param {Array} completedChapters - Array of completed chapter IDs
 * @returns {Array} - Array of unique topic strings
 */
export const getAvailableTopics = (completedChapters) => {
    // Safety check: if completedChapters is undefined or not an array, return empty array
    if (!completedChapters || !Array.isArray(completedChapters)) {
        return [];
    }

    const topics = new Set();

    completedChapters.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences && Array.isArray(chapter.sentences)) {
            chapter.sentences.forEach(sentence => {
                if (sentence.topic) {
                    topics.add(sentence.topic);
                }
            });
        }
    });

    return Array.from(topics).sort();
};

/**
 * Get sentences filtered by topic and completed chapters
 * @param {string} topic - Topic to filter by (or 'all' for all topics)
 * @param {Array} completedChapters - Array of completed chapter IDs
 * @returns {Array} - Array of sentences matching the topic
 */
export const getSentencesByTopic = (topic, completedChapters) => {
    // Safety check
    if (!completedChapters || !Array.isArray(completedChapters)) {
        return [];
    }

    let sentences = [];

    completedChapters.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences && Array.isArray(chapter.sentences)) {
            if (topic === 'all') {
                sentences = [...sentences, ...chapter.sentences];
            } else {
                const filtered = chapter.sentences.filter(s => s.topic === topic);
                sentences = [...sentences, ...filtered];
            }
        }
    });

    return sentences;
};

/**
 * Get topic display name (capitalize first letter, etc.)
 * @param {string} topic 
 * @returns {string}
 */
export const getTopicDisplayName = (topic) => {
    return topic;
};