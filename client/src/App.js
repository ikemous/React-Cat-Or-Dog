import React, { useState, useEffect } from "react";
import API from "./utils/API.js";
import TotallyAwesomeNavbar from "./components/TotallyAwesomeNavbar.js";
import FriendsPage from "./pages/FriendsPage.js";
import SettingsPage from "./pages/SettingsPage.js";
import WelcomePage from "./pages/WelcomePage.js";
import SwipingPage from "./pages/SwipingPage.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import "./App.css";

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
            <Route exact path={["/", "/home"]} component={WelcomePage} />
            <Route exact path="/profile/settings">
              {!user? <Redirect to="/login" />: <SettingsPage />}
            </Route>
            <Route exact path="/profile/friends">
              {user? <FriendsPage />: <Redirect to="/login" />}
            </Route>
            <Route exact path="/swipe">
              {user? <SwipingPage user={user} />: <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              {user? <Redirect to="/swipe" /> : <LoginPage setUser={setUser} />}
            </Route>
            <Route exact path="/signup">
              {user? <Redirect to="/swipe" />: <SignupPage setUser={setUser} />}
            </Route>
          </Switch>
      </Router>
    </>
  )
}

export default App;
