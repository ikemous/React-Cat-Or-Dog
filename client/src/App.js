import React from "react";
import TotallyAwesomeNavbar from "./components/TotallyAweomeNavbar.js";
import WelcomePage from "./pages/WelcomePage.js";
import SwipingPage from "./pages/SwipingPage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";

function App()
{
  return (
    <>
      <TotallyAwesomeNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/swipe" component={SwipingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
