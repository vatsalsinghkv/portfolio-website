import { createContext, useCallback, useEffect, useState } from 'react';

const initialState = {
  isDark: false,
  toggleTheme: () => {},
  setIsDarkMode: (_: boolean) => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>();

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const setIsDarkMode = useCallback((theme: boolean) => {
    setIsDark(theme);
  }, []);

  // SETTING THEMES ACCORDING TO DEVICE
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDarkMode(true);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setIsDarkMode(e.matches);
      });
  }, [setIsDarkMode]);

  useEffect(() => {
    if (isDark === undefined) return;

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark === undefined ? false : isDark,
        toggleTheme,
        setIsDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext as default, ThemeProvider };
