import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import ClubELogo from "../../static/images/ally/logo-club-e.png";
import CouncilmanGay from "../../static/images/ally/councilman-gay.jpg";
import OneTalentLogo from "../../static/images/ally/logo-one-talent.png";

export default () => {
  const allies = [
    {
      name: "Club E Atlanta",
      href: "https://www.clubeatlanta.com/",
      logoSrc: ClubELogo,
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
      <SEO title="Become an Ally" />

      <Jumbotron className="bg-primary" as="section">
        <Container>
          <h1 className="mb-0">Grow with Vngle in cities across America!</h1>
        </Container>
      </Jumbotron>

      <Container as="article">
        <section>
          <p>
            An ally is a <b>collaborative sponsor</b> aiming to extend their
            presence across a desired geography.
          </p>
          <p>
            Vngle partners with allies to grow awareness around their brands &
            initiatives in targeted areas. We know how to uniquely connect with
            communities, and we help our allies launch custom campaigns to
            deepen their relationship with diverse communities.
          </p>
          <p>
            <b>Some of the benefits of becoming an ally:</b>
          </p>
          <ul>
            <li>
              Tailored campaigns to collect insights and build your awareness
              across your target cities.
            </li>
            <li>
              “Various angles” of consultation ranging from strategic marketing,
              grassroots campaigning, geopolitical strategy, and product
              development.
            </li>
            <li>
              Be seen as a social good community brand, through sponsoring
              diverse local news coverage that your city needs.
            </li>
          </ul>

          <Button
            size="lg"
            href="https://forms.gle/XQ7ZBAje4pksxdnDA"
            target="_blank"
            rel="noreferrer"
          >
            Become an ally today!
          </Button>
          <p>
            names? Email us: <a href="mailto:info@vngle.com">info@vngle.com</a>
          </p>

          <h2>
            Examples of recent for-profit, non-profit, & local governmental
            allies:
          </h2>

          {allies.map(({ name, href, logoSrc, description }) => (
            <>
              <h3 className="font-sans-serif">{name}</h3>
              <a href={href} className="mx-auto">
                <img src={logoSrc} alt="" width="50%" className="my-4" />
              </a>
              {description}
            </>
          ))}
        </section>
      </Container>
    </Layout>
  );
};
