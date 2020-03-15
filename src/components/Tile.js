import React from 'react';

const Tile = ({ title, text }) => {
   return (
      <div className='tile'>
         <h4>{title}</h4>
         <p>{text}</p>
      </div>
   );
}

export default Tile;