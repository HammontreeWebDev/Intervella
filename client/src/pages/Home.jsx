import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/css/Home.css";
import promo from "../assets/videos/promo-intervella.mp4";

const Home = () => {

    return(
        <>
        <Navbar />
        <main className="video-container">
        <video src={promo} autoPlay loop muted/>
        </main>
        <Footer />
        </>
    )
};

export default Home;