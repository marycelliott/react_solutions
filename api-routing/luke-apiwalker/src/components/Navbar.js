import React from 'react';
import Form from './Form';

const Navbar = () => {
    return (
        <nav className="purple darken-4" style={{marginBottom: '2em'}}>
            <div className="container">
            <div class="nav-wrapper">
            <span class="brand-logo right">SWAPI.co</span>
            <Form />
            </div>
            </div>
        </nav>
    )
}

export default Navbar;