/**
 * Generate Pleco URLs for a Chinese word
 * @param {string} word - The Chinese character(s)
 * @returns {Object} - Different URL formats
 */
export const getPlecoUrls = (word) => {
    const encoded = encodeURIComponent(word);

    return {
        // Web version (works everywhere)
        web: `https://www.pleco.com/api/word?q=${encoded}`,

        // Mobile app schemes
        app: `plecoapi://x-callback-url/query?q=${encoded}`,

        // Alternative app schemes
        app2: `plecoapi://query?q=${encoded}`,

        // Flashcard integration
        flashcard: `plecoapi://x-callback-url/addflashcard?q=${encoded}`
    };
};

/**
 * Open Pleco with fallback
 * @param {string} word - The Chinese word to look up
 */
export const openPleco = (word) => {
    const urls = getPlecoUrls(word);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Try to open Pleco app
        window.location.href = urls.app;

        // Fallback to web after a delay
        setTimeout(() => {
            window.open(urls.web, '_blank');
        }, 800);
    } else {
        // On desktop, open web version
        window.open(urls.web, '_blank');
    }
};