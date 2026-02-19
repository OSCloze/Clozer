import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navigation from './components/layout/Navigation';
import PlayPage from './pages/PlayPage';
import ChaptersPage from './pages/ChaptersPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function AppContent() {
  const { currentPage } = useApp();

  // Global Enter key handler
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Enter') {
        // Find the play page component and check if we're in a game
        const playPage = document.querySelector('[data-view="play"]');
        if (playPage && playPage.classList.contains('is-active')) {
          // Look for active buttons in the play page
          const checkButton = document.querySelector('#checkButton');
          const nextButton = document.querySelector('#nextButton');
          const postCheckRow = document.querySelector('.post-check-row');

          // If post-check row is visible, trigger next
          if (postCheckRow && !postCheckRow.hidden) {
            e.preventDefault();
            if (nextButton) {
              nextButton.click();
            }
          }
          // Otherwise, if check button is visible and enabled, trigger check
          else if (checkButton && !checkButton.disabled && !checkButton.hidden) {
            e.preventDefault();
            checkButton.click();
          }
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="app">
      <Navigation />
      <div className="content">
        {currentPage === 'play' && <PlayPage />}
        {currentPage === 'chapters' && <ChaptersPage />}
        {currentPage === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;