import React from "react";
import TotallyAwesomeNavbar from "./components/TotallyAweomeNavbar.js";
import WelcomePage from "./pages/WelcomePage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App()
{
  return (
    <>
      <TotallyAwesomeNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
