import React from 'react';
import SectionTitle1 from './SectionTitle1';
import Paragraph from './Paragraph';

const Atricle = ({ title, text }) => {
   return (
      <article className="wrapper">
         <SectionTitle1 title={title} />
         <Paragraph text={text} />
      </article>
   );
}

export default Atricle;