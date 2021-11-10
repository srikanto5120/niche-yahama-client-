import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, NavLink, Row, Table } from "react-bootstrap";

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  console.log(bikes);
  // load data
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  const handleShowMoreBike = () => {
    fetch("http://localhost:5000/moreBikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  };

  return (
    <div id="bikes">
      <Container>
        <Row xs={1} md={3} className="g-4 ">
          {bikes.map((bike) => (
            <Col className=" p-3 rounded" key={bike._id}>
              <Card>
                <Card.Img variant="top" src={bike.img} />
                <Card.Body>
                  <Card.Title> {bike.name}</Card.Title>
                  <Card.Text>
                    <Table striped size="sm">
                      <tbody>
                        <tr>
                          <td>Engine</td>
                          <td>:</td>

                          <td>{bike.displacement}</td>
                        </tr>
                        <tr>
                          <td>Top Speed</td>
                          <td>:</td>

                          <td>{bike.speed}</td>
                        </tr>
                        <tr>
                          <td>Mileage</td>
                          <td>:</td>

                          <td>{bike.mileage}</td>
                        </tr>
                        <tr>
                          <td> Price</td>
                          <td>:</td>

                          <td>{bike.price}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link to={`/bike/order/${bike._id}`}>
                      <button className="btn btn-primary px-5  ">Order</button>
                    </Link>
                    <button className="btn btn-primary ">More Details</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <NavLink onClick={handleShowMoreBike}> Show More </NavLink>
      </Container>
    </div>
  );
};

export default Bikes;
