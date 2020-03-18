import React from 'react';
import '../styles/ContactPage.sass'
import content from '../content/contentContact';
import img from '../images/contact-img-768.jpg'
import NavBar from '../components/NavBar';
import TitleAll from '../components/TitleAll';
import ContactData from '../components/ContactData';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <>
            <header>
                <NavBar />
                <TitleAll title={content.headerTitle} />
            </header>
            <main>
                <ContactData content={content} img={img} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default ContactPage;