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
import { Link } from "react-router-dom";

const Phone = (props) => {
  return (
    <Col md="4" className="mt-4">
      <Card>
        <CardBody>
          <CardTitle>{props.phone_data.name}</CardTitle>
          <CardSubtitle>{props.phone_data.brand}</CardSubtitle>
        </CardBody>
        <CardImg
          top
          width="100%"
          src={props.phone_data.image}
          alt={`${props.phone_data.name} image`}
        />
        <CardBody>
          <CardText>
            Some quick example text to ...
          </CardText>
          <Button tag={Link} to={`/detail/${props.phone_data.id}`}>Go commments</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

Phone.defaultProps = {
  phone_data : {
    name: "Phone Name",
    brand: "Brand Name",
    id: 0,
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/APPLE/thumb/TeoriV2-103970-9_large.jpg"
  }
}

export default Phone;
