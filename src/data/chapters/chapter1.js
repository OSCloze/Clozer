// Chapter 1: The Tea House
export const chapter1 = {
    id: 1,
    title: "The Tea House",
    description: "Visit an old tea shop and learn to order tea",
    level: 1,
    image: "/images/chapter1/main.png",
    words: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    sentences: [
        // Scene 1: Entering the tea house
        {
            id: 101,
            targetWordId: 21, // 茶
            blankWordId: 21,
            level: 1,
            difficulty: 1,
            topic: "Beverage",
            image: "/images/chapter1/scene1.png",
            sceneDetails: "You push open the creaky wooden door. An old man behind the counter looks up and smiles. Steam rises from a kettle nearby. He gestures to the pot in front of him.",
            sentence: "你好！这是 ___ 。",
            answer: "茶",
            pinyin: "nǐ hǎo! zhè shì chá",
            nativeSentence: "Hello! This is tea.",
            explanation: "This sentence introduces 茶 (tea) as a noun. The pattern 这是... means 'this is...' and is a basic way to identify objects. 你好 is a fixed greeting meaning 'hello'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "好", wordId: 26 },
                { text: "！", isPunctuation: true },
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "茶", wordId: 21 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Scene 2: Pointing to the kettle
        {
            id: 102,
            targetWordId: 22, // 水
            blankWordId: 22,
            level: 1,
            difficulty: 1,
            topic: "Beverage",
            image: "/images/chapter1/scene2.png",
            sceneDetails: "He points to the kettle on the counter, where water is bubbling gently.",
            sentence: "那是 ___ 。",
            answer: "水",
            pinyin: "nà shì shuǐ",
            nativeSentence: "That is water.",
            explanation: "The pattern 那是... means 'that is...' and is used for objects further away. 水 (water) is a basic noun that appears frequently in the tea shop.",
            words: [
                { text: "那", wordId: 8 },
                { text: "是", wordId: 12 },
                { text: "水", wordId: 22 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Scene 3: Holding up a cup
        {
            id: 103,
            targetWordId: 23, // 杯子
            blankWordId: 23,
            level: 1,
            difficulty: 1,
            topic: "Tableware",
            image: "/images/chapter1/scene3.png",
            sceneDetails: "He holds up an empty ceramic cup, turning it gently in his hands so you can see it from all angles.",
            sentence: "这是一个 ___ 。",
            answer: "杯子",
            pinyin: "zhè shì yī gè bēi zi",
            nativeSentence: "This is a cup.",
            explanation: "The pattern 这是一个... means 'this is a...' and introduces objects with the measure word 个, which is commonly used for cups and many other items.",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "一", wordId: 29 },
                { text: "个", wordId: 30 },
                { text: "杯子", wordId: 23 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Scene 4: Offering tea
        {
            id: 104,
            targetWordId: 25, // 喝
            blankWordId: 25,
            level: 1,
            difficulty: 1,
            topic: "Action",
            image: "/images/chapter1/scene4.png",
            sceneDetails: "He pours steaming water into a teapot, then looks at you expectantly, tilting his head toward the cup.",
            sentence: "你 ___ 茶吗？",
            answer: "喝",
            pinyin: "nǐ hē chá ma",
            nativeSentence: "Do you drink tea?",
            explanation: "This sentence introduces the verb 喝 (to drink). The pattern 你...吗？ forms a yes/no question. The object 茶 (tea) comes after the verb.",
            words: [
                { text: "你", wordId: 2 },
                { text: "喝", wordId: 25 },
                { text: "茶", wordId: 21 },
                { text: "吗", wordId: 18 },
                { text: "？", isPunctuation: true }
            ]
        },

        // Scene 5: Hot tea
        {
            id: 105,
            targetWordId: 24, // 热
            blankWordId: 24,
            level: 1,
            difficulty: 1,
            topic: "Temperature",
            image: "/images/chapter1/scene5.png",
            sceneDetails: "Steam curls from the freshly poured tea. He slides a cup toward you across the worn wooden counter.",
            sentence: "这是 ___ 茶。",
            answer: "热",
            pinyin: "zhè shì rè chá",
            nativeSentence: "This is hot tea.",
            explanation: "Here 热 (hot) acts as an adjective before the noun 茶. In Chinese, adjectives directly modify nouns without needing a linking word like 'is'.",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "热", wordId: 24 },
                { text: "茶", wordId: 21 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Scene 6: Commenting on temperature
        {
            id: 106,
            targetWordId: 24, // 热
            blankWordId: 24,
            level: 1,
            difficulty: 2,
            topic: "Temperature",
            image: "/images/chapter1/scene6.png",
            sceneDetails: "You wrap your hands around the warm cup and take a careful sip. He watches, waiting for your reaction.",
            sentence: "茶很 ___ 。",
            answer: "热",
            pinyin: "chá hěn rè",
            nativeSentence: "The tea is very hot.",
            explanation: "The pattern 很 + adjective is the standard way to describe things in Chinese. 很 (very) softens the adjective and doesn't always carry the strong meaning of 'very'.",
            words: [
                { text: "茶", wordId: 21 },
                { text: "很", wordId: 17 },
                { text: "热", wordId: 24 },
                { text: "。", isPunctuation: true }
            ]
        },

        // Scene 7: Good tea
        {
            id: 107,
            targetWordId: 26, // 好
            blankWordId: 26,
            level: 1,
            difficulty: 3,
            topic: "Beverage",
            image: "/images/chapter1/scene7.png",
            sceneDetails: "You nod in appreciation, enjoying the warmth and flavor. A small smile crosses his face.",
            sentence: "这是___茶 。",
            answer: "好",
            pinyin: "zhè shì hǎo chá",
            nativeSentence: "This is good tea.",
            explanation: "The adjective 好 (good) directly modifies the noun 茶. In Chinese, 好茶 means 'good tea' without needing a word for 'is'. This expresses your positive reaction to the tea.",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "好", wordId: 26 },
                { text: "茶", wordId: 21 },
                { text: "。", isPunctuation: true }
            ]
        }
    ]
};