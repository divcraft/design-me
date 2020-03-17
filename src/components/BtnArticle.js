import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';

const BtnArticle = ({ content }) => {
   const { title, text } = content
   return (
      <section className="btn-article">
         <Article title={title} text={text} />
         <div className="cta-nav-btns">
            <Link to='/contact' className="start-now" >START NOW</Link>
            <Link to='/contact' className="learn-more" >LEARN MORE</Link>
         </div>
      </section>
   );
}

export default BtnArticle;   