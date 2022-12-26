import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../assets/css/Signup.css';

const Signup = () => {

    

    return (
        <>
            <Navbar />
            {/* TODO: May want to consider changing class names just to avoid confusion - maybe make them more general or add same styling to signup.css for separation */}
            <main className="login-main">
                <section className="login-card">
                    <form className="login-form">
                        <input type="text" name="username" placeholder="username" />
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="password" />
                        <button type="submit">Sign up</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Signup;