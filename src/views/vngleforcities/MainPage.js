import React from "react";
import styled from "styled-components";
import "styled-components/macro";
import { Row, Col, Button } from "react-bootstrap";
import { FcConferenceCall, FcDepartment } from "react-icons/fc";
import { StaticImage } from "gatsby-plugin-image";

const MainPage = () => {
  return (
    <MainPageContainer>
      <SplitSection background="var(--bs-primary)" className="gy-3">
        <Col md={6} xs={12}>
          <div className="content p-md-5">
            <p className="sup">Vngle for Cities</p>
            <Heading>
              <u>Your city + our grassroots operations</u>: let’s create deeper
              connection and representation for your area.
            </Heading>
          </div>
        </Col>
        <Col className="image" md={6} xs={12}>
          <StaticImage
            src="https://source.unsplash.com/XV81dRUMzpo"
            alt="City of Atlanta, GA"
          />
        </Col>
      </SplitSection>

      <Section width="90%" className="p-md-5">
        <Heading weight="500" lineHeight="1.3em">
          Substantive local impact comes from grassroots up approaches, not top
          down thinking.{" "}
          <b>
            Whether it's in business, politics, or any field, organizations must
            stay in touch with locals to avoid blind spots in their decisions.
          </b>
        </Heading>
        <Heading weight="500" lineHeight="1.3em">
          We help organizations overcome local echo chambers to view the needs
          of communities and build an authentic presence among them.
        </Heading>
      </Section>

      <Section background="#1ee592" className="p-md-5">
        <FcConferenceCall />
        <Heading>Interested in becoming a local partner?</Heading>
        <Button
          size="lg"
          variant="light"
          href="https://forms.gle/e6y4Gkna5S9kymdE8"
        >
          Let's talk
        </Button>
      </Section>

      <Section>
        <Heading center>Our local services</Heading>
      </Section>

      <SplitSection background="#3cf" className="gy-3">
        <Col md={6} xs={12}>
          <div className="content p-md-5">
            <p className="sup">COVERAGE</p>
            <Heading>
              Get organic grassroots video content curated for the local
              communities you target.
            </Heading>
            <p>
              Our coverage helps organizations stay connected and build their
              presence in the cities they care about. We can work with your
              media team or you can outsource your media needs to us and we’ll
              create an engaging grassroots content strategy to help you stay
              connected to, and have a presence among the people you seek to
              serve.
            </p>
            <Button
              size="lg"
              variant="light"
              href="https://forms.gle/e6y4Gkna5S9kymdE8"
            >
              Let's cover you
            </Button>
          </div>
        </Col>
        <Col className="image" md={6} xs={12}>
          <StaticImage
            src="https://source.unsplash.com/SRReffF4vFA"
            alt="Journalist with a camera"
          />
        </Col>
      </SplitSection>

      <SplitSection background="#ff52db" className="gy-3">
        <Col md={6} md={{ order: "last" }}>
          <div className="content p-md-5">
            <p className="sup">ENGAGE</p>
            <Heading>
              Get a wave of on-demand grassroots direct community engagement
              support.
            </Heading>
            <p>
              Through Engage, Vngle keeps your finger on the pulse of the
              shifting environment around your local area. Think of us as your
              localized census service: we craft and deploy strategic field
              plans to reach local areas directly to gain or relay updated
              information.
            </p>
            <Button
              size="lg"
              variant="light"
              href="https://forms.gle/e6y4Gkna5S9kymdE8"
            >
              Let's engage your city
            </Button>
          </div>
        </Col>
        <Col className="image" md={6}>
          <StaticImage
            src="https://source.unsplash.com/nPz8akkUmDI"
            alt="Crowd of people cheering"
          />
        </Col>
      </SplitSection>

      <SplitSection background="var(--bs-primary)" className="gy-3">
        <Col md={6}>
          <div className="content p-md-5">
            <p className="sup">INSIGHTS</p>
            <Heading>
              Get research and consultation on how to address unique concerns
              that matter most to your city.
            </Heading>
            <p>
              With Vngle Insights, we listen carefully to your city to ensure
              everyone’s voices are heard, to get you the data needed to make
              the best decisions. Our insights make you aware of the matters
              that are important to constituents. We offer you our grassroots
              knowledge from working across 21+ cities to give you an advantage
              in devising positive strategies to address your current
              challenges.
            </p>
            <Button
              size="lg"
              variant="light"
              href="https://forms.gle/e6y4Gkna5S9kymdE8"
            >
              Let's work
            </Button>
          </div>
        </Col>
        <Col className="image" md={6}>
          <StaticImage
            src="https://source.unsplash.com/1K6IQsQbizI"
            alt="Neon light that writes 'Data has a better idea'"
          />
        </Col>
      </SplitSection>

      <Section className="text-center">
        <Heading center>
          <FcDepartment />
        </Heading>
        <Heading center>
          Why do I need <u>Vngle for Cities</u>?
        </Heading>
        <Heading weight="normal" lineHeight="1.5em" size="2.3rem" center>
          True grassroots engagement by leaders is a necessity in the fast
          changing world we live in. In order to adapt to an ever-changing
          landscape, leaders must keep their finger on the pulse of whatever
          environment they may find themselves in. Our team can help you do
          that.
        </Heading>
        <Button size="lg" href="https://forms.gle/e6y4Gkna5S9kymdE8">
          Let's talk
        </Button>
      </Section>
    </MainPageContainer>
  );
};

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: ${(props) => props.weight || "bold"};
  font-size: clamp(1rem, 7vw, ${(props) => props.size || "2.6rem"});
  text-align: ${(props) => (props.center ? "center" : "left")};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

const MainPageContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const SplitSection = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .content {
    background: ${(props) => props.background};
    padding: 2rem;
    border-radius: 10px;
    height: 100%;

    p.sup {
      font-weight: bold;
      font-size: clamp(1rem, 2.5vw, 1.5rem);
    }
  }

  .image {
    height: auto;

    .gatsby-image-wrapper {
      height: 100%;
      border-radius: 10px;
    }
  }
`;

const Section = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  border-radius: 10px;

  svg {
    font-size: 5rem;
  }
`;

export default MainPage;
