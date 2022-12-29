import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signupUser } from "../utils/API";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import '../assets/css/Signup.css';

const Signup = () => {

    // use state to track signup form's updated value
    const [signupForm, setSignupForm] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignupForm({
            ...signupForm,
            [name]: value,
        });
    };

    // function that allows user to signup for a new account
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const response = await signupUser(signupForm.username, signupForm.email, signupForm.password);

        if (response.ok) {
            alert('You signed up for a new account!')
        } else {
            // TODO: find a way to personalize error msg based on error (i.e. invalid email, password, etc...)
            alert('Something went wrong, please try again.')
        }

        const { token } = await response.json();
        Auth.login(token);

        setSignupForm({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Navbar 
            home={<Link className='nav-link' to={'/'}>Home</Link>} 
            login={<Link className='nav-link' to={'/login'}>Login</Link>} 
            signup={<Link className='nav-link' to={'/signup'}>Sign Up</Link>}
            />
            
            {/* TODO: May want to consider changing class names just to avoid confusion - maybe make them more general or add same styling to signup.css for separation */}
            <main className="signup-main">
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
                <section className="signup-card">
                    <form className="signup-form" onSubmit={handleFormSubmit}>
                        <input className="signup-input" type="text" name="username" placeholder="Username" value={signupForm.username} onChange={handleChange} />
                        <input className="signup-input" type="email" name="email" placeholder="Email" value={signupForm.email} onChange={handleChange} />
                        <input className="signup-input" type="password" name="password" placeholder="Password" value={signupForm.password} onChange={handleChange} />
                        <button id="signup-button" type="submit">Sign up</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Signup;