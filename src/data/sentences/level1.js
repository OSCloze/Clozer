// Level 1: Foundation Sentences
// Uses only Level 1 words (IDs 1-20)

export const level1Sentences = [
    // 我 (I/me) - ID 1
    {
        id: 101,
        targetWordId: 1,
        blankWordId: 1,
        level: 1,
        difficulty: 1,
        sentence: "_____ 是人。",
        answer: "我",
        pinyin: "wǒ shì rén",
        nativeSentence: "I am a person.",
        explanation: "我 means 'I' or 'me'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "是", wordId: 5 },
            { text: "人", wordId: 17 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 你 (you) - ID 2
    {
        id: 102,
        targetWordId: 2,
        blankWordId: 2,
        level: 1,
        difficulty: 1,
        sentence: "_____ 是人。",
        answer: "你",
        pinyin: "nǐ shì rén",
        nativeSentence: "You are a person.",
        explanation: "你 means 'you'.",
        words: [
            { text: "你", wordId: 2 },
            { text: "是", wordId: 5 },
            { text: "人", wordId: 17 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 他 (he/him) - ID 3
    {
        id: 103,
        targetWordId: 3,
        blankWordId: 3,
        level: 1,
        difficulty: 1,
        sentence: "_____ 是人。",
        answer: "他",
        pinyin: "tā shì rén",
        nativeSentence: "He is a person.",
        explanation: "他 means 'he' or 'him'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "是", wordId: 5 },
            { text: "人", wordId: 17 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 她 (she/her) - ID 4
    {
        id: 104,
        targetWordId: 4,
        blankWordId: 4,
        level: 1,
        difficulty: 1,
        sentence: "_____ 是人。",
        answer: "她",
        pinyin: "tā shì rén",
        nativeSentence: "She is a person.",
        explanation: "她 means 'she' or 'her'.",
        words: [
            { text: "她", wordId: 4 },
            { text: "是", wordId: 5 },
            { text: "人", wordId: 17 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 是 (to be) - ID 5
    {
        id: 105,
        targetWordId: 5,
        blankWordId: 5,
        level: 1,
        difficulty: 1,
        sentence: "我 _____ 人。",
        answer: "是",
        pinyin: "wǒ shì rén",
        nativeSentence: "I am a person.",
        explanation: "是 means 'to be'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "是", wordId: 5 },
            { text: "人", wordId: 17 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 有 (to have) - ID 6
    {
        id: 106,
        targetWordId: 6,
        blankWordId: 6,
        level: 1,
        difficulty: 1,
        sentence: "我 _____ 水。",
        answer: "有",
        pinyin: "wǒ yǒu shuǐ",
        nativeSentence: "I have water.",
        explanation: "有 means 'to have'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "水", wordId: 19 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 在 (to be at) - ID 7
    {
        id: 107,
        targetWordId: 7,
        blankWordId: 7,
        level: 1,
        difficulty: 1,
        sentence: "我 _____ 家。",
        answer: "在",
        pinyin: "wǒ zài jiā",
        nativeSentence: "I am at home.",
        explanation: "在 means 'to be at'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "在", wordId: 7 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 去 (to go) - ID 8
    {
        id: 108,
        targetWordId: 8,
        blankWordId: 8,
        level: 1,
        difficulty: 1,
        sentence: "我 _____ 家。",
        answer: "去",
        pinyin: "wǒ qù jiā",
        nativeSentence: "I go home.",
        explanation: "去 means 'to go'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "去", wordId: 8 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 来 (to come) - ID 9
    {
        id: 109,
        targetWordId: 9,
        blankWordId: 9,
        level: 1,
        difficulty: 1,
        sentence: "你 _____ 家。",
        answer: "来",
        pinyin: "nǐ lái jiā",
        nativeSentence: "You come home.",
        explanation: "来 means 'to come'.",
        words: [
            { text: "你", wordId: 2 },
            { text: "来", wordId: 9 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 的 (possession) - ID 10
    {
        id: 110,
        targetWordId: 10,
        blankWordId: 10,
        level: 1,
        difficulty: 2,
        sentence: "他是我 _____ 朋友。",
        answer: "的",
        pinyin: "tā shì wǒ de péng you",
        nativeSentence: "He is my friend.",
        explanation: "的 shows possession.",
        words: [
            { text: "他", wordId: 3 },
            { text: "是", wordId: 5 },
            { text: "我", wordId: 1 },
            { text: "的", wordId: 10 },
            { text: "朋友", wordId: 20 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 了 (past marker) - ID 11
    {
        id: 111,
        targetWordId: 11,
        blankWordId: 11,
        level: 1,
        difficulty: 2,
        sentence: "我去 _____ 家。",
        answer: "了",
        pinyin: "wǒ qù le jiā",
        nativeSentence: "I went home.",
        explanation: "了 indicates past action.",
        words: [
            { text: "我", wordId: 1 },
            { text: "去", wordId: 8 },
            { text: "了", wordId: 11 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 吗 (question) - ID 12
    {
        id: 112,
        targetWordId: 12,
        blankWordId: 12,
        level: 1,
        difficulty: 1,
        sentence: "你有水 _____ ？",
        answer: "吗",
        pinyin: "nǐ yǒu shuǐ ma",
        nativeSentence: "Do you have water?",
        explanation: "吗 turns statements into questions.",
        words: [
            { text: "你", wordId: 2 },
            { text: "有", wordId: 6 },
            { text: "水", wordId: 19 },
            { text: "吗", wordId: 12 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 不 (not) - ID 13
    {
        id: 113,
        targetWordId: 13,
        blankWordId: 13,
        level: 1,
        difficulty: 2,
        sentence: "我 _____ 去。",
        answer: "不",
        pinyin: "wǒ bù qù",
        nativeSentence: "I'm not going.",
        explanation: "不 negates verbs.",
        words: [
            { text: "我", wordId: 1 },
            { text: "不", wordId: 13 },
            { text: "去", wordId: 8 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 什么 (what) - ID 15
    {
        id: 115,
        targetWordId: 15,
        blankWordId: 15,
        level: 1,
        difficulty: 2,
        sentence: "你有 _____ ？",
        answer: "什么",
        pinyin: "nǐ yǒu shén me",
        nativeSentence: "What do you have?",
        explanation: "什么 means 'what'.",
        words: [
            { text: "你", wordId: 2 },
            { text: "有", wordId: 6 },
            { text: "什么", wordId: 15 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 谁 (who) - ID 16
    {
        id: 116,
        targetWordId: 16,
        blankWordId: 16,
        level: 1,
        difficulty: 2,
        sentence: "他是 _____ ？",
        answer: "谁",
        pinyin: "tā shì shéi",
        nativeSentence: "Who is he?",
        explanation: "谁 means 'who'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "是", wordId: 5 },
            { text: "谁", wordId: 16 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 人 (person) - ID 17
    {
        id: 117,
        targetWordId: 17,
        blankWordId: 17,
        level: 1,
        difficulty: 1,
        sentence: "他是 _____ 。",
        answer: "人",
        pinyin: "tā shì rén",
        nativeSentence: "He is a person.",
        explanation: "人 means 'person'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "是", wordId: 5 },
            { text: "人", wordId: 17 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 家 (home) - ID 18
    {
        id: 118,
        targetWordId: 18,
        blankWordId: 18,
        level: 1,
        difficulty: 1,
        sentence: "我在 _____ 。",
        answer: "家",
        pinyin: "wǒ zài jiā",
        nativeSentence: "I am at home.",
        explanation: "家 means 'home'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "在", wordId: 7 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 水 (water) - ID 19
    {
        id: 119,
        targetWordId: 19,
        blankWordId: 19,
        level: 1,
        difficulty: 1,
        sentence: "我有 _____ 。",
        answer: "水",
        pinyin: "wǒ yǒu shuǐ",
        nativeSentence: "I have water.",
        explanation: "水 means 'water'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "水", wordId: 19 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 朋友 (friend) - ID 20
    {
        id: 120,
        targetWordId: 20,
        blankWordId: 20,
        level: 1,
        difficulty: 1,
        sentence: "他是 _____ 。",
        answer: "朋友",
        pinyin: "tā shì péng you",
        nativeSentence: "He is a friend.",
        explanation: "朋友 means 'friend'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "是", wordId: 5 },
            { text: "朋友", wordId: 20 },
            { text: "。", isPunctuation: true }
        ]
    }
];