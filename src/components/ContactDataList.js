import React from 'react';
import ContactDataListItem from './ContactDataListItem';

const ContactDataList = ({ innerData }) => {
   const contactDataListItems = innerData.map(data => (
      <ContactDataListItem key={innerData.indexOf(data)} data={data} />
   ))
   return (
      <ul>
         {contactDataListItems}
      </ul>
   );
}

export default ContactDataList;