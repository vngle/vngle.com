import React, { useState } from "react"
import { Form, Button, Spinner } from "react-bootstrap"

export default ({ status, message, onSubmitted }) => {
  const [formData, setFormData] = useState({
    EMAIL: "",
    ZIPCODE: "",
    "group[293730][1]": true,
    "group[293730][2]": true,
  })
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget

    if (!form.checkValidity()) {
      event.stopPropagation()
    }

    event.preventDefault()
    setValidated(true)
    onSubmitted(formData)
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

  /**
   * TODO:
   *  2. Conditional requirement (zip code required if location-based letter checked)
   *  3. Display error messages
   *  4. Better response message display
   */

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
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
      <Form.Group controlId="formZipcode">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter zip code"
          name="ZIPCODE"
          value={formData.ZIPCODE}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Sign me up for ...</Form.Label>

        <Form.Group>
          <Form.Check
            type="checkbox"
            id="general-newsletter-checkbox"
            label="General newsletter"
            name="group[293730][1]"
            checked={formData["group[293730][1]"]}
            onChange={handleChange}
            inline
            custom
          />
          <Form.Check
            type="checkbox"
            id="location-newsletter-checkbox"
            label="Location-specific newsletter"
            name="group[293730][2]"
            checked={formData["group[293730][2]"]}
            onChange={handleChange}
            inline
            custom
          />
        </Form.Group>
      </Form.Group>
      {status === "success" ? (
        <Form.Group>
          <Form.Label className="text-success">{message}</Form.Label>
        </Form.Group>
      ) : (
        ""
      )}
      <Button type="submit" block>
        {status === "sending" ? (
          <Spinner animation="border" size="sm" />
        ) : (
          "Subscribe"
        )}
      </Button>
    </Form>
  )
}
