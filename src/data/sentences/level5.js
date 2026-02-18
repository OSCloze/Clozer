// Level 5: Descriptive & Utility Words Sentences
// Uses Levels 1-4 (IDs 1-51) + Level 5 words (IDs 52-62)

export const level5Sentences = [
    // 时间 (time) - ID 52
    {
        id: 501,
        targetWordId: 52,
        blankWordId: 52,
        level: 5,
        difficulty: 1,
        sentence: "我有 _____ 。",
        answer: "时间",
        pinyin: "wǒ yǒu shí jiān",
        nativeSentence: "I have time.",
        explanation: "时间 means 'time'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "时间", wordId: 52 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 地方 (place) - ID 53
    {
        id: 502,
        targetWordId: 53,
        blankWordId: 53,
        level: 5,
        difficulty: 2,
        sentence: "他在什么 _____ ？",
        answer: "地方",
        pinyin: "tā zài shén me dì fang",
        nativeSentence: "Where is he?",
        explanation: "地方 means 'place'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "在", wordId: 7 },
            { text: "什么", wordId: 15 },
            { text: "地方", wordId: 53 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 名字 (name) - ID 54
    {
        id: 503,
        targetWordId: 54,
        blankWordId: 54,
        level: 5,
        difficulty: 2,
        sentence: "他叫什么 _____ ？",
        answer: "名字",
        pinyin: "tā jiào shén me míng zi",
        nativeSentence: "What is his name?",
        explanation: "名字 means 'name'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "叫", wordId: 62 },
            { text: "什么", wordId: 15 },
            { text: "名字", wordId: 54 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 岁 (years old) - ID 55
    {
        id: 504,
        targetWordId: 55,
        blankWordId: 55,
        level: 5,
        difficulty: 1,
        sentence: "他三 _____ 。",
        answer: "岁",
        pinyin: "tā sān suì",
        nativeSentence: "He is three years old.",
        explanation: "岁 means 'years old'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "三", wordId: 50 },
            { text: "岁", wordId: 55 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 高 (tall) - ID 56
    {
        id: 505,
        targetWordId: 56,
        blankWordId: 56,
        level: 5,
        difficulty: 2,
        sentence: "他很 _____ 。",
        answer: "高",
        pinyin: "tā hěn gāo",
        nativeSentence: "He is tall.",
        explanation: "高 means 'tall' or 'high'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "很", wordId: 25 },
            { text: "高", wordId: 56 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 矮 (short) - ID 57
    {
        id: 506,
        targetWordId: 57,
        blankWordId: 57,
        level: 5,
        difficulty: 2,
        sentence: "他很 _____ 。",
        answer: "矮",
        pinyin: "tā hěn ǎi",
        nativeSentence: "He is short.",
        explanation: "矮 means 'short' (height).",
        words: [
            { text: "他", wordId: 3 },
            { text: "很", wordId: 25 },
            { text: "矮", wordId: 57 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 新 (new) - ID 58
    {
        id: 507,
        targetWordId: 58,
        blankWordId: 58,
        level: 5,
        difficulty: 2,
        sentence: "我的东西很 _____ 。",
        answer: "新",
        pinyin: "wǒ de dōng xi hěn xīn",
        nativeSentence: "My things are new.",
        explanation: "新 means 'new'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "的", wordId: 10 },
            { text: "东西", wordId: 27 },
            { text: "很", wordId: 25 },
            { text: "新", wordId: 58 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 旧 (old) - ID 59
    {
        id: 508,
        targetWordId: 59,
        blankWordId: 59,
        level: 5,
        difficulty: 2,
        sentence: "我的东西很 _____ 。",
        answer: "旧",
        pinyin: "wǒ de dōng xi hěn jiù",
        nativeSentence: "My things are old.",
        explanation: "旧 means 'old' (not new).",
        words: [
            { text: "我", wordId: 1 },
            { text: "的", wordId: 10 },
            { text: "东西", wordId: 27 },
            { text: "很", wordId: 25 },
            { text: "旧", wordId: 59 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 长 (long) - ID 60
    {
        id: 509,
        targetWordId: 60,
        blankWordId: 60,
        level: 5,
        difficulty: 2,
        sentence: "他的东西很 _____ 。",
        answer: "长",
        pinyin: "tā de dōng xi hěn cháng",
        nativeSentence: "His things are long.",
        explanation: "长 means 'long'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "的", wordId: 10 },
            { text: "东西", wordId: 27 },
            { text: "很", wordId: 25 },
            { text: "长", wordId: 60 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 短 (short) - ID 61
    {
        id: 510,
        targetWordId: 61,
        blankWordId: 61,
        level: 5,
        difficulty: 2,
        sentence: "他的东西很 _____ 。",
        answer: "短",
        pinyin: "tā de dōng xi hěn duǎn",
        nativeSentence: "His things are short.",
        explanation: "短 means 'short' (length).",
        words: [
            { text: "他", wordId: 3 },
            { text: "的", wordId: 10 },
            { text: "东西", wordId: 27 },
            { text: "很", wordId: 25 },
            { text: "短", wordId: 61 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 叫 (to be called) - ID 62
    {
        id: 511,
        targetWordId: 62,
        blankWordId: 62,
        level: 5,
        difficulty: 2,
        sentence: "他 _____ 什么？",
        answer: "叫",
        pinyin: "tā jiào shén me",
        nativeSentence: "What is he called?",
        explanation: "叫 means 'to be called'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "叫", wordId: 62 },
            { text: "什么", wordId: 15 },
            { text: "？", isPunctuation: true }
        ]
    }
];