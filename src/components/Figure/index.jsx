import React from 'react';
import './index.scss';

const Figure = ({title}) => {
  return (
    <div className='figure'>
      <p>{title}</p>
    </div>
  );
}

export default Figure;