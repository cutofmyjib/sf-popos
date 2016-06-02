import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { children } = this.props;
    return (
      <div className="main-app-container">
        {children}
        <Footer />
      </div>
    );
  }
};
