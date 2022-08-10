import React, { useState } from "react";
import { Form, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import DOMPurify from "dompurify";

/**
 * All props are passed in by MailchimpSubscribe component
 * @param {string} status Subscription status (success, error, or sending)
 * @param {string} message Response message from Mailchimp
 * @param {function} onSubmitted Function to be called on form submission. Usually used to call subscribe(formData)
 */
const SubForm = ({ status, message, onSubmitted }) => {
  // object key names are extracted from Mailchimp. Changing them will break the form.
  const [formData, setFormData] = useState({
    FIRST: "",
    LAST: "",
    EMAIL: "",
    MESSAGE: "",

    "group[293774][4]": true, //messagenot opt-in
  });
  const [validated, setValidated] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const submitData = {
      FIRST: formData.FIRST,
      LAST: formData.LAST,
      EMAIL: formData.EMAIL,
      NUMBER: formData.MESSAGE,
    };

    // only send checkbox status if checked
    // Mailchimp will populate field if any value is sent
    if (formData["group[293774][4]"]) {
      submitData["group[293774][4]"] = formData["group[293774][4]"];
    }

    if (!form.checkValidity()) {
      event.stopPropagation();
    }

    event.preventDefault();
    setValidated(true);
    onSubmitted(submitData);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let respMessage;

  // display message based on submission status
  if (status === "success") {
    respMessage = (
      <Form.Group>
        <Form.Label className="text-success">{message}</Form.Label>
      </Form.Group>
    );
  } else if (status === "error") {
    // sanitize innerHTML to prevent potential XSS attacks
    const cleanMessage = DOMPurify.sanitize(message);

    respMessage = (
      <Form.Group>
        <Form.Label
          className="text-danger"
          dangerouslySetInnerHTML={{ __html: cleanMessage }}
        ></Form.Label>
      </Form.Group>
    );
  }

  return (
    <StyledJumbotron>
      <Container>
        <Row>
          <Col xs={12} md={7} lg={6}>
            <h1>Let’s work together</h1>
            <h2>Get in touch today</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row xs={1} sm={2}>
                <Form.Group controlId="name" as={Col}>
                  <Form.Label>
                    First Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="first"
                    placeholder="Enter first name"
                    name="FIRST"
                    value={formData.NAME}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Row>

              <Row xs={1} sm={2}>
                <Form.Group controlId="name" as={Col}>
                  <Form.Label>
                    Last Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="LAST"
                    value={formData.NAME}
                    onChange={handleChange}
                    required={formData["group[293774][4]"]}
                  />
                </Form.Group>
              </Row>

              <Row xs={1} sm={2}>
                <Form.Group controlId="email" as={Col}>
                  <Form.Label>
                    Email address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="EMAIL"
                    value={formData.EMAIL}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row xs={4} sm={2}>
                <Form.Group controlId="Textarea" as={Col}>
                  <Form.Label>
                    Message <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder=""
                    name="MESSAGE"
                    value={formData.MESSAGE}
                    onChange={handleChange}
                    required={formData["group[293774][4]"]}
                    style={{ height: "100px" }}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mt-3">
                <Form.Group as={Col} xs="auto">
                  <Button type="submit" variant="dark">
                    {status === "sending" ? (
                      <Spinner animation="border" size="sm" display="flex" />
                    ) : (
                      "Contact Us"
                    )}
                  </Button>
                </Form.Group>

                {respMessage}
                
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  );
};

const StyledJumbotron = styled.div`
  background: #e512d0;
  margin: 0rem;
  padding-top: 0.2rem;
  padding-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;

  .row {
    justify-content: center;
    text-align: center;
  }
`;

export default SubForm;
