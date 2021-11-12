import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigation from "../../../Shared/Navigation/Navigation";

const MoreDetails = () => {
  const { id } = useParams();
  const [bikeDetails, setBikeDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/bikes/${id}`)
      .then((res) => res.json())
      .then((data) => setBikeDetails(data));
  }, []);

  const {
    name,
    img,
    displacement,
    description,
    speed,
    engineType,
    mileage,
    tankCapacity,
    price,
    width,
  } = bikeDetails;
  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          <Col sm={12} md={6} className="border ">
            <img className="w-100" src={img} alt="" />
          </Col>
          <Col sm={12} md={6}>
            <h3>{name}</h3>
            <h4>Quick Overview</h4>
            <p>{description}</p>
            <Table striped size="sm">
              <tbody>
                <tr>
                  <td>Engine </td>
                  <td>:</td>

                  <td>{displacement}</td>
                </tr>

                <tr>
                  <td>Engine Type</td>
                  <td>:</td>

                  <td>{engineType}</td>
                </tr>
                <tr>
                  <td>Top Speed</td>
                  <td>:</td>

                  <td>{speed}</td>
                </tr>
                <tr>
                  <td>Mileage</td>
                  <td>:</td>

                  <td>{mileage}</td>
                </tr>
                <tr>
                  <td> Price</td>
                  <td>:</td>

                  <td>{price}</td>
                </tr>
                <tr>
                  <td> Fuel Tank Capacity</td>
                  <td>:</td>

                  <td>{tankCapacity}</td>
                </tr>
                <tr>
                  <td> Width</td>
                  <td>:</td>

                  <td>{width}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoreDetails;
