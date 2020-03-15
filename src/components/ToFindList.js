import React from 'react';
import List from './List';

const ToFindList = ({ content }) => {
   const { title, listItems } = content
   return (
      <section className='to-find-list'>
         <div className="wrapper">
            <h3>{title}</h3>
            <List listItems={listItems} />
         </div>
      </section>
   );
}

export default ToFindList;