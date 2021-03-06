import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import TotallyAwesomeNavbar from "./components/TotallyAwesomeNavbar.js";
import ProfilePage from "./pages/ProfilePage.js";
import WelcomePage from "./pages/WelcomePage.js";
import SwipingPage from "./pages/SwipingPage.js";
import FriendsPage from "./pages/FriendsPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import PageNotFound from "./pages/PageNotFound.js";
import UnderConstructionPage from "./pages/UnderContructionPage.js";
import API from "./utils/API.js";
import "./App.css";

function App()
{

  const [user, setUser] = useState();

  useEffect(()=> {
    API.verifyUser()
    .then(({data}) => setUser(data))
    .catch(() => console.log("%c error: User Verification Failed", "color:red;"));
  },[]);

  return (
    <>
      <Router>
        <TotallyAwesomeNavbar loggedIn={user?true:false} />
          <Switch>
            <Route exact path={["/", "/home"]} component={WelcomePage} />
            <Route exact path="/test" component={UnderConstructionPage} />
            <Route exact path="/profile/settings">
              {!user? <Redirect to="/login" />: <UnderConstructionPage />}
            </Route>
            <Route exact path="/profile/friends">
              {user? <FriendsPage user={user}/>: <Redirect to="/login" />}
            </Route>
            <Route exact path="/profile/friends/:id">
              {user? <ProfilePage user={user}/>: <Redirect to="/login" />}
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
            <Route path="*" component={PageNotFound} />
          </Switch>
      </Router>
    </>
  )
}

export default App;
