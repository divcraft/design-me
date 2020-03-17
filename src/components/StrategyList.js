import React from 'react';

const StrategyList = ({ strategyList, images }) => {
   const listItems = strategyList.map(item => {
      const image = images.filter(image => images.indexOf(image) === strategyList.indexOf(item))
      return (
         <li key={item.id}>
            <h3>{item.title}</h3>
            <img src={image} alt={item.title} />
            <p>{item.text}</p>
         </li>)
   })
   return (
      <section className="strategy-list wrapper">
         <ul>
            {listItems}
         </ul>
      </section>
   );
}

export default StrategyList;