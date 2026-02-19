// Chapter 3: Colors
// Uses Foundation words (Level 0) + Chapter 3 words (IDs 41-43)

export const chapter3 = {
    id: 3,
    title: "Colors",
    description: "Learn the names of basic colors",
    level: 3,
    image: "/images/chapter3/main.jpg",
    words: [41, 42, 43],
    sentences: [
        // Word: 红 (red) - ID 41
        {
            id: 301,
            targetWordId: 41,
            blankWordId: 41,
            level: 3,
            difficulty: 1,
            image: "/images/chapter3/scene1.jpg",
            sceneDetails: "The color of an apple or rose.",
            sentence: "苹果是 _____ 的。",
            answer: "红",
            pinyin: "píng guǒ shì hóng de",
            nativeSentence: "The apple is red.",
            explanation: "红 means 'red'",
            words: [
                { text: "苹果", wordId: 44 },
                { text: "是", wordId: 12 },
                { text: "红", wordId: 41 },
                { text: "的", wordId: 9 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Word: 蓝 (blue) - ID 42
        {
            id: 302,
            targetWordId: 42,
            blankWordId: 42,
            level: 3,
            difficulty: 1,
            image: "/images/chapter3/scene2.jpg",
            sceneDetails: "The color of the sky and ocean.",
            sentence: "天是 _____ 的。",
            answer: "蓝",
            pinyin: "tiān shì lán de",
            nativeSentence: "The sky is blue.",
            explanation: "蓝 means 'blue'",
            words: [
                { text: "天", wordId: 45 },
                { text: "是", wordId: 12 },
                { text: "蓝", wordId: 42 },
                { text: "的", wordId: 9 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Word: 绿 (green) - ID 43
        {
            id: 303,
            targetWordId: 43,
            blankWordId: 43,
            level: 3,
            difficulty: 1,
            image: "/images/chapter3/scene3.jpg",
            sceneDetails: "The color of grass and leaves.",
            sentence: "草是 _____ 的。",
            answer: "绿",
            pinyin: "cǎo shì lǜ de",
            nativeSentence: "The grass is green.",
            explanation: "绿 means 'green'",
            words: [
                { text: "草", wordId: 46 },
                { text: "是", wordId: 12 },
                { text: "绿", wordId: 43 },
                { text: "的", wordId: 9 },
                { text: "。", isPunctuation: true }
            ]
        }
    ]
};