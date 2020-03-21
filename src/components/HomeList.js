import React from 'react';
import HomeListItem from './HomeListItem';

const HomeList = ({ listItems }) => {
   const homeListItems = listItems.map(item => (
      <HomeListItem key={listItems.indexOf(item)} text={item} />
   ))
   return (
      <ul>
         {homeListItems}
      </ul>
   );
}

export default HomeList; 