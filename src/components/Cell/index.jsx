import React from 'react';
import './index.css';

const Cell = ({ x, y }) => {
  return (
    <div className="cell">
      Cell at ({x}, {y})
    </div>
  );
};

export default Cell;