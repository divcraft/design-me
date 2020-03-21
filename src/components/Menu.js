import React, { Component } from 'react';
import menuIcon from '../images/menu-icon.svg';
import MenuButton from './MenuButton';
import MenuList from './MenuList';

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
            <nav className='nav-menu'>
                <MenuButton onClick={this.handleMenuClick} menuIcon={menuIcon} />
                <MenuList className={this.state.menuActive ? 'active' : null} />
            </nav>
        );
    }
}

export default Menu;