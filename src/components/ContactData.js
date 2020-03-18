import React from 'react';

const ContactData = ({ content, img }) => {
   const { headerTitle, secondTitle, contactData } = content
   const list = contactData.map(item => {
      const itemData = item.data
      const datas = itemData.map(data => (<li key={itemData.indexOf(data)}>{data}</li>))
      return (
         <div className='tile' key={item.id}>
            <h4>{item.title}</h4>
            <ul>
               {datas}
            </ul>
         </div>
      )
   }
   )
   return (
      <section className="contact-data wrapper">
         <h3>{secondTitle}</h3>
         <ul className='tiles'>
            {list}
         </ul>
         <img src={img} alt={headerTitle} />
      </section>
   );
}

export default ContactData;