import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

const Phone = (props) => {
  return (
    <Col md="3" className="mt-4">
      <Card>
        <CardBody>
          <CardTitle>{props.phone_data.name}</CardTitle>
          <CardSubtitle>{props.phone_data.brand}</CardSubtitle>
        </CardBody>
        <CardImg
          top
          width="100%"
          src={props.phone_data.image[0]}
          alt="Card image cap"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Phone;
