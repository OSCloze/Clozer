// Level 3: Common Words Sentences
// Uses Level 1-2 (IDs 1-31) + Level 3 words (IDs 32-41)

export const level3Sentences = [
    // 好 (good) - ID 32
    {
        id: 301,
        targetWordId: 32,
        blankWordId: 32,
        level: 3,
        difficulty: 1,
        sentence: "你 _____ 吗？",
        answer: "好",
        pinyin: "nǐ hǎo ma",
        nativeSentence: "How are you?",
        explanation: "好 means 'good'.",
        words: [
            { text: "你", wordId: 2 },
            { text: "好", wordId: 32 },
            { text: "吗", wordId: 12 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 这 (this) - ID 33
    {
        id: 302,
        targetWordId: 33,
        blankWordId: 33,
        level: 3,
        difficulty: 1,
        sentence: "_____ 是什么？",
        answer: "这",
        pinyin: "zhè shì shén me",
        nativeSentence: "What is this?",
        explanation: "这 means 'this'.",
        words: [
            { text: "这", wordId: 33 },
            { text: "是", wordId: 5 },
            { text: "什么", wordId: 15 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 那 (that) - ID 34
    {
        id: 303,
        targetWordId: 34,
        blankWordId: 34,
        level: 3,
        difficulty: 1,
        sentence: "_____ 是什么？",
        answer: "那",
        pinyin: "nà shì shén me",
        nativeSentence: "What is that?",
        explanation: "那 means 'that'.",
        words: [
            { text: "那", wordId: 34 },
            { text: "是", wordId: 5 },
            { text: "什么", wordId: 15 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 都 (all/both) - ID 35
    {
        id: 304,
        targetWordId: 35,
        blankWordId: 35,
        level: 3,
        difficulty: 2,
        sentence: "我和他 _____ 是人。",
        answer: "都",
        pinyin: "wǒ hé tā dōu shì rén",
        nativeSentence: "He and I are both people.",
        explanation: "都 means 'all' or 'both'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "和", wordId: 37 },
            { text: "他", wordId: 3 },
            { text: "都", wordId: 35 },
            { text: "是", wordId: 5 },
            { text: "人", wordId: 17 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 也 (also) - ID 36
    {
        id: 305,
        targetWordId: 36,
        blankWordId: 36,
        level: 3,
        difficulty: 2,
        sentence: "他 _____ 去。",
        answer: "也",
        pinyin: "tā yě qù",
        nativeSentence: "He is also going.",
        explanation: "也 means 'also'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "也", wordId: 36 },
            { text: "去", wordId: 8 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 和 (and) - ID 37
    {
        id: 306,
        targetWordId: 37,
        blankWordId: 37,
        level: 3,
        difficulty: 2,
        sentence: "我 _____ 他是朋友。",
        answer: "和",
        pinyin: "wǒ hé tā shì péng you",
        nativeSentence: "He and I are friends.",
        explanation: "和 means 'and'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "和", wordId: 37 },
            { text: "他", wordId: 3 },
            { text: "是", wordId: 5 },
            { text: "朋友", wordId: 20 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 看 (see) - ID 38
    {
        id: 307,
        targetWordId: 38,
        blankWordId: 38,
        level: 3,
        difficulty: 1,
        sentence: "我 _____ 东西。",
        answer: "看",
        pinyin: "wǒ kàn dōng xi",
        nativeSentence: "I look at things.",
        explanation: "看 means 'to see' or 'to look'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "看", wordId: 38 },
            { text: "东西", wordId: 27 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 听 (listen) - ID 39
    {
        id: 308,
        targetWordId: 39,
        blankWordId: 39,
        level: 3,
        difficulty: 1,
        sentence: "我 _____ 东西。",
        answer: "听",
        pinyin: "wǒ tīng dōng xi",
        nativeSentence: "I listen to things.",
        explanation: "听 means 'to listen'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "听", wordId: 39 },
            { text: "东西", wordId: 27 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 说 (speak) - ID 40
    {
        id: 309,
        targetWordId: 40,
        blankWordId: 40,
        level: 3,
        difficulty: 2,
        sentence: "他 _____ 什么？",
        answer: "说",
        pinyin: "tā shuō shén me",
        nativeSentence: "What does he say?",
        explanation: "说 means 'to speak'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "说", wordId: 40 },
            { text: "什么", wordId: 15 },
            { text: "？", isPunctuation: true }
        ]
    },

    // 想 (want/think) - ID 41
    {
        id: 310,
        targetWordId: 41,
        blankWordId: 41,
        level: 3,
        difficulty: 1,
        sentence: "我 _____ 去。",
        answer: "想",
        pinyin: "wǒ xiǎng qù",
        nativeSentence: "I want to go.",
        explanation: "想 means 'to want' or 'to think'.",
        words: [
            { text: "我", wordId: 1 },
            { text: "想", wordId: 41 },
            { text: "去", wordId: 8 },
            { text: "。", isPunctuation: true }
        ]
    }
];