// FontSizeContext.js
import React, { createContext, useState, useContext } from 'react';

const FontSizeContext = createContext();

export const useFontSize = () => useContext(FontSizeContext);

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('16px'); // Default font size

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};