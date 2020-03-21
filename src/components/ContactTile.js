import React from 'react';
import SectionTitle2 from './SectionTitle2';
import ContactDataList from './ContactDataList';

const ContactTile = ({ title, innerData }) => {
   return (
      <div className='tile'>
         <SectionTitle2 title={title} />
         <ContactDataList innerData={innerData} />
      </div>
   );
}

export default ContactTile;