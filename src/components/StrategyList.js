import React from 'react';
import StrategyListItem from './StrategyListItem';


const StrategyList = ({ strategyList, images }) => {
   const StrategyListItems = strategyList.map(item => {
      const image = images.filter(image => images.indexOf(image) === strategyList.indexOf(item))
      return (
         <StrategyListItem key={item.id} title={item.title} src={image} alt={item.title} text={item.text} />
      )
   })
   return (
      <section className="strategy-list wrapper">
         <ul>
            {StrategyListItems}
         </ul>
      </section>
   );
}

export default StrategyList;