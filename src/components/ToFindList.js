import React from 'react';
import SectionTitle1 from './SectionTitle1';
import HomeList from './HomeList';

const ToFindList = ({ content }) => {
   const { title, listItems } = content
   return (
      <section className='to-find-list'>
         <div className="wrapper">
            <SectionTitle1 title={title} />
            <HomeList listItems={listItems} />
         </div>
      </section>
   );
}

export default ToFindList;