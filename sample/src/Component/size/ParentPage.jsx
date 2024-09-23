// ParentPage.js
import React from 'react';
import { useFontSize } from './FontSizeContext';
import ChildPage from './ChildPage';

const ParentPage = () => {
  const { fontSize, setFontSize } = useFontSize();

  return (
    <div>
      <h2>Parent Page</h2>
      <button onClick={() => setFontSize('20px')}>Increase Font Size</button>
      <button onClick={() => setFontSize('12px')}>Decrease Font Size</button>
      <ChildPage />
    </div>
  );
};

export default ParentPage;