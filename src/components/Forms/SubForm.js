import React, { useState } from "react";
import { Form, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import DOMPurify from "dompurify";

import { Fade } from "react-reveal";

/**
 * All props are passed in by MailchimpSubscribe component
 * @param {string} status Subscription status (success, error, or sending)
 * @param {string} message Response message from Mailchimp
 * @param {function} onSubmitted Function to be called on form submission. Usually used to call subscribe(formData)
 */
const SubForm = ({ status, message, onSubmitted }) => {
  // object key names are extracted from Mailchimp. Changing them will break the form.
  const [formData, setFormData] = useState({
    EMAIL: "",
    NUMBER: "",
    "group[293774][4]": false, // SMS opt-in
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const submitData = {
      EMAIL: formData.EMAIL,
      NUMBER: formData.NUMBER,
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
  
  <Fade bottom>
    <StyledJumbotron>
      <HeroContainer>
        <Row>
          <Col xs={12}>
            <h1 className="center-element">Stay Updated & Follow Our Movement</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

              <Row className="email-form"xs={1} sm={3}>
                {formData["group[293774][4]"] === true ? (
                  <Form.Group className="email-form" controlId="number" as={Col}>
                    <Form.Label>
                      Phone Number<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter cell phone number"
                      name="NUMBER"
                      value={formData.NUMBER}
                      onChange={handleChange}
                      required={formData["group[293774][4]"]}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a phone number
                    </Form.Control.Feedback>
                  </Form.Group>
                ) : (
                  <Form.Group controlId="email" as={Col}>
                    <Form.Label>
                      Email address<span className="text-danger">*</span>
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
                )}
              </Row>

              <Row className="mt-3">
                <Form.Group class="center-element">
                  <Button type="submit" variant="dark">
                    {status === "sending" ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      // "Subscribe"
                      "SUBSCRIBE"
                    )}
                  </Button>
                </Form.Group>
                <Form.Group as={Col} className="checkbox-container center-element">
                  <Form.Check
                    type="checkbox"
                    id="sms-confirm"
                    label="Text me instead!"
                    name="group[293774][4]"
                    checked={formData["group[293774][4]"]}
                    onChange={handleChange}
                    inline
                  />
                </Form.Group>
              </Row>

              {respMessage}
              
            </Form>
          </Col>
        </Row>
      </HeroContainer>
    </StyledJumbotron>
    </Fade>
  );
};

const StyledJumbotron = styled.div`

  background: var(--bs-primary);
  margin: 0.2rem 0;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-left: 12px;
  margin-right: 12px;

  .center-element {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  h1 {
    font-family: "Inter", sans-serif;
  }
  
  .form-label {
    margin-left: 0.3rem;
  }

  .email-form {
    align-items: center;
    justify-content: center;
  }

  .form-control {
    border-radius: 0.6rem;
  }

  .btn {
    letter-spacing: 1.7px;
  }

  .checkbox-container {
    flex-direction: column;
    padding-top: 15px;
  }
`;

const HeroContainer = styled(Container)`

  padding: 30px;
`

export default SubForm;
