import React from "react"
import { Card, Row } from "react-bootstrap"
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi"
import styled from "styled-components"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import NewsSubForm from "./newsSubForm"

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
        url={process.env.MAILCHIMP_URL}
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
          <FiInstagram />
        </a>
        <a href="https://www.facebook.com/vnglestories/">
          <FiFacebook />
        </a>
        <a href="https://www.linkedin.com/company/vngle/">
          <FiLinkedin />
        </a>
        <a href="https://twitter.com/vnglestories">
          <FiTwitter />
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

  .row {
    font-size: 1.5rem;

    a {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`
