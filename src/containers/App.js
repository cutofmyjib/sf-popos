import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { children } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">
          <div id="main-app-title">
            <h1>SF Privately Owned Public Open Spaces</h1>
          </div>
        </div>
        <div className="popo-container">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
};
