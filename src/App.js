import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Bikes from "./Pages/Home/Bikes/Bikes";
import UserOrder from "./Pages/Home/UserOrder/UserOrder";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Reigster/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/bikes">
              <Bikes />
            </Route>
            <Route path="/bike/order/:orderId">
              <UserOrder />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
