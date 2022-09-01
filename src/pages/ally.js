import React from "react";
import styled from "styled-components";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FiActivity, FiCompass, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";

import Sub from "@components/Forms/Sub";
import TeamSvg from "@images/ally/team.svg";
import ClubELogo from "@images/ally/logo-club-e.png";
import CouncilmanGay from "@images/ally/councilman-gay.jpg";
import VietnamVeteransLogo from "@images/ally/logo-vietnam-veterans-of-america.png";

export default function AllyPage() {
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
      name: "Vietnam Veterans of America",
      href: "https://www.sonsofatlanta.org/",
      logoSrc: VietnamVeteransLogo,
      bg: "#03B7E6",
      description: (
        <>
          <p>
            VVA promotes and supports the full range of issues important to
            Vietnam veterans, to create a new identity for this generation of
            veterans, and to change public perception of Vietnam veterans.
          </p>
          <p>
            <b>
              VVA Metro-Atlanta Chapter #1118 worked with Vngle to kickoff thier
              media strategy around the{" "}
              <a href="https://www.sonsofatlanta.org/">
                Sons of Atlanta Memorial
              </a>
              , a Vietnam Veteran Memorial at Piedmont Park, in Atlanta, GA.
            </b>
          </p>
        </>
      ),
    },
    {
      name: " City of College Park, GA Ward 4 Neighborhood Association (via  Councilmember Roderick Gay)",
      href: "https://www.collegeparkga.com/government/mayor___council/councilman_roderick_gay",
      logoSrc: CouncilmanGay,
      bg: "var(--bs-primary)",
      description: (
        <>
          <p>
            “Vngle has been tremendous in helping me connect with my
            constituents and gather the most up-to-date information on their
            needs. They now are my go to community channel.”{" "}
            <b>- Councilmember Roderick Gay</b>
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Styled>
        <Seo title="Become an Ally" />

        <div as="section" className="bg-primary title-banner py-4">
          <Container>
            <h1 className="display-2">Become an Ally</h1>
            <h2>Grow with Vngle in cities across America!</h2>

            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1.9, delay: 3 }}
            >
              <Button size="lg" href="#Form-2" rel="noreferrer">
                Become an ally today!
              </Button>
            </motion.div>
          </Container>
        </div>

        <Container>
          <section className="intro">
            <Row xs={1} md={2}>
              <Col className="intro__content">
                <h1 style={{ marginTop: "5rem", marginBottom: "0.5rem" }}>
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

        <div className="bg-secondary text-light py-4 mb-5">
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
        </div>

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
      <a id="Form-2">
        {" "}
        <Sub />
      </a>
    </Layout>
  );
}

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
      animation: reveal 3000ms ease-in-out forwards 200ms,
        glow 2500ms linear infinite 2000ms;
      animation-delay: 1s;
    }
  }

  @keyframes reveal {
    80% {
      letter-spacing: 8px;
    }
    100% {
      background-size: 300% 300%;
    }
  }
  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
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
  background-color: ${(props) => props.bg};
  border-radius: 10px;
`;
