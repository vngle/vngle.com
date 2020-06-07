import React from "react"
import { Card, Row } from "react-bootstrap"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import NewsSubForm from "../components/newsSubForm"
import Facebook from "../../static/images/icons/facebook.svg"
import Instagram from "../../static/images/icons/instagram.svg"
import Linkedin from "../../static/images/icons/linkedin.svg"
import Twitter from "../../static/images/icons/twitter.svg"

export default () => (
  <Card className="shadow-sm border-0" id="sub-card">
    <Card.Body>
      <Card.Title as="h2" className="mb-3">
        Sign up for community updates!
      </Card.Title>
      <Card.Subtitle className="mb-4 font-weight-normal">
        Get the latest local <b>COVID-19 updates</b> near you.
      </Card.Subtitle>
      <MailchimpSubscribe
        url={process.env.GATSBY_MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <NewsSubForm
            status={status}
            message={message}
            onSubmitted={formData => subscribe(formData)}
          />
        )}
      />
      <Row className="justify-content-around mt-4">
        <a href="https://www.instagram.com/vnglestories/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/vnglestories/">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/vngle/">
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <a href="https://twitter.com/vnglestories">
          <img src={Twitter} alt="Twitter" />
        </a>
      </Row>
    </Card.Body>
  </Card>
)
