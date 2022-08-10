import React from "react";
import styled from "styled-components";

const SinContainer = ({ title, titleColor, paragraph, bgColor, aside }) => {
  return (
    <Container titleColor= {titleColor} bgColor={bgColor} aside={aside}>
      <div className="sub-container">
        <div>
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
        <div className="btn-container">{aside}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 0rem 0.75rem;

  h1 {
    color: ${(props) => props.titleColor};
    padding-top: 2rem;
  }

  p {
    color: var(--bs-primary);
  }

  p,
  h1 {
    font-family: "Inter", sans-serif;
    margin-left: 10px;
  }

  .sub-container {
    background-color: ${(props) => props.bgColor};
    padding: 10px 10px;
    display: ${(props) => (props.aside ? "flex" : "block")};
  }
`;

export default SinContainer;
