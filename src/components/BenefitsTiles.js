import React from 'react';
import BenefitsTile from './BenefitsTile';

const BenefitsTiles = ({ content }) => {
   const tiles = content.map(tile => (
      <BenefitsTile key={tile.id} title={tile.title} text={tile.text} />
   ))
   return (
      <section className="tiles wrapper">
         {tiles}
      </section>
   );
}

export default BenefitsTiles;