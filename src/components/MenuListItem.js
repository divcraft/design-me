import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuListItem = ({ link, pageName, exact }) => {
   return (
      <li>
         <NavLink to={link} exact={exact ? exact : null}>
            {pageName}
         </NavLink>
      </li>
   );
}

export default MenuListItem;