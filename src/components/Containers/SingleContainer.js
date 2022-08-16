import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const SinContainer = ({ title, titleColor, paragraph, bgColor, aside }) => {
  return (
    <Wrapper
      titleColor={titleColor}
      bgColor={bgColor}
      aside={aside}
      className="p-4"
    >
      <Container className="sub-container">
        <div>
          <h1>{title}</h1>
          {paragraph && <p>{paragraph}</p>}
        </div>
        <div className="btn-container">{aside}</div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.bgColor};

  h1 {
    color: ${(props) => props.titleColor};
    margin-bottom: 0;
  }

  p {
    color: var(--bs-primary);
    margin-bottom: 0;
  }

  p,
  h1 {
    font-family: "Inter", sans-serif;
  }

  .container {
    display: ${(props) => (props.aside ? "flex" : "block")};
  }
`;

export default SinContainer;
