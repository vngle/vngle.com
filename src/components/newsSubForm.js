import React from "react"
import { Form, Input, Button } from "antd"
import {
  MailOutlined,
  EnvironmentOutlined,
  LoadingOutlined,
} from "@ant-design/icons"
import "antd/dist/antd.css"

export default ({ status, message, onSubmitted }) => {
  if (status !== "success") {
    return (
      <Form
        {...layout}
        name="newsletter-subscribe"
        initialValues={{ remember: true }}
        onFinish={onSubmitted}
      >
        <Form.Item
          name="EMAIL"
          rules={[
            { required: true, message: "Please enter your email address." },
            {
              type: "email",
              message: "Please enter a valid email address.",
            },
          ]}
        >
          <Input
            placeholder="Email"
            prefix={<MailOutlined className="site-form-item-icon" />}
            size="large"
          />
        </Form.Item>
        <Form.Item name="city-zip">
          <Input
            placeholder="City/Zipcode"
            prefix={<EnvironmentOutlined className="site-form-item-icon" />}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" shape="round" htmlType="submit">
            {status === "sending" ? <LoadingOutlined /> : "Subscribe"}
          </Button>
        </Form.Item>
      </Form>
    )
  } else {
    return <p>{message}</p>
  }
}

const layout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
}
