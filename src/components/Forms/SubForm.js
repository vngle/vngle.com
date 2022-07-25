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
    <StyledJumbotron>
      <Container>
        <Row>
          <Col xs={12} md={7} lg={6}>
            <h1>Get free and balanced news near you</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row xs={1} sm={2}>
                {formData["group[293774][4]"] === true ? (
                  <Form.Group controlId="number" as={Col}>
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
                <Form.Group as={Col} xs="auto">
                  <Button type="submit" variant="dark">
                    {status === "sending" ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </Form.Group>
                <Form.Group as={Col} className="checkbox-container">
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

              <MutedMsg className="text-muted">
                * We’re operating in Georgia with more states coming soon. Sign
                ups outside of GA are invited to our national community
                newsletter until we reach them.
              </MutedMsg>
            </Form>
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  );
};

const StyledJumbotron = styled.div`
  background: rgba(255, 204, 52, 0.4);
  border: 5px solid var(--bs-primary);
  margin: 3rem 0;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .checkbox-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const MutedMsg = styled.small`
  font-size: 10px;
`;

export default SubForm;
