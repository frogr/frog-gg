import React, { Component } from 'react';
import SplashBody from './SplashBody.js';
import Registration from './Registration.js';
import { Footer } from '../Global/Footer.js';
import { NavBar } from '../Global/Navbar.js';
import { Login } from '../Global/Login.js';
import './Splash.css';

class SplashApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SplashBody />
        <Registration />
        <Footer />
        <Login />
      </div>
    );
  }
}

export default SplashApp;
