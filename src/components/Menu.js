import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='main-menu'>
            <ul>
                <li><NavLink to='/' exact>Home</NavLink></li>
                <li><NavLink to='/strategy'>Strategy</NavLink></li>
                <li><NavLink to='/faq'>FAQ</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;