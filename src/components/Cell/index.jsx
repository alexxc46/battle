import React from 'react';
import './index.css';

const Cell = ({ onClick, x, y }) => {
  const hiddenCells = [[4, 2], [4, 3], [5, 2], [5, 3], [4, 6], [4, 7], [5, 6], [5, 7]]
  const isHidden = hiddenCells.find(cell => cell[0] === x && cell[1] === y);

  return (
    <div className="cell"  onClick={() => onClick(x, y)}>
      <div className={`${isHidden && 'not-active'}`}> 
      [{x}, {y}]
      </div>
    </div>
  );
};

export default Cell;