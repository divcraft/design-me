import React from 'react';

const BenefitsTile = ({ title, text }) => {
   return (
      <div className='tile'>
         <h4>{title}</h4>
         <p>{text}</p>
      </div>
   );
}

export default BenefitsTile;