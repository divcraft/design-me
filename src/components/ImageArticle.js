import React from 'react';
import Article from './Article';
import Image from './Image';

const ImageArticle = ({ content, images }) => {
   const { title, text } = content
   return (
      <section className="text-article">
         <Article title={title} text={text} />
         <Image srcSet={`${images[0]} 768w, ${images[1]} 1366w, ${images[2]} 1920w`} alt={title} />
      </section>
   );
}

export default ImageArticle;   