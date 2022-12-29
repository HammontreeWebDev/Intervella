import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import '../assets/css/Dashboard.css';

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ! any route that has authmiddleware you will need to getToken() to authenticate --> refer to googlebooks HW in api.js --> needs authorization header with bearer token

const Dashboard = () => {

    return (
        <>
            <Navbar
                home={<Link className='nav-link' to={'/dashboard'}>Home</Link>}

                logout={<Link className="nav-link" to={'/'} onClick={Auth.logout}>Log Out</Link>}

                createWorkout={<button className="nav-link">Create</button>}

                myWorkouts={<button className="nav-link">Workouts</button>}
            />
            <main>
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </main>
            <Footer />
        </>
    )
}

export default Dashboard;