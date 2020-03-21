import React from 'react';

const Image = ({ src, srcSet, alt }) => {
   return (
      <img src={src ? src : null} srcSet={srcSet ? srcSet : null} alt={alt} />
   );
}

export default Image;