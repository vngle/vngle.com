import { Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import React from "react";

const CtaBanner = ({ paragraph, buttonLink, buttonText, bgColor }) => {
  return (
    <Banner className="shadow" bgColor={bgColor}>
      <Row className="text-center">
        <Col xs={12} md="auto">
          <p className="mb-3 mb-md-0 mx-auto">{paragraph}</p>
        </Col>
        <Col>
          <Button size="sm" href={buttonLink} variant="dark">
            {buttonText}
          </Button>
        </Col>
      </Row>
    </Banner>
  );
};

const Banner = styled.div`
  background: ${(props) => props.bgColor};
  width: fit-content;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1rem;
  display: flex;

  p {
    margin-bottom: 0;
    margin-right: 1rem;
    line-height: 30px;
  }
`;

export default CtaBanner;
