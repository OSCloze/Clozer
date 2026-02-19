// src/components/play/PracticeSetup.js
import React, { useState, useEffect } from 'react';
import { getAvailableTopics, getTopicDisplayName } from '../../utils/topicHelpers';

export default function PracticeSetup({ onStart, completedChapters }) {
    const [selectedTopic, setSelectedTopic] = useState('all');
    const [sessionSize, setSessionSize] = useState(5);
    const [availableTopics, setAvailableTopics] = useState(['all']);

    // Safety check: ensure completedChapters is an array
    const safeCompletedChapters = Array.isArray(completedChapters) ? completedChapters : [];

    // Update available topics when completed chapters change
    useEffect(() => {
        const topics = getAvailableTopics(safeCompletedChapters);
        const topicOptions = ['all', ...topics];
        setAvailableTopics(topicOptions);

        // Reset selected topic if it's no longer available
        if (selectedTopic !== 'all' && !topics.includes(selectedTopic)) {
            setSelectedTopic('all');
        }
    }, [safeCompletedChapters]);

    return (
        <div className="play-config">
            <h2 className="play-config-title">Practice Mode</h2>
            <p className="mode-description">
                Practice sentences from completed chapters.
            </p>

            <div className="play-config-row">
                <label htmlFor="topicFilter" className="play-config-label">
                    Topic
                </label>
                <select
                    id="topicFilter"
                    className="play-config-select"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                >
                    {availableTopics.map(topic => (
                        <option key={topic} value={topic}>
                            {topic === 'all' ? 'All Topics' : getTopicDisplayName(topic)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="play-config-row">
                <label htmlFor="sessionSize" className="play-config-label">
                    Number of questions
                </label>
                <select
                    id="sessionSize"
                    className="play-config-select"
                    value={sessionSize}
                    onChange={(e) => setSessionSize(Number(e.target.value))}
                >
                    <option value={5}>5 questions</option>
                    <option value={10}>10 questions</option>
                    <option value={20}>20 questions</option>
                </select>
            </div>

            <button
                type="button"
                className="btn-primary"
                onClick={() => onStart(selectedTopic, sessionSize)}
            >
                Start Practice
            </button>
        </div>
    );
}