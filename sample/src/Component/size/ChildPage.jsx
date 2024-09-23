// ChildPage.js
import React from 'react';
import { useFontSize } from './FontSizeContext';

const ChildPage = () => {
  const { fontSize } = useFontSize();

  return (
    <div style={{ fontSize }}>
      <h2>Child Page</h2>
      <p>This is a child page with adjustable font size.</p>
    </div>
  );
};

export default ChildPage;