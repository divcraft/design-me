import React from 'react';
import Article from './Article';
import CtaButtons from './CtaButtons';

const BtnArticle = ({ content }) => {
   const { title, text } = content
   return (
      <section className="text-article">
         <Article title={title} text={text} />
         <CtaButtons />
      </section>
   );
}

export default BtnArticle;   