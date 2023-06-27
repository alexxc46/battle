import React, { useState } from 'react';
import Cell from '../Cell';
import shuffleFigures from './shuffleFigures';
import './index.scss';

const Board = () => {
  const rows = 10;
  const cols = 10; 

  const [clickedCell, setClickedCell] = useState([]);
  const [cells, setCells] = useState(getInitialCells());

  // reference to this function is passed to a component and called from there
  const handleClick = (x, y, isHidden) => {
    if(!!isHidden) return 
    
    setClickedCell({ x, y });
  }

  // Generate initial cells with shuffled figures
  function getInitialCells() {
    const { player1Figures, player2Figures } = shuffleFigures();
    console.log(player1Figures[0]);
    const cells = [];

    for (let i = 0; i < rows; i++) {
      cells[i] = [];
      for (let j = 0; j < cols; j++) {
        let figure = null;
        if (i < 4) {
          figure = player1Figures.pop();
        } else if (i > 5) {
          figure = player2Figures.pop();
        }
        cells[i][j] = { x: i, y: j, figure };
      }
    }

    return cells;
  }

  return (
    <div className="board">
      {cells.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell) => (
            <Cell
              key={`${cell.x}-${cell.y}`}
              x={cell.x}
              y={cell.y}
              onClick={handleClick}
              clickedCell={clickedCell}
              figure={cell.figure}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;