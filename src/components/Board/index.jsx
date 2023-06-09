import React, { useState } from 'react';
import Cell from '../Cell';
import './index.css';

const Board = () => {
  const rows = 10;
  const cols = 10; 

  const [clickedCell, setClickedCell] = useState(null);

  const handleClick = (x, y) => {
    console.log('Cell clicked:', x, y);
    setClickedCell({ x, y });
  };

  return (
    <div className="board" onClick={() => setClickedCell(null)}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              x={rowIndex}
              y={colIndex}
              onClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;