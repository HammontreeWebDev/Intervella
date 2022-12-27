import React from "react";
import './assets/css/navbar.css';

const Navbar = (props) => {

    return(
        <header className="custom-header">
        <nav className="custom-nav">
            {props.home}
            {props.login}
            {props.signup}
            {props.logout}
        </nav>
        </header>
    )
};

export default Navbar;

// TODO: margin error? can scroll right and there is white space