import React from 'react';
import SectionTitle1 from './SectionTitle1';
import Image from './Image';
import Paragraph from './Paragraph';

const StrategyListitem = ({ title, src, alt, text }) => {
   return (
      <li>
         <SectionTitle1 title={title} />
         <Image src={src} alt={alt} />
         <Paragraph text={text} />
      </li>)
}

export default StrategyListitem;