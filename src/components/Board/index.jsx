import React, { useState } from 'react';
import Cell from '../Cell';
import './index.scss';

const Board = () => {
  const rows = 10;
  const cols = 10; 

  const [clickedCell, setClickedCell] = useState([]);

  // reference to this function is passed to a component and called from there
  const handleClick = (x, y, isHidden) => {
    if(!!isHidden) return 
    
    setClickedCell({ x, y });
  }

  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              x={rowIndex}
              y={colIndex}
              onClick={handleClick}
              clickedCell={clickedCell}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;