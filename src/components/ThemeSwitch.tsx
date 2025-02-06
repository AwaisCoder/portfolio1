import React from 'react';
import { Moon, Sun, Cloud } from 'lucide-react';

interface ThemeSwitchProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export function ThemeSwitch({ isDarkMode, toggleTheme }: ThemeSwitchProps) {
    return (
        <button
            onClick={toggleTheme}
            className={`
        relative w-20 h-10 rounded-full p-1
        transition-colors duration-500 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        ${isDarkMode ? 'bg-indigo-900' : 'bg-sky-400'}
      `}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-full">
                {/* Stars */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full animate-twinkle"
                            style={{
                                width: Math.random() * 2 + 1 + 'px',
                                height: Math.random() * 2 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                {/* Clouds */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
                    {[...Array(3)].map((_, i) => (
                        <Cloud
                            key={i}
                            className="absolute text-white animate-float fill-white"
                            size={24}
                            style={{
                                top: `${10 + Math.random() * 40}%`,
                                left: `${20 + i * 25}%`,
                                animationDelay: `${i * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Toggle switch */}
            <div
                className={`
          relative w-8 h-8 rounded-full shadow-md
          transform transition-all duration-500 ease-in-out
          ${isDarkMode ? 'translate-x-10 bg-indigo-200' : 'translate-x-0 bg-yellow-300'}
        `}
            >
                {isDarkMode ? (
                    <Moon className="absolute inset-1 text-indigo-800" />
                ) : (
                    <Sun className="absolute inset-1 text-yellow-600" />
                )}
            </div>
        </button>
    );
}

