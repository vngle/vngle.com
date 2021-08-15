import Layout from "@components/Layout";
import Seo from "@components/Seo";
import CaseStudy from "@views/vngleforcities/CaseStudy";
import { Link } from "gatsby";
import React from "react";

export default function GeorgiaElectionCaseStudy() {
  const title =
    "Bringing trusted nonpartisan coverage to Georgia local candidates";

  return (
    <Layout>
      <Seo title={title} />

      <CaseStudy id="georgia-election" title={title}>
        <p className="lead">
          Our grassroots operations bring holistic coverage to candidates who
          deserve more attention.
        </p>

        <p>
          Here’s an example of a candidate named <b>Linda Pritchett</b>’s
          campaign coverage. Linda ran for the Georgia State Senate District 39
          seat and this is a snippet from Vngle’s press conference for Linda
          Pritchett following a very public eviction during her campaign.
        </p>

        <p className="lead">
          <b>
            <Link to="/stories/68422f1e-3de8-4a6f-a103-056c79afc8ac">
              GA state senate candidate Linda Pritchett responds to her eviction
              & arrest.
            </Link>
          </b>
        </p>

        <p>
          After feeling unheard by the mainstream news outlets, she requested
          Vngle to exclusively share her response to being arrested after trying
          to retrieve her belongings following her eviction.
        </p>

        <p className="lead">
          <b>
            <Link to="/pritchett">
              Check out our full coverage throughout her campaign.
            </Link>
          </b>
        </p>
      </CaseStudy>
    </Layout>
  );
}
