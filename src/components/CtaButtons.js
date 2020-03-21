import React from 'react';
import { Link } from 'react-router-dom';

const CtaButtons = () => {
   return (
      <div className="cta-nav-btns">
         <Link to='/contact' className="start-now" >START NOW</Link>
         <Link to='/strategy' className="learn-more" >LEARN MORE</Link>
      </div>
   );
}

export default CtaButtons;