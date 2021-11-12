import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./Dashboard.css";

import "./Dashboard.css";

import MyOrder from "./MyOrder/MyOrder";
import Pay from "./Pay/Pay";

import UserProfile from "./UserProfile/UserProfile";
import Review from "./Review/Review";
import DashboardNav from "./DashboardNav/DashboardNav";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const dashboardBannerBg = {
    background:
      ' url("https://i.ibb.co/m0rJW42/debashis-rc-biswas-a-SUHIz-Ez8-Ns-unsplash.jpg")',
    backgroundColor: " rgba(45, 54, 74,1)",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "soft-light,luminosity",
    height: "100vh",
  };
  return (
    <div>
      <Row>
        <Col style={dashboardBannerBg} sm={12} md={3}>
          <div>
            <Link to="/dashboard" className=" link">
              Dashboard
            </Link>
            <br />
            <Link to={`${url}/userProfile`} className=" link">
              User Profile
            </Link>
            <br />
            <Link to={`${url}/myOrder`} className=" link">
              My Order
            </Link>
            <Link to={`${url}/pay`} className=" link">
              Pay
            </Link>
            <Link to={`${url}/review`} className=" link">
              Review
            </Link>
          </div>{" "}
        </Col>
        <Col className="content" sm={12} md={9}>
          <DashboardNav></DashboardNav>
          <Switch>
            <Route exact path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route exact path={`${path}/myOrder`}>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path={`${path}/userProfile`}>
              <UserProfile></UserProfile>
            </Route>
            <Route exact path={`${path}/review`}>
              <Review></Review>
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
