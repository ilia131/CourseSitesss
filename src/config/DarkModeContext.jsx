import React, { createContext, useContext, useState } from 'react';
import { useBgColor } from '../components/BgChangeAdmin/BgColorContext';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext)
};

export const DarkModeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const { setBgColor } = useBgColor();
  const toggleDarkMode = () => {
    setBgColor(isDarkMode ? "" : "#1f2937")
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark')
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider


