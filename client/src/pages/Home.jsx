import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../assets/css/Home.css";
import promo from "../assets/videos/promo-intervella.mp4";

const Home = () => {

    return (
        <>
            <Navbar 
            home={<Link className='nav-link' to={'/'}>Home</Link>} 
            login={<Link className='nav-link' to={'/login'}>Login</Link>} 
            signup={<Link className='nav-link' to={'/signup'}>Sign Up</Link>}
            />
            <main className="video-container">
                <video className="home-video" src={promo} autoPlay loop muted />
            </main>
            {/* TODO: Create function to render a photo credit component (also create component) */}
            <Footer photoCredit={<button className="photo-credit" onClick={'Some function to show the photo credits'}>Photo Credits</button>} />
        </>
    )
};

export default Home;