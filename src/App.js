import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import PlayPage from './pages/PlayPage';
import LevelsPage from './pages/LevelsPage';
import WordsPage from './pages/WordsPage';
import SettingsPage from './pages/SettingsPage';
import Navigation from './components/layout/Navigation';
import './App.css'; // Make sure this exists

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/game">
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/play" replace />} />
              <Route path="/play" element={<PlayPage />} />
              <Route path="/levels" element={<LevelsPage />} />
              <Route path="/words" element={<WordsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;