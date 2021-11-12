import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Context/useAuth";

const DashboardNav = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        className="pt-2 pb-4"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#00acc1", color: "#4d5758" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            {" "}
            Yamaha
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto"></Nav>
            <Nav>
              {user?.email && (
                <div>
                  <Button style={{ marginRight: "10px" }} onClick={logOut}>
                    Logout
                  </Button>
                  <span className="text-white"> {user.displayName} </span>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DashboardNav;
