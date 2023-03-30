import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div >
                <a href="" hrref="/shop">shop</a>
                <a href="" hrref="/oredr">oreder</a>
                <a href="" hrref="/inventory">inventory</a>
                <a href="" hrref="/login">Login</a>
            </div>
        </nav>

    );
};

export default Header;