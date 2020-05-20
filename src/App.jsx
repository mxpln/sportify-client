import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import EditProfile from "./pages/EditProfile";
import OneEventId from "./pages/OneEventId";
import MyEvents from "./pages/MyEvents";



function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/createEvent" component={CreateEvent} />
        <Route exact path="/editEvent" component={EditEvent} />
        <Route exact path="/oneEvent" component={OneEventId} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route exact path="/myEvents" component={MyEvents} />
        <Route exact path="/OneEvent/:id" component={OneEventId} />
      </Switch>
    </div>
  );
}

export default App;
