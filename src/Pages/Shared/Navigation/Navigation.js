import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Context/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        className="pt-2 pb-4"
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#44b6e9",
        }}
        variant="light"
      >
        <Container>
          <Navbar.Brand
            style={{ fontSize: "24px", color: "black" }}
            as={Link}
            to="/"
          >
            <img
              src="https://global.yamaha-motor.com/shared/img/rwd_identity.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                style={{ fontSize: "20px", color: "black" }}
                as={Link}
                to="/bikes"
              >
                Bikes
              </Nav.Link>

              {user?.email && (
                <Nav.Link
                  style={{ fontSize: "20px", color: "black" }}
                  as={Link}
                  to="/dashboard"
                  className="login  "
                >
                  Dashboard
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              {user?.email ? (
                <div>
                  <Button style={{ marginRight: "10px" }} onClick={logOut}>
                    Logout
                  </Button>
                  <span style={{ fontSize: "20px", color: "black" }}>
                    {" "}
                    {user.displayName}{" "}
                  </span>
                </div>
              ) : (
                <Link className="login" to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
