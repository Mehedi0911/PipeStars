import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppControl from './components/Controls/AppControl/AppControl';
import User from './components/Controls/Users/User/User';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/controls'>
          <AppControl></AppControl>
        </PrivateRoute>
        <PrivateRoute path='/controls/user/:serviceID'>
        <User></User>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
