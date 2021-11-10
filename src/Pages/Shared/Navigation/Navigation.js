import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Context/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Yamaha</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/bikes">
                Bikes
              </Nav.Link>
              <Nav.Link href="#pricing">Pay</Nav.Link>
            </Nav>
            <Nav>
              {user?.email ? (
                <div>
                  <Link className="login" to="/dashboard">
                    <Button>DASHBOARD</Button>
                  </Link>
                  <Button onClick={logOut}>Logout</Button>
                  <Button> {user.displayName}</Button>
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
