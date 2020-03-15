import React from 'react';

const List = ({ listItems }) => {
   const items = listItems.map(item => (
      <li>{item}</li>
   ))
   return (
      <ul>
         {items}
      </ul>
   );
}

export default List;