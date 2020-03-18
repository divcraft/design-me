import React from 'react';

const FAQList = ({ faqList }) => {
   const list = faqList.map(item => (
      <li key={item.id}>
         <h3>{item.title}</h3>
         <p>{item.text}</p>
      </li>
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