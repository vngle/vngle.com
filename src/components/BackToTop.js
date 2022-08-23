import React from "react";
import styled from "styled-components";

const BackToTop = () => (
  <MainContainer>
    <button className="btn btn-primary top">
      <a href="#">Back To Top</a>
    </button>
  </MainContainer>
);

const MainContainer = styled.div`
  .top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: black;
    color: #fecb3e;
    outline: none;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-property: background-color, color;
    z-index: 20;
  }

  a {
    text-decoration: none;
  }
`;
export default BackToTop;
