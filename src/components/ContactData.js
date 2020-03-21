import React from 'react';
import SectionTitle1 from './SectionTitle1';
import ContactTiles from './ContactTiles';
import Image from './Image';

const ContactData = ({ content, img }) => {
   const { headerTitle, secondTitle, contactData } = content
   return (
      <section className="contact-data wrapper">
         <SectionTitle1 title={secondTitle} />
         <ContactTiles contactData={contactData} />
         <Image src={img} alt={headerTitle} />
      </section>
   );
}

export default ContactData;