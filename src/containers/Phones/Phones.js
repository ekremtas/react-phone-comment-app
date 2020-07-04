import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhones } from "../../redux/actions";
import { Phone } from "../../components";
import { Row, Spinner } from "reactstrap";

const Phones = (props) => {
  useEffect(() => {
      props.getPhones();
  }, []);
  if (props.loading.phones_page) {
    return <Spinner className="mt-5" color="info" />;
  }
  return (
    <>
      <Row>
        {props.phones.map((phone) => {
          return <Phone key={phone.id} phone_data={phone} />;
        })}
      </Row>
    </>
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
