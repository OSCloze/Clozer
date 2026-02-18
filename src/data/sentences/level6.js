// Level 6: Travel & Transportation Sentences
// Uses words from Levels 1-5 + Level 6 target words (IDs 63-72)

export const level6Sentences = [
    // 车 (car/vehicle) - ID 63
    {
        id: 601,
        targetWordId: 63,
        blankWordId: 63,
        level: 6,
        difficulty: 1,
        sentence: "他有 _____ 。",
        answer: "车",
        pinyin: "tā yǒu chē",
        nativeSentence: "He has a car.",
        explanation: "车 means 'car' or 'vehicle'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "有", wordId: 6 },
            { text: "车", wordId: 63 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 路 (road) - ID 64
    {
        id: 602,
        targetWordId: 64,
        blankWordId: 64,
        level: 6,
        difficulty: 1,
        sentence: "他在 _____ 上。",
        answer: "路",
        pinyin: "tā zài lù shang",
        nativeSentence: "He is on the road.",
        explanation: "路 means 'road'. 上 means 'on'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "在", wordId: 7 },
            { text: "路", wordId: 64 },
            { text: "上", wordId: 45 },  // Level 4
            { text: "。", isPunctuation: true }
        ]
    },

    // 飞机 (airplane) - ID 65
    {
        id: 603,
        targetWordId: 65,
        blankWordId: 65,
        level: 6,
        difficulty: 2,
        sentence: "他坐 _____ 去。",
        answer: "飞机",
        pinyin: "tā zuò fēi jī qù",
        nativeSentence: "He goes by plane.",
        explanation: "飞机 means 'airplane'. 坐 here means 'to take (transport)'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "坐", wordId: 70 },   // Level 6
            { text: "飞机", wordId: 65 },
            { text: "去", wordId: 8 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 火车 (train) - ID 66
    {
        id: 604,
        targetWordId: 66,
        blankWordId: 66,
        level: 6,
        difficulty: 2,
        sentence: "他坐 _____ 来。",
        answer: "火车",
        pinyin: "tā zuò huǒ chē lái",
        nativeSentence: "He comes by train.",
        explanation: "火车 means 'train'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "坐", wordId: 70 },
            { text: "火车", wordId: 66 },
            { text: "来", wordId: 9 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 地铁 (subway) - ID 67
    {
        id: 605,
        targetWordId: 67,
        blankWordId: 67,
        level: 6,
        difficulty: 2,
        sentence: "他坐 _____ 去家。",
        answer: "地铁",
        pinyin: "tā zuò dì tiě qù jiā",
        nativeSentence: "He takes the subway home.",
        explanation: "地铁 means 'subway'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "坐", wordId: 70 },
            { text: "地铁", wordId: 67 },
            { text: "去", wordId: 8 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 走路 (to walk) - ID 68
    {
        id: 606,
        targetWordId: 68,
        blankWordId: 68,
        level: 6,
        difficulty: 1,
        sentence: "他 _____ 去家。",
        answer: "走路",
        pinyin: "tā zǒu lù qù jiā",
        nativeSentence: "He walks home.",
        explanation: "走路 means 'to walk'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "走路", wordId: 68 },
            { text: "去", wordId: 8 },
            { text: "家", wordId: 18 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 开车 (to drive) - ID 69
    {
        id: 607,
        targetWordId: 69,
        blankWordId: 69,
        level: 6,
        difficulty: 2,
        sentence: "他 _____ 去。",
        answer: "开车",
        pinyin: "tā kāi chē qù",
        nativeSentence: "He drives there.",
        explanation: "开车 means 'to drive'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "开车", wordId: 69 },
            { text: "去", wordId: 8 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 坐 (to take transport) - ID 70
    {
        id: 608,
        targetWordId: 70,
        blankWordId: 70,
        level: 6,
        difficulty: 2,
        sentence: "他 _____ 车去。",
        answer: "坐",
        pinyin: "tā zuò chē qù",
        nativeSentence: "He goes by car.",
        explanation: "坐 here means 'to take (transport)'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "坐", wordId: 70 },
            { text: "车", wordId: 63 },
            { text: "去", wordId: 8 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 站 (station) - ID 71
    {
        id: 609,
        targetWordId: 71,
        blankWordId: 71,
        level: 6,
        difficulty: 1,
        sentence: "他在 _____ 。",
        answer: "站",
        pinyin: "tā zài zhàn",
        nativeSentence: "He is at the station.",
        explanation: "站 means 'station'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "在", wordId: 7 },
            { text: "站", wordId: 71 },
            { text: "。", isPunctuation: true }
        ]
    },

    // 票 (ticket) - ID 72
    {
        id: 610,
        targetWordId: 72,
        blankWordId: 72,
        level: 6,
        difficulty: 2,
        sentence: "他买 _____ 。",
        answer: "票",
        pinyin: "tā mǎi piào",
        nativeSentence: "He buys a ticket.",
        explanation: "票 means 'ticket'.",
        words: [
            { text: "他", wordId: 3 },
            { text: "买", wordId: 45 },  // Level 4
            { text: "票", wordId: 72 },
            { text: "。", isPunctuation: true }
        ]
    }
];