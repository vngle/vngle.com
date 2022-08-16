import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";


const ButtonContainer = ({ title, titleColor, buttonLink, buttonText, buttonColor, butTexCol, bgColor, aside }) => {
  return (
    <Container titleColor={titleColor} buttonColor={buttonColor} butTexCol={butTexCol} bgColor={bgColor} aside={aside}>
      <div className="sub-container">
        <h1>{title}</h1>
          <Button size="sm" href={buttonLink} variant="dark">
            {buttonText}
          </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 0.75rem 0.75rem;

  h1 {
    max-width: 59rem;
    color: ${(props) => props.titleColor};
    margin-right: 1rem;
    font-family: "Inter", sans-serif;
    margin-bottom: 0rem;
    line-height: 1.4;

  }

  .sub-container {
    background-color: ${(props) => props.bgColor};
    padding: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      background-color: ${(props) => props.buttonColor};
      color: ${(props) => props.butTexCol};
      padding: 0.7rem;
      align-items: center;
      justify-content: center;
      display: flex;
    }
  }
`;

export default ButtonContainer;
