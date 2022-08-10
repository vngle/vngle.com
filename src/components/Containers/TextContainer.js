import React from "react";
import styled from "styled-components";

const TextContainer = ({ title, titleColor, bgColor }) => {
  return (
    <Container titleColor= {titleColor} bgColor={bgColor}>
      <div className="sub-container">
        <h1>{title}</h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  // padding: 0.75rem 0.75rem;
  padding: 0rem 0.75rem;

  h1 {
    color: ${(props) => props.titleColor};
    font-family: "Inter", sans-serif;
    margin-bottom: 0px;
  }

  .sub-container {
    background-color: ${(props) => props.bgColor};
    padding: 40px 40px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export default TextContainer;
