import React from "react";
import Layout from "@components/Layouts/MainLayout";
import Seo from "@components/Seo";
import CaseStudy from "@components/Layouts/CaseStudy";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";

export default function CpCaseStudyPage() {
  const title = "Improving city communication in College Park during COVID-19";
  return (
    <Layout>
      <Seo title={title} />

      <CaseStudy id="college-park" title={title}>
        <p className="lead">
          During the height of COVID-19, Vngle helped College Park better
          connect with its constituents through grassroots video news coverage,
          engagement and insights. Here’s 3 examples:
        </p>

        <ol>
          <li>
            <p>
              To give citizens a central hub to get informed during COVID-19, we
              created College Park it’s own digital Front Page. It aggregates
              all active stories on the city and allows the public to request
              coverage on what’s going underrepresented to fill in the gaps.
            </p>

            <figure className="figure">
              <StaticImage
                src="../../images/services/college-park/cp-front-page.png"
                alt="Vngle College Park front page"
              />
              <figcaption className="figure-caption">
                Our College Park front page
              </figcaption>
            </figure>
          </li>
          <li>
            <p>
              Our grassroots coverage helped push the needle in helping the city
              address having the lowest 2020 Census participation across both
              Fulton and Clayton counties.
            </p>

            <figure className="figure">
              <StaticImage
                src="../../images/services/college-park/census.png"
                alt="Vngle College Park front page"
              />
            </figure>
          </li>
          <li>
            <p>
              Our team aided council members in gaining new accelerated data on
              the needs of their constituents through our direct engagement
              service. Along with this, we helped power many town halls and
              stakeholder discussions to increase their outreach to
              underrepresented citizens.
            </p>

            <Row>
              <Col md={6}>
                <figure className="figure">
                  <StaticImage
                    src="../../images/services/college-park/stakeholder-discussion.png"
                    alt="Vngle College Park front page"
                  />
                  <figcaption className="figure-caption">
                    Example of a flyer Vngle posted on social media to advertise
                    the stakeholder discussion
                  </figcaption>
                </figure>
              </Col>
              <Col md={6} className="align-self-end">
                <figure className="figure">
                  <StaticImage
                    src="../../images/services/college-park/cruise-for-cause.png"
                    alt="Vngle College Park front page"
                    layout="fullWidth"
                  />
                  <figcaption className="figure-caption">
                    Vngle founder & CEO Blake Stoner speaking at the Cruise for
                    a Cause event
                  </figcaption>
                </figure>
              </Col>
            </Row>
          </li>
        </ol>

        <h1>
          We can help you do even more in your city.{" "}
          <a
            href="https://forms.gle/e6y4Gkna5S9kymdE8"
            target="_blank"
            rel="noreferrer"
          >
            Sign up to learn more
          </a>
        </h1>
      </CaseStudy>
    </Layout>
  );
}
