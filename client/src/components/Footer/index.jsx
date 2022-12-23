import React from "react";
import './assets/css/footer.css';

const Footer = (props) => {

    return(
        <footer>
            <p className="copyright">©2022 Kaileb Hammontree. All rights reserved.</p>
            {props.photoCredit}
        </footer>
    )
}

export default Footer;