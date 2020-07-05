import React from "react";
import { Formik, Form, useField } from "formik";
import { connect } from "react-redux";
import { addPhone } from "../../redux/actions";
import * as Yup from "yup";
import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Row,
  Col,
  Button,
} from "reactstrap";
import { PageInfo } from "../../components";
import { FormBorder } from "./styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Phone Name is a required field").min(2),
  brand: Yup.string().required("Brand Name is a required field").min(2),
  price: Yup.number()
    .positive()
    .integer()
    .required("Price is a required field"),
  image: Yup.string().required("Url is a required field").url(),
});

const MyTextInput = ({ label, example, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <Label className="h5">{label}</Label>
      <Input
        {...field}
        {...props}
        invalid={meta.error}
        valid={meta.error ? false : field.value}
      />
      <FormFeedback
        invalid={meta.error}
        valid={meta.error ? false : field.value}
      >
        {meta.error}
      </FormFeedback>
      {example ? <FormText>{example}</FormText> : null}
    </FormGroup>
  );
};

const AddPhonepage = (props) => {
  return (
    <Formik
      initialValues={{
        name: "",
        brand: "",
        price: "",
        image: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        props.addPhone(data);
        setSubmitting(false);
        resetForm();
        alert("Form successfully submitted And Reseted Form");
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        resetForm,
        /* and other goodies */
      }) => (
        <Form>
          <PageInfo
            title="ADD NEW PHONE"
            image="https://images.unsplash.com/photo-1570963904764-fff966562bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />{" "}
          <FormBorder>
            <Row>
              <Col md="12">
                <MyTextInput
                  name="name"
                  type="text"
                  label="Phone Name"
                  placeholder="Enter Phone Name"
                />
              </Col>
              <Col md="12">
                <MyTextInput
                  name="brand"
                  type="text"
                  label="Brand Name"
                  placeholder="Enter Brand Name"
                />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <MyTextInput
                  name="price"
                  type="text"
                  label="Price"
                  placeholder="Enter Price"
                />
              </Col>
              <Col md="12">
                <MyTextInput
                  name="image"
                  type="url"
                  label="Phone Image"
                  placeholder="Enter Image Url"
                  example="Example : https://..."
                />
              </Col>
            </Row>
            <Button color="dark" disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </FormBorder>
        </Form>
      )}
    </Formik>
  );
};
const mapStateToProps = (state) => {
  const { phones } = state.commentsReducer;
  return {
    phones,
  };
};

const mapDispatchToProps = {
  addPhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhonepage);
