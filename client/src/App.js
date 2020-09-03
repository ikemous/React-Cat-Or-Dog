import React, { useState, useEffect } from "react";
import API from "./utils/API.js";
import TotallyAwesomeNavbar from "./components/TotallyAwesomeNavbar.js";
import WelcomePage from "./pages/WelcomePage.js";
import SwipingPage from "./pages/SwipingPage.js";
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";

function App()
{

  const [user, setUser] = useState();

  useEffect(()=> {
    API.verifyUser()
    .then(({data}) => setUser(data))
    .catch(error => console.log(error));
  },[]);

  useEffect(() => console.log(user), [user]);

  return (
    <>
      <Router>
        <TotallyAwesomeNavbar loggedIn={user?true:false} />
        <Switch>
          <Route exact path={["/", "/home"]}component={WelcomePage} />
          <Route exact path="/login">
            {user? <Redirect to="/swipe" /> : <LoginPage setUser={setUser} />}
          </Route>
          <Route exact path="/signup">
            {user? <Redirect to="/swipe" />: <SignupPage setUser={setUser} />}
          </Route>
          <Route exact path="/swipe">
            {user? <SwipingPage />: <Redirect to="/login" />}
          </Route>
          <Route exact path="/profile/settings">
            {user? <SwipingPage />: <Redirect to="/login" />}
          </Route>
          <Route exact path="/profile/friends">
            {user? <SwipingPage />: <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
