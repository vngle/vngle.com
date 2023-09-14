import React from "react";
import { Row, Col } from "react-bootstrap";

import Mozilla from "@images/partners/mozilla.png";
import Columbia from "@images/partners/columbia-tamer.png";
import GoodieNation from "@images/partners/goodie-nation.png";
import Envision from "@images/partners/envision.png";
import DivInc from "@images/partners/divinc.png";
import CollegePark from "@images/partners/cp-logo.png";
import Gma from "@images/partners/gma.png";
import Goldin from "@images/partners/goldin.png";
import Mit from "@images/partners/mit.png";
import Nyc from "@images/partners/nyc.png";
import Pyxera from "@images/partners/pyxera.png";
import Sap from "@images/partners/sap.png";
import Newmark from "@images/partners/newmark.png";
import Starling from "@images/partners/starling.png";
import Brown from "@images/partners/brown.png";

const workedWithData = [
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
  {
    src: Mozilla,
    alt: "Mozilla logo",
    href: "https://builders.mozilla.community/",
  },
  {
    src: Columbia,
    alt: "Columbia Tamer Center logo",
    href: "https://www8.gsb.columbia.edu/socialenterprise/",
  },
  {
    src: Envision,
    alt: "Envision logo",
    href: "https://www.envisionaccelerator.com/",
  },
  {
    src: DivInc,
    alt: "DivInc logo",
    href: "https://www.divinc.org/apply",
  },
  {
    src: GoodieNation,
    alt: "Goodie Nation logo",
    href: "https://goodienation.org/",
  },
  {
    src: Goldin,
    alt: "Goldin Institute logo",
    href: "#",
  },
  {
    src: Mit,
    alt: "MIT Solve logo",
    href: "#",
  },
  {
    src: Nyc,
    alt: "NYC Media Lab logo",
    href: "#",
  },
  {
    src: Pyxera,
    alt: "Pyxera logo",
    href: "#",
  },
  {
    src: Sap,
    alt: "SAP logo",
    href: "#",
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
    src: Starling,
    alt: "Starling logo",
    href: "https://www.starlinglab.org/",
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
