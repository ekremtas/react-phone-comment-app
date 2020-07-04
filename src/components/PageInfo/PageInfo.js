import React from "react";
import { Jumbotron } from "reactstrap";
const PageInfo = (props) => {
  return (
    <Jumbotron
      className="mt-4"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="h1">{props.title}</h1>
    </Jumbotron>
  );
};

export default PageInfo;
