// src/data/levels.js
import { words } from './words/index';

export const levels = [
  {
    id: 1,
    name: "Level 1: Foundation",
    description: "19 essential words for building basic sentences",
    wordIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20],
    isStarter: true,
    isPermanent: true
  },
  {
    id: 2,
    name: "Level 2",
    description: "11 common words for daily conversation",
    wordIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    isStarter: false,
    isPermanent: false
  },
  {
    id: 3,
    name: "Level 3",
    description: "10 essential adjectives, pronouns, and verbs",
    wordIds: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    isStarter: false,
    isPermanent: false
  },
  {
    id: 4,
    name: "Level 4",
    description: "10 everyday words including time and numbers",
    wordIds: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    isStarter: false,
    isPermanent: false
  },
  {
    id: 5,
    name: "Level 5",
    description: "11 descriptive and utility words",
    wordIds: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62],
    isStarter: false,
    isPermanent: false
  },
  {
    id: 6,
    name: "Level 6",
    description: "10 travel and transportation words",
    wordIds: [63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
    isStarter: false,
    isPermanent: false
  }
];

// Helper to get all words for a level
export const getWordsForLevel = (levelId) => {
  const level = levels.find(l => l.id === levelId);
  if (!level) return [];
  return level.wordIds.map(id => words[id]).filter(Boolean);
};

// Helper to check if level is starter pack
export const isStarterLevel = (levelId) => {
  const level = levels.find(l => l.id === levelId);
  return level ? level.isStarter : false;
};

// Helper to check if level is permanent (cannot be unlearned)
export const isPermanentLevel = (levelId) => {
  const level = levels.find(l => l.id === levelId);
  return level ? level.isPermanent : false;
};