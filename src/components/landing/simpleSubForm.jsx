import React from "react"
import { Form, InputGroup, Button } from "react-bootstrap"

const SimpleSubForm = () => {
  return (
    <Form
      action={process.env.GATSBY_MAILCHIMP_URL}
      method="post"
      target="_blank"
      rel="noreferrer"
    >
      <InputGroup className="mb-3">
        <Form.Control type="text" placeholder="Your zip code" name="ZIPCODE" />
        <InputGroup.Append>
          <Button type="submit">Sign Up</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default SimpleSubForm
