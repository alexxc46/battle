import React from 'react';
import Figure from '../Figure';
import './index.scss';

const Cell = ({ onClick, x, y, clickedCell, figure }) => {
  const hiddenCells = [[4, 2], [4, 3], [5, 2], [5, 3], [4, 6], [4, 7], [5, 6], [5, 7]];
  const isHidden = hiddenCells.find((cell) => cell[0] === x && cell[1] === y);
  const isActive = x === clickedCell?.x && y === clickedCell?.y;

  return (
    <div className={`cell ${isActive && 'is-active'} ${isHidden && 'is-hidden'}`} onClick={() => onClick(x, y, isHidden)}>
        {figure ? <Figure title={figure.title} /> : `(${x}, ${y})`} 
    </div>
  );
};

export default Cell;