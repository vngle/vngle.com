import React from "react";
import { Row, Col } from "react-bootstrap";

import MozillaLogo from "@images/partners/mozilla.png";
import ColumbiaLogo from "@images/partners/columbia-tamer.png";
import GoodieNationLogo from "@images/partners/goodie-nation.png";
import EnvisionLogo from "@images/partners/envision.png";
import DivIncLogo from "@images/partners/divinc.png";
import CollegeParkLogo from "@images/partners/cp-logo.png";
import GmaLogo from "@images/partners/gma.png";

const workedWithData = [
  {
    src: CollegeParkLogo,
    alt: "College Park (GA) logo",
    href: "https://www.collegeparkga.com/",
  },
  {
    src: GmaLogo,
    alt: "Georgia Municipal Association logo",
    href: "https://www.gacities.com/",
  },
  {
    src: MozillaLogo,
    alt: "Mozilla logo",
    href: "https://builders.mozilla.community/",
  },
  {
    src: ColumbiaLogo,
    alt: "Columbia Tamer Center logo",
    href: "https://www8.gsb.columbia.edu/socialenterprise/",
  },
  {
    src: EnvisionLogo,
    alt: "Envision logo",
    href: "https://www.envisionaccelerator.com/",
  },
  {
    src: DivIncLogo,
    alt: "DivInc logo",
    href: "https://www.divinc.org/apply",
  },
  {
    src: GoodieNationLogo,
    alt: "Goodie Nation logo",
    href: "https://goodienation.org/",
  },
];

export default function ClientLogoGrid() {
  return (
    <Row className="align-items-center text-center">
      {workedWithData.map(({ src, alt, href }, i) => {
        return (
          <Col md={4} sm={12} className="mb-5" key={i}>
            <a href={href}>
              <img alt={alt} src={src} width={200} />
            </a>
          </Col>
        );
      })}
    </Row>
  );
}
