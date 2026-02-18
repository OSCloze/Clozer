// src/data/levels/index.js
// Automatically builds levels from word files

import { wordsByLevel } from '../words';

// Level metadata (you still need to define this once)
const levelMetadata = [
    {
        id: 1,
        name: "Level 1: Foundation",
        description: "19 essential words for building basic sentences",
        isStarter: true,
        isPermanent: true
    },
    {
        id: 2,
        name: "Level 2",
        description: "11 common words for daily conversation",
        isStarter: false,
        isPermanent: false
    },
    {
        id: 3,
        name: "Level 3",
        description: "10 essential adjectives, pronouns, and verbs",
        isStarter: false,
        isPermanent: false
    },
    {
        id: 4,
        name: "Level 4",
        description: "10 everyday words including time and numbers",
        isStarter: false,
        isPermanent: false
    },
    {
        id: 5,
        name: "Level 5",
        description: "11 descriptive and utility words",
        isStarter: false,
        isPermanent: false
    },
    {
        id: 6,
        name: "Level 6",
        description: "10 travel and transportation words",
        isStarter: false,
        isPermanent: false
    },
    {
        id: 7,
        name: "Level 7",
        description: "10 daily routine and entertainment words",
        isStarter: false,
        isPermanent: false
    }

    // Add new level metadata here when you create new levels
];

// Build levels dynamically
export const levels = levelMetadata.map(meta => ({
    ...meta,
    wordIds: wordsByLevel[meta.id]?.map(word => word.id) || []
}));

// Helper functions
export const getWordsForLevel = (levelId) => {
    return wordsByLevel[levelId] || [];
};

export const isStarterLevel = (levelId) => {
    const level = levels.find(l => l.id === levelId);
    return level ? level.isStarter : false;
};

export const isPermanentLevel = (levelId) => {
    const level = levels.find(l => l.id === levelId);
    return level ? level.isPermanent : false;
};