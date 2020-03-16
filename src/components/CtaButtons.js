import React from 'react';
import { NavLink } from 'react-router-dom';

const CtaButtons = () => {
   return (
      <div className="cta-nav-btns">
         <NavLink to='/contact' className="start-now" >START NOW</NavLink>
         <NavLink to='/contact' className="learn-more" >LEARN MORE</NavLink>
         {/* <button className="start-now"></button> */}
         {/* <button className="learn-more"></button> */}
      </div>
   );
}

export default CtaButtons;