import React from 'react';
import content from '../content/contentStrategy';
import img1 from '../images/illustration1-768.jpg';
import img2 from '../images/illustration2-768.jpg';
import img3 from '../images/illustration3-768.jpg';
import img4 from '../images/illustration4-768.jpg';
import img5 from '../images/illustration5-768.jpg';
import img6 from '../images/illustration6-768.jpg';
import NavBar from '../components/NavBar';
import TitleAll from '../components/TitleAll';
import StrategyList from '../components/StrategyList';
import Footer from '../components/Footer';

const StrategyPage = () => {
    const images = [img1, img2, img3, img4, img5, img6]
    return (
        <>
            <header>
                <NavBar />
                <TitleAll title={content.headerTitle} />
            </header>
            <main>
                <StrategyList strategyList={content.strategyList} images={images} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default StrategyPage;