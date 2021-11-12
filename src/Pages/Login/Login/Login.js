import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import useAuth from "../../../Context/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import { useLocation, useHistory, Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState();
  const { login, user, authError, isLoading, googleSignIn } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[filed] = value;
    setLoginData(newLoginData);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(loginData.email, loginData.password, location, history);
  };

  // handleGoogle sign in
  const handleGoogleSignIn = () => {
    googleSignIn();
  };
  return (
    <div>
      <Navigation></Navigation>

      {!isLoading && (
        <Form className="w-25 mx-auto p-5" onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Please Login</h3>
            <Form.Control
              type="text"
              onBlur={handleOnChange}
              name="name"
              placeholder="Enter Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              onBlur={handleOnChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onBlur={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <input className="btn btn-primary px-4" type="submit" value="Login" />
          <br />
          <Link to="/register">
            {" "}
            <Button variant="light">New user? Please Register </Button>
          </Link>
          <p>{authError}</p>
        </Form>
      )}

      <p>............................or..................................</p>
      <nav onClick={handleGoogleSignIn}>
        <img
          style={{ width: "60px", cursor: "pointer" }}
          src="https://i.ibb.co/4g3sDPh/google-llc.png"
          alt=""
        />
      </nav>
      {isLoading && <Spinner animation="border" variant="info" />}
    </div>
  );
};

export default Login;
