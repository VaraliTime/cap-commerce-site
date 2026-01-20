import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Charger la préférence sauvegardée
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      const isDarkMode = JSON.parse(saved);
      setIsDark(isDarkMode);
      applyDarkMode(isDarkMode);
    }
  }, []);

  const applyDarkMode = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleDarkMode = () => {
    const newState = !isDark;
    setIsDark(newState);
    localStorage.setItem('darkMode', JSON.stringify(newState));
    applyDarkMode(newState);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
      title={isDark ? 'Mode clair' : 'Mode sombre'}
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-gray-600" />
      )}
    </button>
  );
};
