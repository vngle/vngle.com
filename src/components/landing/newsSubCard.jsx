import React from "react"
import { Card, Row } from "react-bootstrap"
import styled from "styled-components"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import NewsSubForm from "./newsSubForm"
import Facebook from "../../../static/images/icons/facebook.svg"
import Instagram from "../../../static/images/icons/instagram.svg"
import Linkedin from "../../../static/images/icons/linkedin.svg"
import Twitter from "../../../static/images/icons/twitter.svg"

export default () => (
  <StyledCard className="shadow-sm border-0" id="sub-card">
    <Card.Body>
      <Card.Title className="mb-3">
        Get the pulse of what's going on near you!
      </Card.Title>
      <Card.Subtitle className="mb-4 font-weight-normal">
        Sign up for hyper-local stories on everything from{" "}
        <b>local campaigns</b>, <b>protests</b>, to <b>COVID-19</b>.
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
  </StyledCard>
)

const StyledCard = styled(Card)`
  .card-title {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  }

  .card-subtitle {
    font-family: "Inter", sans-serif;
  }
`
