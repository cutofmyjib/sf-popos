import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main CSS file we have in the styles directory.
 */
import './styles/main.css';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import Root from './containers/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
