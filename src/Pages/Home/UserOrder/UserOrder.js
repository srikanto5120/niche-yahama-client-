import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserOrder = () => {
  const { orderId } = useParams();
  const [orderBike, setOrderBike] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/bikes/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrderBike(data));
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/orderBikes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  useEffect(() => {
    fetch(" ")
      .then((res) => res.json())
      .then((data) => data);
  }, []);

  const { img, name, price, displacement, speed, mileage } = orderBike;
  return (
    <Container>
      <Row>
        <Col className=" p-3 rounded" key={orderBike._id}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
              <Card.Text>
                <Table striped size="sm">
                  <tbody>
                    <tr>
                      <td>Engine</td>
                      <td>:</td>

                      <td>{displacement}</td>
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

                      <td>{orderBike.price}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <form className=" " onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor=""> Bike Name:</label>
            <br />
            <input
              className="w-75 p-2"
              readOnly
              type="text"
              {...register("name")}
              value={name}
            />
            <br />
            <label htmlFor=""> Bike Image:</label>
            <br />
            <input
              className="w-75 p-2"
              readOnly
              type="text"
              {...register("img")}
              value={img}
            />
            <br />
            <label>Mileage:</label>
            <br />
            <input
              readOnly
              className="w-75 p-2"
              type="text"
              {...register("mileage")}
              value={mileage}
            />
            <br />
            <label htmlFor="">Speed:</label>
            <br />
            <input
              readOnly
              className="w-75 p-2 "
              type="text"
              value={speed}
              {...register("speed")}
            />
            <br />
            <label htmlFor="">Price</label>
            <br />
            <input
              readOnly
              className="w-75 p-2 "
              type="text"
              value={price}
              {...register("price")}
            />
            <br />

            <label htmlFor="">Email:</label>
            <br />
            <input
              readOnly
              className="w-75 py-2"
              type="email"
              {...register("email")}
              value="shreekanta@gmail.com"
            />
            <br />
            <label htmlFor="">Phone Number:</label>
            <br />
            <input
              className="w-75    py-2"
              type="number"
              {...register("phone")}
              placeholder="Phone Number"
            />
            <br />
            <label htmlFor="">Address:</label>
            <br />
            <input
              className="w-75   py-2"
              {...register("address")}
              placeholder="Address"
            />
            <br />

            <button className="submit-btn px-5 ms-5 mt-5  btn btn-primary">
              Place Order
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrder;
