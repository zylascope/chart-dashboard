import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./Dashboard";

import SignInSide from "./SignInSide";
import SignUp from "./SignUp";

export default function App() {
  const token = "";
  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.setItem("isLoggedin", true);
    }
  });
  return (
    <Router>
      <div>
        <nav>
          {/*
          <ul >  
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/get-new-password">Get New Password</Link>
            </li>
          </ul>
          */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/get-new-password">
            <GetNewPassword />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignInSide />
          </Route>
          <Route path="/">
            <SignInSide />
            {/*   <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function GetNewPassword() {
  return <h2>Choose a new passoword.</h2>;
}
