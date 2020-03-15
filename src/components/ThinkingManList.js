import React from 'react';
import List from './List';

const ThinkingManList = ({ content, image }) => {
   const { title, listItems } = content
   return (
      <section className="thinking-man-list">
         <h3 className='wrapper'>{title}</h3>
         <List listItems={listItems} />
         <img src={image} alt={title} />
      </section>
   );
}

export default ThinkingManList;