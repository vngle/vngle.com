import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export default function CaseStudy({ children, id, title }) {
  let headerImage;

  if (id === "college-park") {
    headerImage = (
      <StaticImage
        src="images/college-park/cp-header.png"
        alt="Orange banner with College Park logo at the center"
      />
    );
  } else if (id === "georgia") {
    headerImage = (
      <StaticImage src="images/college-park/cp-header.png" alt="" />
    );
  }

  return (
    <Container>
      <HeaderContainer>{headerImage}</HeaderContainer>

      <ContentContainer>
        <h5>Case Study</h5>
        <h1 className="display-3">{title}</h1>

        {children}
      </ContentContainer>
    </Container>
  );
}

const HeaderContainer = styled.div`
  border-radius: 10px;

  .gatsby-image-wrapper img {
    border-radius: 10px;
  }
`;

const ContentContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1,
  h5 {
    font-family: "Inter", sans-serif;
  }

  .display-3 {
    font-weight: bold;
  }
`;
