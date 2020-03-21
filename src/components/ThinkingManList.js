import React from 'react';
import SectionTitle1 from './SectionTitle1';
import HomeList from './HomeList';
import Image from './Image';

const ThinkingManList = ({ content, image }) => {
   const { title, listItems } = content
   return (
      <section className="thinking-man-list wrapper">
         <SectionTitle1 title={title} />
         <HomeList listItems={listItems} />
         <Image src={image} alt={title} />
      </section>
   );
}

export default ThinkingManList;