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
<<<<<<< HEAD
<<<<<<< HEAD
    MESSAGE: "",
=======
>>>>>>> 148ca85 (Merge conflict)
=======
<<<<<<< master
=======
    MESSAGE: "",
>>>>>>> Updates
>>>>>>> ccecdf0 (Updates)

    "group[293774][4]": true, //messagenot opt-in
  });
  const [validated, setValidated] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const submitData = {
      FIRST: formData.FIRST,
      LAST: formData.LAST,
      EMAIL: formData.EMAIL,
<<<<<<< HEAD
<<<<<<< HEAD
      MESSAGE: formData.MESSAGE,
=======
      NUMBER: formData.MESSAGE,
>>>>>>> ccecdf0 (Updates)
=======
      MESSAGE: formData.MESSAGE,
>>>>>>> 994d5d7 (Creative content changes with form)
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
<<<<<<< HEAD
          <Col>
            <h1 className="fw-bold">
              Let’s work together.
              <br />
              Get in touch today.
            </h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <form
                action="https://getform.io/f/6fa17a80-9b69-44dc-b894-27fe292b3795"
                method="POST"
              >
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
=======
          <Col xs={12} md={7} lg={6}>
            <h1>Let’s work together</h1>
            <h2>Get in touch today</h2>
<<<<<<< master

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="email-form" xs={1} sm={3}>
=======
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <form action="https://getform.io/f/6fa17a80-9b69-44dc-b894-27fe292b3795" method="POST">
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
>>>>>>> Updates
                <Form.Group controlId="email" as={Col}>
                  <Form.Label>
                    Email address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter a valid email address"
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
>>>>>>> 148ca85 (Merge conflict)

<<<<<<< HEAD
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
                      placeholder="Enter a valid email address"
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
=======
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
>>>>>>> ccecdf0 (Updates)

<<<<<<< HEAD
                <Row xs={1} sm={2}>
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
              </form>
=======
                {respMessage}
              </Row>
<<<<<<< HEAD
>>>>>>> 148ca85 (Merge conflict)
=======
              </form>
>>>>>>> ccecdf0 (Updates)
            </Form>
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  );
};

const StyledJumbotron = styled.div`
<<<<<<< HEAD
  background: var(--bs-primary);
<<<<<<< HEAD
  // margin-top: 2rem;
  // margin-bottom: 5rem;
  margin: 0.4rem;
  height: 100%;

  h1 {
    font-family: "Inter", sans-serif;
    margin-top:2rem;
    margin-left:10rem;
=======
=======
  background: #DC33B7;
>>>>>>> 39a7bb8 ( Content creative, Vngler,Ally and  About)
  height: 100%;

  h1 {
    font-family: "Inter", sans-serif;
  }

  .form-label {
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    font-weight: bold;
  }

  .form-control {
    border-radius: 0.6rem;
  }

  .btn {
    letter-spacing: 1.7px;
    margin-bottom: 0.9rem;
  }
  
  @media(max-width:47rem){
    margin-top:5rem;
    
    .form-label {
      padding-left:2rem;
    }

<<<<<<< HEAD
  .checkbox-container {
    flex-direction: column;
    padding-top: 15px;
>>>>>>> ccecdf0 (Updates)
=======
    form{
      margin-left:0;
    }

    h1{
      margin-left:0;
    }
>>>>>>> 994d5d7 (Creative content changes with form)
  }

  .form-label {
    font-weight: bold;
    margin-left: 0.3rem;
    margin-top: 0.5rem;
    padding left: 10rem;
  }

  .form-control {
    border-radius: 0.6rem;
  }

  form{
    margin-left:5rem;
  }

  .btn {
    letter-spacing: 1.7px;
    margin-bottom: 2rem;
    margin-top:1rem;
  }

  @media(max-width:47rem){
    margin-top:5rem;
    
    .form-label {
      paddin-left:2rem;
    }

    form{
      margin-left:0;
    }

    h1{
      margin-left:0;
    }
  }
  `;

export default SubForm;