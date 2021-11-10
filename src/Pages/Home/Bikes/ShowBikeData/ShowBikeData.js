import React from "react";
import { Card, Col } from "react-bootstrap";

const ShowBikeData = ({ bike }) => {
  return (
    <Col key={bike._id}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title> {bike}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowBikeData;
