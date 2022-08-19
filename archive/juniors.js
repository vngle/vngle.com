import Seo from "@components/Seo";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function JuniorsPage() {
  return (
    <PreviewWrapper>
      <Seo title="Vngle Juniors" />

      <StaticImage
        src="../images/vngle-juniors/preview-bg.jpg"
        alt=""
        loading="eager"
      />
      <Container>
        <StaticImage
          src="../images/logo.png"
          alt="Vngle logo"
          width={100}
          className="logo"
        />
        <h1 className="font-serif display-1 fw-bold fst-italic mt-4">
          Vngle Juniors
        </h1>
        <p className="fs-3">Coming Soon</p>
      </Container>
    </PreviewWrapper>
  );
}

const PreviewWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    display: block;

    .logo {
      margin-top: 2rem;
    }
  }
`;
