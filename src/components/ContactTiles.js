import React from 'react';
import ContactTile from './ContactTile';

const ContactTiles = ({ contactData }) => {
   const contactTiles = contactData.map(item => {
      return (
         <ContactTile key={item.id} title={item.title} innerData={item.data} />
      )
   }
   )
   return (
      <div className='tiles'>
         {contactTiles}
      </div>
   )
}

export default ContactTiles;



