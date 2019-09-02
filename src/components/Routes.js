import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places.js';


class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Places} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;