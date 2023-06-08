import React from 'react';
import Cell from '../Cell';
import './index.css';

const Board = () => {
  const rows = 10;
  const cols = 10;

  const hiddenCells = [[4, 2], [4, 3], [5, 2], [5, 3], [4, 6], [4, 7], [5, 6], [5, 7]]
  const isHidden = (x, y) => hiddenCells.find(cell => cell[0] === x && cell[1] === y);

  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} x={colIndex} y={rowIndex} isHidden={isHidden(colIndex, rowIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;