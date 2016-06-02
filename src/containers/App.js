import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { children } = this.props;
    return (
      <div className="main-app-container">
        <div className="header-div">
          <span className="header-sub">SAN FRANCISCO</span>
          <h1 className="header-title">Privately Owned Public Open Spaces</h1>
          <p>POPOS are private rooftop gardens, plazas and seating areas that are private property but are mandated for public use.</p>
        </div>
        {children}
        <Footer />
      </div>
    );
  }
};
