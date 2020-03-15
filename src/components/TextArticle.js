import React from 'react';

const TextArticle = ({ content, images }) => {
   const { title, text } = content
   return (
      <section className="text-article">
         <article className="wrapper">
            <h3>{title}</h3>
            <p>{text}</p>
         </article>
         <img srcSet={`${images[0]} 768w, ${images[1]} 1366w, ${images[2]} 1920w`} alt={title} />
      </section>
   );
}

export default TextArticle;   