import React from 'react';
import menuLinks from '../content/menuLinks'
import MenuListItem from './MenuListItem';


const MenuList = ({ className }) => {
   const items = menuLinks.map(link => (
      <MenuListItem key={link.id} link={link.path} pageName={link.pageName} exact={link.exact} />
   ))
   return (
      <ul className={className}>
         {items}
      </ul>
   );
}

export default MenuList;