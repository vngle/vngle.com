import React from "react";
import { Row, Col } from "react-bootstrap";

import Mozilla from "@images/partners/mozilla.png";
import CollegePark from "@images/partners/cp-logo.png";
import Gma from "@images/partners/gma.png";
import Goldin from "@images/partners/goldin.png";
import Mit from "@images/partners/mit.png";
import Nyc from "@images/partners/nyc.png";
import Sap from "@images/partners/sap.png";
import Newmark from "@images/partners/newmark.png";
import Starling from "@images/partners/starling.png";
import Brown from "@images/partners/brown.png";
import Ona from "@images/partners/ona.png";
import Sjn from "@images/partners/sjn.png";
import Gmc from "@images/partners/gmc.png";
import Harvard from "@images/partners/harvard.png";
import Ia from "@images/partners/ia.png";

const workedWithData = [
  {
    src: Starling,
    alt: "Starling Lab for Data Integrity",
    href: "https://www.starlinglab.org/",
  },
  {
    src: Ona,
    alt: "Online News Association",
    href: "https://journalists.org/",
  },
  {
    src: Mozilla,
    alt: "Mozilla logo",
    href: "https://builders.mozilla.community/",
  },
  {
    src: Brown,
    alt: "Brown logo",
    href: "https://brown.columbia.edu/",
  },
  {
    src: Newmark,
    alt: "Newmark logo",
    href: "https://www.journalism.cuny.edu/",
  },
  {
    src: Sjn,
    alt: "Solutions Journalism Network logo",
    href: "https://www.solutionsjournalism.org/",
  },
  {
    src: Gmc,
    alt: "Global Media Congress",
    href: "https://www.solutionsjournalism.org/",
  },
  {
    src: Harvard,
    alt: "Harvard University logo",
    href: "https://www.harvard.edu/",
  },
  {
    src: Ia,
    alt: "Internet Archive",
    href: "https://archive.org/",
  },
  {
    src: Goldin,
    alt: "Goldin Institute logo",
    href: "https://www.goldininstitute.org/",
  },
  {
    src: Nyc,
    alt: "NYC Media Lab logo",
    href: "https://www.linkedin.com/company/nyc-media-lab/",
  },
  {
    src: Sap,
    alt: "SAP logo",
    href: "https://www.sap.com/index.html",
  },
  {
    src: Mit,
    alt: "MIT Solve logo",
    href: "https://solve.mit.edu/",
  },
  {
    src: CollegePark,
    alt: "College Park (GA) logo",
    href: "https://www.collegeparkga.com/",
  },
  {
    src: Gma,
    alt: "Georgia Municipal Association logo",
    href: "https://www.gacities.com/",
  },
];

export default function ClientGrid() {
  return (
    <Row className="align-items-center text-center">
      {workedWithData.map(({ src, alt, href }, i) => {
        return (
          <Col md={4} sm={15} className="mb-5" key={i}>
            <a href={href}>
              <img alt={alt} src={src} width={200} />
            </a>
          </Col>
        );
      })}
    </Row>
  );
}
