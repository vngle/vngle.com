import React from "react"
import { Form, Button, Col } from "react-bootstrap"

export default ({ status, message, onSubmitted }) => {
  if (status !== "success") {
    return (
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formState">
            <Form.Control type="text" placeholder="State" />
          </Form.Group>
          <Form.Group as={Col} controlId="formZip">
            <Form.Control type="text" placeholder="Zipcode" />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Sign me up for ...</Form.Label>

          <Form.Group>
            <Form.Check
              type="checkbox"
              id="general-newsletter-checkbox"
              label="General newsletter"
              inline
              custom
            />
            <Form.Check
              type="checkbox"
              id="location-newsletter-checkbox"
              label="Location-specific newsletter"
              inline
              custom
            />
          </Form.Group>
        </Form.Group>

        <Button>Subscribe</Button>
      </Form>

      // <Form
      //   name="newsletter-subscribe"
      //   initialValues={{ remember: true }}
      //   onFinish={onSubmitted}
      // >
      //   <Form.Item
      //     name="EMAIL"
      //     rules={[
      //       { required: true, message: "Please enter your email address." },
      //       {
      //         type: "email",
      //         message: "Please enter a valid email address.",
      //       },
      //     ]}
      //   >
      //     <Input
      //       placeholder="Email"
      //       prefix={<MailOutlined className="site-form-item-icon" />}
      //       size="large"
      //     />
      //   </Form.Item>
      //   <Form.Item name="city-zip">
      //     <Input
      //       placeholder="City/Zipcode"
      //       prefix={<EnvironmentOutlined className="site-form-item-icon" />}
      //       size="large"
      //     />
      //   </Form.Item>
      //   <Form.Item>
      //     <Button
      //       type="primary"
      //       size="large"
      //       shape="round"
      //       htmlType="submit"
      //       loading={status === "sending"}
      //     >
      //       Subscribe
      //     </Button>
      //   </Form.Item>
      // </Form>
    )
  } else {
    return <p>{message}</p>
  }
}
