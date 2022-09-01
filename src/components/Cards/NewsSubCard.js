/**
 * Card wrapper around NewsSubForm (aka. present form as a card).
 */

import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import NewsSubForm from "../Forms/NewsSubForm";

const NewsSubCard = ({ title, subtitle }) => (
  <StyledCard className="shadow-sm border-0" id="sub-card">
    <Card.Body>
      <Card.Title className="mb-3">{title}</Card.Title>
      <Card.Subtitle className="mb-4 fw-normal">{subtitle}</Card.Subtitle>
      <MailchimpSubscribe
        url={process.env.GATSBY_MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <NewsSubForm
            status={status}
            message={message}
            onSubmitted={(formData) => subscribe(formData)}
          />
        )}
      />
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
      color: var(--bs-dark);
    }
  }
`;

NewsSubCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

NewsSubCard.defaultProps = {
  title: "Stay Updated & Follow Our Movement",
};

export default NewsSubCard;
