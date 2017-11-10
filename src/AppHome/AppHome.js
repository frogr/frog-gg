import React, { Component } from 'react';
import { AppNav } from '../Global/AppNav.js';
import { Footer } from '../Global/Footer.js';

class AppHome extends Component {
  render() {
    return (
      <div>
        <AppNav />
        <Footer />
      </div>
    );
  }
}

export default AppHome;
