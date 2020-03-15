import React from 'react';
import '../styles/HomePage.sass';
import content from '../content/contentHome.js'
import img1Small from '../images/home-img1-768.jpg';
import img1Medium from '../images/home-img1-1366.jpg';
import img1Large from '../images/home-img1-1920.jpg';
import img2Small from '../images/home-img2-768.jpg';
import img2Medium from '../images/home-img2-1366.jpg';
import img2Large from '../images/home-img2-1920.jpg';
import manImg from '../images/man-img.jpg';
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Tiles from '../components/Tiles'
import TextArticle from '../components/TextArticle'
import ThinkingManList from '../components/ThinkingManList'
import ToFindList from '../components/ToFindList'
import Footer from '../components/Footer'

const HomePage = () => {
   const img1 = [img1Small, img1Medium, img1Large]
   const img2 = [img2Small, img2Medium, img2Large]
   return (
      <>
         <header className="banner-container">
            <NavBar />
            <Banner />
         </header>
         <main>
            <Tiles content={content.tiles} />
            <TextArticle content={content.article1} images={img1} />
            <ThinkingManList content={content.thinkingManList} image={manImg} />
            <ToFindList content={content.toFindList} />
            <TextArticle content={content.article2} images={img2} />
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

export default HomePage;