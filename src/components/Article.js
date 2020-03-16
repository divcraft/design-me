import React from 'react';

const Atricle = ({ title, text }) => {
   return (
      <article className="wrapper">
         <h3>{title}</h3>
         <p>{text}</p>
      </article>
   );
}

export default Atricle;