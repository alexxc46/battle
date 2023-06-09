import React from 'react';
import './index.css';

const Cell = ({ x, y }) => { 
  const hiddenCells = [[4, 2], [4, 3], [5, 2], [5, 3], [4, 6], [4, 7], [5, 6], [5, 7]]
  const isHidden = hiddenCells.find(cell => cell[0] === x && cell[1] === y);
  const handleClick = (e) => {
    console.log('lcick handleds')
    e.stopPropagation()
  }
  return (
    <div onClick={handleClick} className='cell'>
      <div className={`${isHidden && 'not-active'}`}> 
      [{x}, {y}]
      </div>
    </div>
  );
};

export default Cell;