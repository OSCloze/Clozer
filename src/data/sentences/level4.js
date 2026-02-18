// Level 4: Everyday Words Sentences
// Uses Levels 1-3 (IDs 1-41) + Level 4 words (IDs 42-51)

export const level4Sentences = [
    // 明天 (tomorrow) - ID 42
    {
        id: 401,
        targetWordId: 42,
        blankWordId: 42,
        level: 4,
        difficulty: 1,
        sentence: "我 _____ 去。",
        answer: "明天",
        pinyin: "wǒ míng tiān qù",
        nativeSentence: "I will go tomorrow.",
        explanation: "明天 means 'tomorrow'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "明天", wordId: 42 },
            { text: "去", wordId: 8 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 昨天 (yesterday) - ID 43
    {
        id: 402,
        targetWordId: 43,
        blankWordId: 43,
        level: 4,
        difficulty: 2,
        sentence: "我 _____ 去了。",
        answer: "昨天",
        pinyin: "wǒ zuó tiān qù le",
        nativeSentence: "I went yesterday.",
        explanation: "昨天 means 'yesterday'. 了 indicates past action.",
        words: [
            { text: "我", wordId: 1 },
            { text: "昨天", wordId: 43 },
            { text: "去", wordId: 8 },
            { text: "了", wordId: 11 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 做 (do/make) - ID 44
    {
        id: 403,
        targetWordId: 44,
        blankWordId: 44,
        level: 4,
        difficulty: 2,
        sentence: "他 _____ 什么？",
        answer: "做",
        pinyin: "tā zuò shén me",
        nativeSentence: "What does he do?",
        explanation: "做 means 'to do' or 'to make'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "做", wordId: 44 },
            { text: "什么", wordId: 15 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 买 (buy) - ID 45
    {
        id: 404,
        targetWordId: 45,
        blankWordId: 45,
        level: 4,
        difficulty: 1,
        sentence: "我 _____ 东西。",
        answer: "买",
        pinyin: "wǒ mǎi dōng xi",
        nativeSentence: "I buy things.",
        explanation: "买 means 'to buy'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "买", wordId: 45 },
            { text: "东西", wordId: 27 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 卖 (sell) - ID 46
    {
        id: 405,
        targetWordId: 46,
        blankWordId: 46,
        level: 4,
        difficulty: 1,
        sentence: "他 _____ 东西。",
        answer: "卖",
        pinyin: "tā mài dōng xi",
        nativeSentence: "He sells things.",
        explanation: "卖 means 'to sell'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "卖", wordId: 46 },
            { text: "东西", wordId: 27 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 多 (many) - ID 47
    {
        id: 406,
        targetWordId: 47,
        blankWordId: 47,
        level: 4,
        difficulty: 2,
        sentence: "他东西 _____ 。",
        answer: "多",
        pinyin: "tā dōng xi duō",
        nativeSentence: "He has many things.",
        explanation: "多 means 'many' or 'much'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "东西", wordId: 27 },
            { text: "多", wordId: 47 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 少 (few) - ID 48
    {
        id: 407,
        targetWordId: 48,
        blankWordId: 48,
        level: 4,
        difficulty: 2,
        sentence: "他东西 _____ 。",
        answer: "少",
        pinyin: "tā dōng xi shǎo",
        nativeSentence: "He has few things.",
        explanation: "少 means 'few' or 'little'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "东西", wordId: 27 },
            { text: "少", wordId: 48 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 二 (two) - ID 49
    {
        id: 408,
        targetWordId: 49,
        blankWordId: 49,
        level: 4,
        difficulty: 1,
        sentence: "我有 _____ 个朋友。",
        answer: "二",
        pinyin: "wǒ yǒu èr gè péng you",
        nativeSentence: "I have two friends.",
        explanation: "二 means 'two'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "二", wordId: 49 },
            { text: "个", wordId: 28 },
            { text: "朋友", wordId: 20 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 三 (three) - ID 50
    {
        id: 409,
        targetWordId: 50,
        blankWordId: 50,
        level: 4,
        difficulty: 1,
        sentence: "我有 _____ 个朋友。",
        answer: "三",
        pinyin: "wǒ yǒu sān gè péng you",
        nativeSentence: "I have three friends.",
        explanation: "三 means 'three'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "三", wordId: 50 },
            { text: "个", wordId: 28 },
            { text: "朋友", wordId: 20 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 四 (four) - ID 51
    {
        id: 410,
        targetWordId: 51,
        blankWordId: 51,
        level: 4,
        difficulty: 1,
        sentence: "我有 _____ 个朋友。",
        answer: "四",
        pinyin: "wǒ yǒu sì gè péng you",
        nativeSentence: "I have four friends.",
        explanation: "四 means 'four'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "四", wordId: 51 },
            { text: "个", wordId: 28 },
            { text: "朋友", wordId: 20 },
            { text: "。", isPunctuation: true }
        ]
    }
];