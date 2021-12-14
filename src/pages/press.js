import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";

export default function PressPage() {
  const data = [
    {
      title:
        "WSBTV (Atlanta Channel 2) - Founder feature on our census work in College Park, GA",
      href: "https://www.wsbtv.com/video/local-video/deadline-complete-census-looms-heres-why-its-so-important/cde4bdcf-137c-466f-852f-6e59f16d2b04/",
    },
    {
      title: "TechCrunch Feature (Our Envision Accelerator Demo Week)",
      href: "https://techcrunch.com/2020/09/01/student-led-accelerator-envision-reaches-demo-week-for-class-one-looks-to-class-two/",
    },
    {
      title:
        "American Inno Feature (Our acceptance into DivInc’s Social Justice Innovation Accelerator)",
      href: "https://www.americaninno.com/austin/newsletters/1-9m-to-fuel-dancefight-app-divinc-reveals-social-justice-cohort/",
    },
    {
      title: "Georgia Tech founding feature",
      href: "https://grow.gatech.edu/wp-content/uploads/2018/04/Sucess-Stories.pdf",
    },
  ];

  return (
    <Layout>
      <Seo title="Press" />

      <div className="bg-primary p-5 mb-5" as="section">
        <Container>
          <h1 className="display-3">Press</h1>
          <h2 className="mb-0 font-sans-serif">
            Company and team features in the media.
          </h2>
        </Container>
      </div>

      <Container as="article">
        <Row>
          <Col md={4}>
            <h3 className="font-sans-serif">Recent News</h3>
          </Col>
          <Col>
            {data.map(({ title, href }) => (
              <NewsContainer>
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </NewsContainer>
            ))}
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Button size="lg">
              <h3 className="font-sans-serif mb-0">
                <a
                  href="https://drive.google.com/drive/folders/1n7C32CWUbqJBjEyfClIY-JU3n3sgMXQa?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Media Kit
                </a>
              </h3>
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
}

const NewsContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;

  a {
    color: var(--bs-dark);
    text-decoration: none;
    transition: color 0.25s;
  }

  a:hover {
    color: var(--bs-primary);
    transition: color 0.25s;
  }
`;
