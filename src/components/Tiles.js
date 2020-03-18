import React from 'react';
import Tile from './Tile';

const Tiles = ({ content }) => {
   console.log(content)
   const tiles = content.map(tile => (
      <Tile key={tile.id} title={tile.title} text={tile.text} />
   ))
   return (
      <section className="tiles wrapper">
         {tiles}
      </section>
   );
}

export default Tiles;