import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/css/Home.css";
import promo from "../assets/videos/promo-intervella.mp4";

const Home = () => {

    return (
        <>
            <Navbar />
            <main className="video-container">
                <video src={promo} autoPlay loop muted />
            </main>
            {/* TODO: Create function to render a photo credit component (also create component) */}
            <Footer photoCredit={<button className="photo-credit" onClick={'Some function to show the photo credits'}>Photo Credits</button>} />
        </>
    )
};

export default Home;