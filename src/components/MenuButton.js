import React from 'react';
import Image from './Image';

const MenuButton = ({ onClick, menuIcon }) => {
   return (
      <button className='menu-icon' onClick={onClick}>
         <Image src={menuIcon} alt='menu' />
      </button>
   );
}

export default MenuButton;