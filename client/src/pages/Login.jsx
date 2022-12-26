import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../assets/css/Login.css';

const Login = () => {

    return(
        <>
        <Navbar />
        <main className="login-main">
            <section className="login-card">
                <form className="login-form" action="">
                    <input type="email" name="email" placeholder="email"/>
                    <input type="password" name="password" placeholder="password"/>
                    <button type="submit">Log in</button>
                </form>
            </section>
        </main>
        <Footer />
        </>
    )

}

export default Login;