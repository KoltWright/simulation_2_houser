import React from 'react';
import {Switch, Route} from "react-router-dom";

import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';


export default (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/dashboard" component={Dashboard}/>
  </Switch>
)
