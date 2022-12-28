// TODO: Bug found, can login/ be redirected to dashboard without entering in correct credentials... need to only save a token if correct credentials were entered

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Auth from "../utils/auth";
import { loginUser } from "../utils/API";

import '../assets/css/Login.css';

import whiteLight from '../assets/videos/white-light.mp4';

const Login = () => {

  // use state to track login form's updated value
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  // function that allows user to login
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(loginForm.email, loginForm.password);

    if (response.ok) {
      alert('You are now logged in!')
    } else {
      alert('Something went wrong, please check your email and/or password for accuracy.')
    }

    const { token } = await response.json();
    Auth.login(token);

    setLoginForm({
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
      <main className="login-main">
        <video className="bg-video" src={whiteLight} autoPlay loop muted />
        <section className="login-card">
          <form className="login-form" onSubmit={handleFormSubmit}>
            <input type="email" name="email" placeholder="email" value={loginForm.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="password" value={loginForm.password} onChange={handleChange} />
            <button type="submit">Log in</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )

}

export default Login;