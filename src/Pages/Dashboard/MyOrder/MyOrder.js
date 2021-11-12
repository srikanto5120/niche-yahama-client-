import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import useAuth from "../../../Context/useAuth";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { user } = useAuth();
  const [orderBikes, setOrderBikes] = useState([]);

  useEffect(() => {
    fetch(
      `https://mysterious-crag-45233.herokuapp.com/orderBike?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderBikes(data));
  }, [orderBikes]);

  const handleOrderBikes = (id) => {
    fetch(`https://mysterious-crag-45233.herokuapp.com/orderBikes/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <h3
        style={{ fontFamily: '"Roboto", sans-serif' }}
        className="my-4 text-center"
      >
        Orders : {orderBikes.length}
      </h3>

      <Row xs={1} md={3} className="g-4 ">
        {orderBikes.map((bike) => (
          <Col className=" p-3 rounded" key={bike._id}>
            <Card>
              <Card.Img variant="top" src={bike.img} />
              <Card.Body>
                <h3>{orderBikes._id}</h3>
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

                <button
                  onClick={() => handleOrderBikes(bike._id)}
                  className="btn btn-primary px-5 w-100 "
                >
                  Delate
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyOrder;
