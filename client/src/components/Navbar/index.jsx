import React from "react";
import { Link } from "react-router-dom"
import './assets/css/navbar.css';

const Navbar = () => {

    return(
        <header className="custom-header">
        <nav className="custom-nav">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/login'}>Login</Link>
            <Link className='nav-link' to={'/signup'}>Sign Up</Link>
        </nav>
        </header>
    )
};

export default Navbar;

// TODO: margin error? can scroll right and there is white space