import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

import { useLocation, Link, useHistory } from "react-router-dom";
import useAuth from "../../Context/useAuth";
import Navigation from "../Shared/Navigation/Navigation";

const Register = () => {
  const [registerData, setRegisterData] = useState();
  const {
    registerWithEmailPassword,
    user,
    authError,
    isLoading,
    googleSignIn,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[filed] = value;
    setRegisterData(newRegisterData);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    registerWithEmailPassword(
      registerData.name,
      registerData.email,
      registerData.password,
      location,
      history
    );
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
            <h3>Please Register</h3>
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
          <input
            className="btn btn-primary px-4"
            type="submit"
            value="Register"
          />
          <br />
          <Link to="/login">
            {" "}
            <Button variant="light">Already Registered? Please login </Button>
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

export default Register;
