import React from 'react';
import SectionTitle1 from './SectionTitle1';
import Paragraph from './Paragraph';

const FAQListItem = ({ title, text }) => {
   return (
      <li>
         <SectionTitle1 title={title} />
         <Paragraph text={text} />
      </li>
   );
}

export default FAQListItem;