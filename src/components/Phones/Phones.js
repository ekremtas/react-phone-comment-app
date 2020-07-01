import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhones } from "../../redux/actions";

const Phones = (props) => {
  useEffect(() => {
    props.getPhones();
  }, [props.phones]);

  return <div>{JSON.stringify(props.phones)}</div>;
};

const mapStateToProps = (state) => {
  const { phones } = state.commentsReducer;
  return {
    phones,
  };
};

const mapDispatchToProps = {
  getPhones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
