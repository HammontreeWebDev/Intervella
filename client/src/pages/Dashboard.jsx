import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

// ! any route that has authmiddleware you will need to getToken() to authenticate --> refer to googlebooks HW in api.js --> needs authorization header with bearer token

const Dashboard = () => {

    return(
        <>
        <Navbar
        home={<Link className='nav-link' to={'/dashboard'}>Home</Link>}
        logout={<Link className="nav-link" to={'/'} onClick={Auth.logout}>Log Out</Link>}
        />
        <main>
        </main>
        <Footer />
        </>
    )
}

export default Dashboard;