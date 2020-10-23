import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './resources/views/auth/login';
import Dashboard from './resources/views/dashboard/dashboard';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
