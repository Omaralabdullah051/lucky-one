import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className='nav-bar'>
            <h2><i>Laptop Store</i></h2>
            <div>
                <a href="/shop">Shop</a>
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
            </div>
        </nav>
    );
};

export default Header;