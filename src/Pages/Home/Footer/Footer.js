import React from "react";
import { Col, Row } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer  ">
      <Row>
        <Col md={3}>
          <div>
            <p>(+88)01737813575 </p>
            <p>ducat@gmail.com</p>
            <p>3561 New Town Dhaka</p>
            <div>
              <i className="fab footer-icon fa-facebook-f"></i>
              <i className="fab footer-icon fa-linkedin-in"></i>
              <i className="fab footer-icon fa-twitter"></i>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <h6> Category</h6>
            <a href="*">
              <p>Privacy & Poilicy </p>
            </a>
            <a href="*">
              <p>Terms & Condition</p>
            </a>
            <a href="*">
              <p>Customer Support </p>
            </a>
            <a href="*">
              <p>For Business</p>
            </a>
            <a href="*">
              <p>Support</p>
            </a>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <h6>Usefull Links</h6>
            <a href="*">
              <p>About us</p>
            </a>
            <a href="*">
              <p> Refer A Friend</p>
              <a href="*">
                <p>Discount</p>
              </a>
              <a href="*">
                <p>Medical Camping</p>
              </a>
              <a href="*">
                <p>Free Treatment</p>
              </a>
            </a>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <h6>Send Message</h6>
            <input
              className="form-control  "
              placeholder="Your email"
              type="text"
            />
            <br />
            <input className="form-control h-50  " type="text" />
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Col>
      </Row>
      <hr className=" " />
      <div className="text-center">
        <p>
          <small>Copyright © 2021 skClinic. All rights Reserved.</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
