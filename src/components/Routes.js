import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places.js';
import Place from './Place';


class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/place' component={Place} />
          <Route path='/' component={Places} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;