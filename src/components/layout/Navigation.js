// src/components/layout/Navigation.js
import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Navigation() {
  const { currentPage, setCurrentPage } = useApp();

  const navItems = [
    { id: 'play', label: 'Play' },
    { id: 'chapters', label: 'Chapters' },  // Changed from 'levels' or 'sentences'
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <nav className="nav" aria-label="Main">
      {navItems.map(item => (
        <a
          key={item.id}
          href="#"
          className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(item.id);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}