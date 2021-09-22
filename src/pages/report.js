import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FcOk, FcCheckmark } from "react-icons/fc";
import { FaSlack } from "react-icons/fa";
import styled from "styled-components";

import Seo from "../components/Seo";
import Layout from "../components/Layouts/MainLayout";
import ReportForm from "../components/Forms/ReportForm";

const Report = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const perks = [
    "Show off your city's culture",
    "Earn passive income",
    "Gain local influence",
  ];

  return (
    <Layout>
      <Seo title="Report a story" />

      <Container>
        {formSubmitted ? (
          <ConfirmDiv>
            <FcOk className="icon-ok" />
            <h1 className="display-4">Thank you for submitting your story!</h1>
            <p>We will review your story and update you as soon as possible!</p>
            <h2>Meanwhile... Join the Vngle community!</h2>
            <Button size="lg" href="https://vngle.typeform.com/to/ml10m5DC">
              <FaSlack className="icon-slack" /> Request Invitation
            </Button>
            <ul className="perk-list">
              {perks.map((perk, i) => (
                <li key={i}>
                  <FcCheckmark />
                  {perk}
                </li>
              ))}
            </ul>
          </ConfirmDiv>
        ) : (
          <>
            <h1 className="text-center">Report a Story</h1>
            <ReportForm setFormSubmitted={setFormSubmitted} />
          </>
        )}
      </Container>
    </Layout>
  );
};

const ConfirmDiv = styled.div`
  text-align: center;

  .icon-ok {
    font-size: 7rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
  }

  h2 {
    font-family: "Inter", sans-serif;
    margin-top: 7rem;
    margin-bottom: 2rem;
  }

  .btn {
    .icon-slack {
      margin-bottom: 3px;
    }
  }

  .perk-list {
    max-width: 255px;
    margin: 0 auto;
    margin-top: 1rem;
    list-style: none;
    padding: 0;
    line-height: 3em;
    text-align: left;

    li {
      font-size: 1rem;
    }

    svg {
      margin-right: 7px;
      margin-bottom: 5px;
    }
  }
`;

export default Report;
