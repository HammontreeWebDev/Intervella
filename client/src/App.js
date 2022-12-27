import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './utils/auth';
import { Navigate } from "react-router-dom";

/// Pages ///
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={Auth.loggedIn() ? <Navigate to='/dashboard' replace={true} /> : <Home />} />
      <Route path='/login' element={Auth.loggedIn() ? <Navigate to='/dashboard' replace={true} /> : <Login />} />
      <Route path='/signup' element={Auth.loggedIn() ? <Navigate to='/dashboard' replace={true} /> : <Signup />} />
      <Route path='/dashboard' element={Auth.loggedIn() ? <Dashboard /> : <Navigate to='/login' replace={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
