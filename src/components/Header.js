import React from 'react';
import '../styles/main.css'
import Logo from '../components/Logo';
import Menu from '../components/Menu';

const Header = () => {
    return (
        <div className='header wrapper'>
            <Logo />
            <Menu />
        </div>
    );
}

export default Header;