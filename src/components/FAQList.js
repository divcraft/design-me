import React from 'react';
import FAQListItem from './FAQListItem';

const FAQList = ({ faqList }) => {
   const list = faqList.map(item => (
      <FAQListItem key={item.id} title={item.title} text={item.text} />
   ))
   return (
      <section className="faq-list wrapper">
         <ul>
            {list}
         </ul>
      </section>
   );
}

export default FAQList;