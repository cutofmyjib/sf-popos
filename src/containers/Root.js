import React, { Component } from 'react';
import Routes from '../routes';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  render() {
    return <Routes />;
  }
};
