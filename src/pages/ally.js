import React from "react";
import styled from "styled-components";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import { FiActivity, FiCompass, FiGlobe } from "react-icons/fi";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import TeamSvg from "../../static/images/ally/team.svg";
import ClubELogo from "../../static/images/ally/logo-club-e.png";
import CouncilmanGay from "../../static/images/ally/councilman-gay.jpg";
import OneTalentLogo from "../../static/images/ally/logo-one-talent.png";

export default () => {
  const allies = [
    {
      name: "Club E Atlanta",
      href: "https://www.clubeatlanta.com/",
      logoSrc: ClubELogo,
      bg: "#DC2FB8",
      description: (
        <>
          <p>
            <a href="https://www.clubeatlanta.com/">
              Club-E (Club Entrepreneur)
            </a>{" "}
            is a global coworking network that connects entrepreneurs to the
            financial and supportive resources they need to grow their
            businesses.
          </p>
          <p>
            <b>
              Club E Atlanta partnered with Vngle to broaden their presence and
              connect with entrepreneurs across the greater Atlanta area.
            </b>
          </p>
        </>
      ),
    },
    {
      name: "One Talent Inc",
      href: "https://www.onetalent.org/",
      logoSrc: OneTalentLogo,
      bg: "#03B7E6",
      description: (
        <>
          <p>
            <a href="https://www.onetalent.org/">One Talent Inc</a> is on a
            mission is to advance the gifts and talents of our leaders of
            tomorrow through providing mentorship to young girls.
          </p>
          <p>
            <b>
              One Talent Inc partnered with Vngle to extend their programming
              across Atlanta, South Fulton, and College Park, Georgia.
            </b>
          </p>
        </>
      ),
    },
    {
      name: "Councilmember Roderick Gay",
      href: "https://www.onetalent.org/",
      logoSrc: CouncilmanGay,
      bg: "var(--primary)",
      description: (
        <>
          <p>
            College Park Ward 4 Neighborhood Association (via City of College
            Park Councilmember Roderick Gay)
          </p>
          <p>
            “Vngle has been tremendous in helping me connect with my
            constituents and gather the most up-to-date information on their
            needs. They now are my go to channel.” -{" "}
            <b>Councilmember Roderick Gay</b>
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Styled>
        <SEO title="Become an Ally" />

        <Jumbotron as="section" className="bg-primary title-banner">
          <Container>
            <h1 className="display-2">Become an Ally</h1>
            <h2>Grow with Vngle in cities across America!</h2>
            <Button
              size="lg"
              href="https://forms.gle/XQ7ZBAje4pksxdnDA"
              target="_blank"
              rel="noreferrer"
            >
              Become an ally today!
            </Button>
          </Container>
        </Jumbotron>

        <Container>
          <section className="intro">
            <Row xs={1} md={2}>
              <Col className="intro__content">
                <h1>
                  An ally is a <b>collaborative sponsor</b> aiming to extend
                  their presence across a desired geography.
                </h1>
                <p>
                  Vngle partners with allies to grow awareness around their
                  brands & initiatives in targeted areas. We know how to
                  uniquely connect with communities, and we help our allies
                  launch custom campaigns to deepen their relationship with
                  diverse communities.
                </p>
              </Col>
              <Col>
                <img src={TeamSvg} alt="" />
              </Col>
            </Row>
          </section>
        </Container>

        <Jumbotron className="bg-secondary text-light">
          <Container>
            <h1 className="font-sans-serif mb-5">
              Benefits of becoming an ally
            </h1>
            <Row className="text-center" xs={1} md={3}>
              <Col>
                <h1>
                  <FiActivity className="text-primary" />
                </h1>
                <p>
                  Tailored campaigns to collect insights and build your
                  awareness across your target cities.
                </p>
              </Col>
              <Col>
                <h1>
                  <FiCompass className="text-primary" />
                </h1>
                <p>
                  “Various angles” of consultation ranging from strategic
                  marketing, grassroots campaigning, geopolitical strategy, and
                  product development.
                </p>
              </Col>
              <Col>
                <h1>
                  <FiGlobe className="text-primary" />
                </h1>
                <p>
                  Be seen as a social good community brand, through sponsoring
                  diverse local news coverage that your city needs.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container className="examples">
          <h1 className="text-center display-4">
            Recent for-profit, non-profit, & local governmental allies
          </h1>

          {allies.map(({ name, href, logoSrc, description, bg }, i) => (
            <Row xs={1} md={2} key={i} className="mb-4">
              <Col className="examples__content">
                <h2 className="font-sans-serif">{name}</h2>
                <>{description}</>
              </Col>
              <LogoCol className="text-center shadow" bg={bg}>
                <a href={href} className="mx-auto">
                  <img
                    src={logoSrc}
                    alt=""
                    width="50%"
                    className="my-4 rounded"
                  />
                </a>
              </LogoCol>
            </Row>
          ))}
        </Container>
      </Styled>
    </Layout>
  );
};

const Styled = styled.div`
  .title-banner {
    text-align: center;
    background-image: url(https://source.unsplash.com/1lfI7wkGWZ4);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;

    h1 {
      font-weight: 900;
    }

    h2 {
      font-family: "Inter", sans-serif;
    }
  }

  .intro {
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .examples {
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const LogoCol = styled(Col)`
  background-color: ${props => props.bg};
  border-radius: 10px;
`;
