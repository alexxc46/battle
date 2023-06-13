import React from 'react';
import './index.scss';

const Cell = ({ onClick, x, y, clickedCell }) => {
  const hiddenCells = [[4, 2], [4, 3], [5, 2], [5, 3], [4, 6], [4, 7], [5, 6], [5, 7]]
  const isHidden = hiddenCells.find(cell => cell[0] === x && cell[1] === y);
  const isActive = x === clickedCell?.x && y === clickedCell?.y
  
  return (
    <div className={`cell ${isActive && 'is-active'}`}  onClick={() => onClick(x, y, isHidden)}>
      <div className={`${isHidden && 'is-hidden'}`}> 
      [{x}, {y}]
      </div>
    </div>
  );
};

export default Cell;