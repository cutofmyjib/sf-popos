import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import { NotFoundView, Popos, PopoView, Header } from '../components';
import { browserHistory } from 'react-router';

export default () =>
  <Router history={browserHistory}>
    {/* 'App' acts as a wrapper for the child components */}
    <Route path="/" component={App}>
      {/* IndexRoute is the initial component that is loaded,
          other routes are loaded according to the component
          property specified here */}
      <IndexRoute component={Popos}/>
      <Route path="popos/:popoId" component={PopoView}/>
      <Route path="*" component={NotFoundView} />
    </Route>
  </Router>;
