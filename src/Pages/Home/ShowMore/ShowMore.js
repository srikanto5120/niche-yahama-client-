import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const ShowMore = () => {
  const [moreBikes, setMoreBikes] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-crag-45233.herokuapp.com/moreBikes")
      .then((res) => res.json())
      .then((data) => setMoreBikes(data));
  }, []);
  return (
    <div id="bikes">
      <Container>
        <h4
          style={{ fontFamily: "Roboto" }}
          className="py-4 fw-bold text-center"
        >
          Our Products
        </h4>
        <Row xs={1} md={3} className="g-4 ">
          {moreBikes.map((bike) => (
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
                    <Link to={`/bike/moreDetails/${bike._id}`}>
                      {" "}
                      <button className="btn btn-primary ">More Details</button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShowMore;
