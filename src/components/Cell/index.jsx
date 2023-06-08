import React from 'react';
import './index.css';

const Cell = ({ x, y, isHidden }) => { 

  return (
    <div className={`${isHidden && 'not-active'} cell`}>
      ({x}, {y})
    </div>
  );
};

export default Cell;