import React, { useState } from "react"
import { Form, Button, Spinner } from "react-bootstrap"
import styled from "styled-components"
import DOMPurify from "dompurify"

export default ({ status, message, onSubmitted }) => {
  const [formData, setFormData] = useState({
    EMAIL: "",
    ZIPCODE: "",
    NUMBER: "",
    "group[293774][4]": false,
  })
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    const submitData = {
      EMAIL: formData.EMAIL,
      ZIPCODE: formData.ZIPCODE,
      NUMBER: formData.NUMBER,
    }

    // don't send checkbox status if unchecked
    // Mailchimp will populate field if any value is sent
    if (formData["group[293774][4]"]) {
      submitData["group[293774][4]"] = formData["group[293774][4]"]
    }

    if (!form.checkValidity()) {
      event.stopPropagation()
    }

    event.preventDefault()
    setValidated(true)
    onSubmitted(submitData)
  }

  const handleChange = event => {
    const name = event.target.name
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  let respMessage

  if (status === "success") {
    respMessage = (
      <Form.Group>
        <Form.Label className="text-success">{message}</Form.Label>
      </Form.Group>
    )
  } else if (status === "error") {
    // Sanitize innerHTML to prevent potential XSS attacks
    const cleanMessage = DOMPurify.sanitize(message)

    respMessage = (
      <Form.Group>
        <Form.Label
          className="text-danger"
          dangerouslySetInnerHTML={{ __html: cleanMessage }}
        ></Form.Label>
      </Form.Group>
    )
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="email">
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
      <Form.Group controlId="zipCode">
        <Form.Label>
          Zip Code<span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter zip code"
          name="ZIPCODE"
          value={formData.ZIPCODE}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a zip code
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Prefer text message updates instead?</Form.Label>

        <Form.Group>
          <Form.Check
            type="checkbox"
            id="sms-confirm"
            label="Yes! Do not send updates to my email"
            name="group[293774][4]"
            checked={formData["group[293774][4]"]}
            onChange={handleChange}
            inline
            custom
          />
        </Form.Group>
      </Form.Group>
      {formData["group[293774][4]"] === true && (
        <Form.Group controlId="number">
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
            Please provide a phone number to receive updates through text
            messages
          </Form.Control.Feedback>
        </Form.Group>
      )}

      {respMessage}

      <Button type="submit" block>
        {status === "sending" ? (
          <Spinner animation="border" size="sm" />
        ) : (
          "Subscribe"
        )}
      </Button>
      <MutedMsg className="text-muted">
        * We're currently operating in Georgia with more states coming soon.
        Sign ups outside of Georgia will be invited to the Vngle community until
        we reach them.
      </MutedMsg>
    </Form>
  )
}

const MutedMsg = styled(Form.Text)`
  font-size: 10px;
`
