import React from "react"
import { Form, InputGroup, Button } from "react-bootstrap"

const SimpleSubForm = () => {
  return (
    <Form action={process.env.GATSBY_MAILCHIMP_URL} method="post">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter email for updates"
          aria-label="Enter email for updates"
          aria-describedby="mailchimp-email-form"
          type="email"
          name="EMAIL"
        />
        <Form.Control type="text" placeholder="Enter zip code" name="ZIPCODE" />
        <InputGroup.Append>
          <Button type="submit">Sign Up</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default SimpleSubForm
