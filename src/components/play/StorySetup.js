import React, { useState } from 'react';

export default function StorySetup({ onStart, chapters, storyProgress }) {
    const [selectedChapter, setSelectedChapter] = useState(null);

    // Find the first unlocked chapter
    const getFirstUnlockedChapter = () => {
        for (let i = 0; i < chapters.length; i++) {
            const chapter = chapters[i];
            if (i === 0) return chapter.id; // First chapter always unlocked
            const prevChapterCompleted = storyProgress.completedChapters.includes(chapters[i - 1].id);
            if (prevChapterCompleted) return chapter.id;
        }
        return chapters[0]?.id;
    };

    React.useEffect(() => {
        setSelectedChapter(getFirstUnlockedChapter());
    }, []);

    const isChapterLocked = (chapterId, index) => {
        if (index === 0) return false;
        return !storyProgress.completedChapters.includes(chapters[index - 1].id);
    };

    const getChapterStatus = (chapterId) => {
        if (storyProgress.completedChapters.includes(chapterId)) return 'completed';
        const progress = storyProgress.chapterProgress[chapterId];
        if (progress?.revealedSentences?.length > 0) return 'in-progress';
        return 'unlocked';
    };

    return (
        <div className="play-config story-config">
            <h2 className="play-config-title">Story Mode</h2>
            <p className="mode-description">
                Progress through chapters in order. Each chapter tells a part of the story.
            </p>

            <div className="chapters-list">
                {chapters.map((chapter, index) => {
                    const locked = isChapterLocked(chapter.id, index);
                    const status = getChapterStatus(chapter.id);
                    const progress = storyProgress.chapterProgress[chapter.id]?.revealedSentences?.length || 0;
                    const total = chapter.sentences.length;

                    return (
                        <div
                            key={chapter.id}
                            className={`chapter-option ${locked ? 'locked' : ''} ${selectedChapter === chapter.id ? 'selected' : ''}`}
                            onClick={() => !locked && setSelectedChapter(chapter.id)}
                        >
                            <div className="chapter-option-header">
                                <span className="chapter-option-number">Chapter {chapter.id}</span>
                                {locked && <span className="chapter-option-lock">🔒</span>}
                                {status === 'completed' && <span className="chapter-option-complete">✅</span>}
                                {status === 'in-progress' && <span className="chapter-option-progress">📖</span>}
                            </div>
                            <h3 className="chapter-option-title">{chapter.title}</h3>
                            {!locked && progress > 0 && (
                                <div className="chapter-option-progress-bar">
                                    <div
                                        className="chapter-option-progress-fill"
                                        style={{ width: `${(progress / total) * 100}%` }}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <button
                type="button"
                className="btn btn-primary btn-full"
                onClick={() => onStart(selectedChapter)}
                disabled={!selectedChapter}
            >
                Continue Story
            </button>
        </div>
    );
}