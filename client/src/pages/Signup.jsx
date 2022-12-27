import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signupUser } from "../utils/API";
import Auth from "../utils/auth";

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
            <Navbar />
            {/* TODO: May want to consider changing class names just to avoid confusion - maybe make them more general or add same styling to signup.css for separation */}
            <main className="login-main">
                <section className="login-card">
                    <form className="login-form" onSubmit={handleFormSubmit}>
                        <input type="text" name="username" placeholder="username" value={signupForm.username} onChange={handleChange} />
                        <input type="email" name="email" placeholder="email" value={signupForm.email} onChange={handleChange} />
                        <input type="password" name="password" placeholder="password" value={signupForm.password} onChange={handleChange} />
                        <button type="submit">Sign up</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Signup;