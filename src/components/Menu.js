import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from '../images/menu-icon.svg';

class Menu extends Component {
    state = {
        menuActive: false
    }
    handleMenuClick = () => {
        this.setState({
            menuActive: !this.state.menuActive
        })
    }
    render() {
        return (
            <nav className='main-menu'>
                <button className='menu-icon' onClick={this.handleMenuClick}><img src={menuIcon} alt="menu" /></button>
                <ul className={this.state.menuActive ? 'active' : null}>
                    <li><NavLink to='/' exact>Home</NavLink></li>
                    <li><NavLink to='/strategy'>Strategy</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;