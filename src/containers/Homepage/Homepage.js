import React from "react";
import { Sliders } from "../../components";
import {
    Row,
    Container
  } from "reactstrap";
  
const Homepage = () => {
  return (
    <Container>
      <Row>
        <Sliders />
      </Row>
    </Container>
  );
};

export default Homepage;
