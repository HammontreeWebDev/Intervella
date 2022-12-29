import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import '../assets/css/Dashboard.css';

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import CreateWorkout from "../components/CreateWorkout";
import MyWorkouts from "../components/MyWorkouts";

// ! any route that has authmiddleware you will need to getToken() to authenticate --> refer to googlebooks HW in api.js --> needs authorization header with bearer token

// *Timer comp will default to default workout but needs to change depending on whats selected in the my workouts component

const Dashboard = () => {

    const [showCreate, setShowCreate] = useState(false);
    const [showWorkouts, setShowWorkouts] = useState(false);
    const [showTimer, setShowTimer] = useState(true);

    const handleHomeClick = () => {
        setShowTimer(true);
        setShowCreate(false);
        setShowWorkouts(false);
    }

    const handleCreateClick = () => {
        setShowCreate(true);
        setShowWorkouts(false);
        setShowTimer(false);
    }

    const handleMyWorkoutsClick= () => {
        setShowWorkouts(true);
        setShowCreate(false);
        setShowTimer(false);
    }

    return (
        <>
            <Navbar
                home={<Link className='nav-link' to={'/dashboard'} onClick={handleHomeClick}>Home</Link>}

                logout={<Link className="nav-link" to={'/'} onClick={Auth.logout}>Log Out</Link>}

                createWorkout={<button className="nav-link" onClick={handleCreateClick}>Create</button>}

                myWorkouts={<button className="nav-link" onClick={handleMyWorkoutsClick}>Workouts</button>}
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
            <section>
                {showTimer ? <Timer /> : null}
                {showCreate ? <CreateWorkout /> : null}
                {showWorkouts ? <MyWorkouts /> : null}
            </section>
            </main>
            <Footer />
        </>
    )
}

export default Dashboard;