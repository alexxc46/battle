import React, { useState, useEffect } from 'react';
import Cell from '../Cell';
import './index.css';

const Board = () => {
  const rows = 10;
  const cols = 10; 

  const [clickedCell, setClickedCell] = useState(null);

  // useEffect(() => {
  //   console.log(clickedCell)
  // }, [clickedCell])

  const handleClick = (x, y, evt) => {
    console.log('event happened')
    // event.stopPropagation(); // Stop event propagation to the board
    // setClickedCell({ x, y });
  };

  return (
    <div className="board" onClick={() => console.log('click on the board fierfd')}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} x={rowIndex} y={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;