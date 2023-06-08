import React from 'react';
import Cell from '../Cell';
import './index.css';

const Board = () => {
  const rows = 10;
  const cols = 10;

  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} x={colIndex} y={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;