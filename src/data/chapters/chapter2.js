// Chapter 2: Animals
// Uses Foundation words (Level 0) + Chapter 2 words (IDs 31-33)

export const chapter2 = {
    id: 2,
    title: "Animals",
    description: "Learn the names of common animals",
    level: 2,
    image: "/images/chapter2/main.jpg",
    words: [31, 32, 33],
    sentences: [
        // Word: 猫 (cat) - ID 31
        {
            id: 201,
            targetWordId: 31,
            blankWordId: 31,
            level: 2,
            difficulty: 1,
            image: "/images/chapter2/scene1.jpg",
            sceneDetails: "A small furry animal sleeps on the sofa.",
            sentence: "这是 _____ 。",
            answer: "猫",
            pinyin: "zhè shì māo",
            nativeSentence: "This is a cat.",
            explanation: "猫 means 'cat'",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "猫", wordId: 31 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Word: 狗 (dog) - ID 32
        {
            id: 202,
            targetWordId: 32,
            blankWordId: 32,
            level: 2,
            difficulty: 1,
            image: "/images/chapter2/scene2.jpg",
            sceneDetails: "A friendly animal wags its tail.",
            sentence: "那是 _____ 。",
            answer: "狗",
            pinyin: "nà shì gǒu",
            nativeSentence: "That is a dog.",
            explanation: "狗 means 'dog'",
            words: [
                { text: "那", wordId: 8 },
                { text: "是", wordId: 12 },
                { text: "狗", wordId: 32 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Word: 鱼 (fish) - ID 33
        {
            id: 203,
            targetWordId: 33,
            blankWordId: 33,
            level: 2,
            difficulty: 1,
            image: "/images/chapter2/scene3.jpg",
            sceneDetails: "A creature swims in the water.",
            sentence: "它在 _____ 里。",
            answer: "鱼",
            pinyin: "tā zài yú lǐ",
            nativeSentence: "It is in the fish.",
            explanation: "鱼 means 'fish'",
            words: [
                { text: "它", wordId: 5 },
                { text: "在", wordId: 11 },
                { text: "鱼", wordId: 33 },
                { text: "里", wordId: 27 },
                { text: "。", isPunctuation: true }
            ]
        }
    ]
};