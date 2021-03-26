/**
 * Card wrapper around NewsSubForm (aka. present form as a card).
 */

import React from "react";
import PropTypes from "prop-types";
import { Card, Row } from "react-bootstrap";
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import NewsSubForm from "./NewsSubForm";

const NewsSubCard = ({ title, subtitle }) => (
  <StyledCard className="shadow-sm border-0" id="sub-card">
    <Card.Body>
      <Card.Title className="mb-3">{title}</Card.Title>
      <Card.Subtitle className="mb-4 font-weight-normal">
        {subtitle}
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
);

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
      color: var(--dark);
    }
  }
`;

NewsSubCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

NewsSubCard.defaultProps = {
  title: "Get the pulse of what's going on near you!",
  subtitle: (
    <>
      Sign up for hyper-local stories on everything from <b>local campaigns</b>,{" "}
      <b>protests</b>, to <b>COVID-19</b>.
    </>
  ),
};

export default NewsSubCard;
