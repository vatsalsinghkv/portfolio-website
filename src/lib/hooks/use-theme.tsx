'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const initialState = {
  isDarkMode: false,
  toggle: () => {
    return;
  },
  enableDarkMode: (_: boolean) => {
    return;
  },
  disableDarkMode: (_: boolean) => {
    return;
  },
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      try {
        return JSON.parse(stored);
      } catch {
        return false;
      }
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggle = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const enableDarkMode = useCallback(() => {
    setIsDarkMode(true);
  }, []);

  const disableDarkMode = useCallback(() => {
    setIsDarkMode(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggle,
        enableDarkMode,
        disableDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
