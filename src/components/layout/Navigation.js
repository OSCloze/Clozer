// src/components/layout/Navigation.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current path without slash
  const currentPath = location.pathname.substring(1) || 'play';

  const navItems = [
    { id: 'play', label: 'Play' },
    { id: 'levels', label: 'Levels' },  // Changed from 'chapters' to match routes
    { id: 'words', label: 'Words' },
    { id: 'settings', label: 'Settings' }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    navigate(`/${id}`);
  };

  return (
    <nav className="nav" aria-label="Main">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`/${item.id}`}
          className={`nav-link ${currentPath === item.id ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, item.id)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}