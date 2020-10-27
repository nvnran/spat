import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
 * @ All pages Import
 */
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + '/'}`}
          component={Login}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + '/home'}`}
          component={Home}
        />
      </Switch>
    </Router>
  );
};

export default App;
