// Level 2: Basic Sentences
// Uses Level 1 (IDs 1-20) + Level 2 words (IDs 21-31)

export const level2Sentences = [
    // 爸爸 (dad) - ID 21
    {
        id: 201,
        targetWordId: 21,
        blankWordId: 21,
        level: 2,
        difficulty: 1,
        sentence: "他是 _____ 。",
        answer: "爸爸",
        pinyin: "tā shì bà ba",
        nativeSentence: "He is dad.",
        explanation: "爸爸 means 'dad'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "是", wordId: 5 },
            { text: "爸爸", wordId: 21 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 妈妈 (mom) - ID 22
    {
        id: 202,
        targetWordId: 22,
        blankWordId: 22,
        level: 2,
        difficulty: 1,
        sentence: "她是 _____ 。",
        answer: "妈妈",
        pinyin: "tā shì mā ma",
        nativeSentence: "She is mom.",
        explanation: "妈妈 means 'mom'.",
        words: [
            { text: "她", wordId: 4 },
            { text: "是", wordId: 5 },
            { text: "妈妈", wordId: 22 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 大 (big) - ID 23
    {
        id: 203,
        targetWordId: 23,
        blankWordId: 23,
        level: 2,
        difficulty: 1,
        sentence: "家很 _____ 。",
        answer: "大",
        pinyin: "jiā hěn dà",
        nativeSentence: "Home is big.",
        explanation: "大 means 'big'.",
        words: [
            { text: "家", wordId: 18 },
            { text: "很", wordId: 25 },
            { text: "大", wordId: 23 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 小 (small) - ID 24
    {
        id: 204,
        targetWordId: 24,
        blankWordId: 24,
        level: 2,
        difficulty: 1,
        sentence: "水很 _____ 。",
        answer: "小",
        pinyin: "shuǐ hěn xiǎo",
        nativeSentence: "The water amount is small.",
        explanation: "小 means 'small'.",
        words: [
            { text: "水", wordId: 19 },
            { text: "很", wordId: 25 },
            { text: "小", wordId: 24 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 很 (very) - ID 25
    {
        id: 205,
        targetWordId: 25,
        blankWordId: 25,
        level: 2,
        difficulty: 2,
        sentence: "他 _____ 大。",
        answer: "很",
        pinyin: "tā hěn dà",
        nativeSentence: "He is very big.",
        explanation: "很 means 'very', used before adjectives.",
        words: [
            { text: "他", wordId: 3 },
            { text: "很", wordId: 25 },
            { text: "大", wordId: 23 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 今天 (today) - ID 26
    {
        id: 206,
        targetWordId: 26,
        blankWordId: 26,
        level: 2,
        difficulty: 1,
        sentence: "_____ 我在家。",
        answer: "今天",
        pinyin: "jīn tiān wǒ zài jiā",
        nativeSentence: "Today I am at home.",
        explanation: "今天 means 'today'.",
        words: [
            { text: "今天", wordId: 26 },
            { text: "我", wordId: 1 },
            { text: "在", wordId: 7 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 东西 (thing) - ID 27
    {
        id: 207,
        targetWordId: 27,
        blankWordId: 27,
        level: 2,
        difficulty: 1,
        sentence: "我有 _____ 。",
        answer: "东西",
        pinyin: "wǒ yǒu dōng xi",
        nativeSentence: "I have things.",
        explanation: "东西 means 'thing' or 'things'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "东西", wordId: 27 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 个 (measure word) - ID 28
    {
        id: 208,
        targetWordId: 28,
        blankWordId: 28,
        level: 2,
        difficulty: 2,
        sentence: "我有一 _____ 朋友。",
        answer: "个",
        pinyin: "wǒ yǒu yī gè péng you",
        nativeSentence: "I have a friend.",
        explanation: "个 is a common measure word.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "一", wordId: 29 },
            { text: "个", wordId: 28 },
            { text: "朋友", wordId: 20 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 一 (one) - ID 29
    {
        id: 209,
        targetWordId: 29,
        blankWordId: 29,
        level: 2,
        difficulty: 2,
        sentence: "我有 _____ 个家。",
        answer: "一",
        pinyin: "wǒ yǒu yī gè jiā",
        nativeSentence: "I have one home.",
        explanation: "一 means 'one'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "有", wordId: 6 },
            { text: "一", wordId: 29 },
            { text: "个", wordId: 28 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 吃 (eat) - ID 30
    {
        id: 210,
        targetWordId: 30,
        blankWordId: 30,
        level: 2,
        difficulty: 1,
        sentence: "我 _____ 东西。",
        answer: "吃",
        pinyin: "wǒ chī dōng xi",
        nativeSentence: "I eat things.",
        explanation: "吃 means 'to eat'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "吃", wordId: 30 },
            { text: "东西", wordId: 27 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 喜欢 (like) - ID 31
    {
        id: 211,
        targetWordId: 31,
        blankWordId: 31,
        level: 2,
        difficulty: 2,
        sentence: "我 _____ 他。",
        answer: "喜欢",
        pinyin: "wǒ xǐ huān tā",
        nativeSentence: "I like him.",
        explanation: "喜欢 means 'to like'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "喜欢", wordId: 31 },
            { text: "他", wordId: 3 },
            { text: "。", isPunctuation: true }
        ]
    }
];