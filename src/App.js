import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Bikes from "./Pages/Home/Bikes/Bikes";
import UserOrder from "./Pages/Home/UserOrder/UserOrder";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Reigster/Register";
import MoreDetails from "./Pages/Home/Bikes/MoreDetails/MoreDetails";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ShowMore from "./Pages/Home/ShowMore/ShowMore";

function App() {
  return (
    <div style={{ backgroundColor: "#eee" }} className="App ">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/bikes">
              <Bikes />
            </Route>
            <Route path="/moreBikes">
              <ShowMore />
            </Route>
            <PrivateRoute path="/bike/order/:orderId">
              <UserOrder />
            </PrivateRoute>
            <Route path="/bike/moreDetails/:id">
              <MoreDetails />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path={`dashboard/myOrder`}>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
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
