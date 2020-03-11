import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

const Logo = () => {
    return (
        <NavLink to='/'>
            <img className='logo' src={logo} alt="logo" />
        </NavLink>
    );
}

export default Logo;