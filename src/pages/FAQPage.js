import React from 'react';
import '../styles/FAQPage.sass';
import content from '../content/contentFAQ'
import NavBar from '../components/NavBar';
import TitleAll from '../components/TitleAll';
import FAQList from '../components/FAQList';
import Footer from '../components/Footer';

const FAQPage = () => {
    return (
        <>
            <header>
                <NavBar />
                <TitleAll title={content.headerTitle} />
            </header>
            <main>
                <FAQList faqList={content.faqList} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default FAQPage;