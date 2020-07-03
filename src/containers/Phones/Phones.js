import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhones } from "../../redux/actions";
import Phone from "../../components/Phone";
import { Container, Row } from "reactstrap";
const Phones = (props) => {
  useEffect(() => {
    props.getPhones();
    console.log(props.phones);
  }, []);

  return (
    <Container>
      <Row>
        {props.phones.map((phone) => {
          return <Phone key={phone.id} phone_data={phone} />;
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { phones, loading } = state.commentsReducer;
  return {
    phones,
    loading,
  };
};

const mapDispatchToProps = {
  getPhones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
