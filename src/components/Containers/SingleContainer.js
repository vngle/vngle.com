import React from "react";
import styled from "styled-components";

const SinContainer = ({ title, titleColor, paragraph, bgColor, aside }) => {
  return (
    <Container titleColor= {titleColor} bgColor={bgColor} aside={aside}>
      <div className="sub-container">
        <div>
          <h2>{title}</h2>
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
  background-color: ${(props) => props.bgColor};
  z-index:15;
  h2 {
    color: ${(props) => props.titleColor};
    padding-top: 2rem;
    display:flex;
    justify-content:center;
    font-weight:bold;
  }

  p {
    color: var(--bs-primary);
  }

  p,
  h2 {
    font-family: "Inter", sans-serif;
    margin-left: 10px;
  }

  .sub-container {
    padding: 10px 10px;
    display: ${(props) => (props.aside ? "flex" : "block")};
  }
`;

export default SinContainer;