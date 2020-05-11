import React from "react"
import { Form, Button } from "react-bootstrap"

export default ({ status, message, onSubmitted }) => {
  if (status !== "success") {
    return (
      <Form>
        <Form.Group controlId="formMailchimp">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter city" />
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
