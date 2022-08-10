import { Button } from "react-bootstrap";
import styled from "styled-components";
import React from "react";

// const CtaBanner = () => {
//   return (
//     <Banner className="shadow">
//       <p>Capture your story with our award-winning content services</p>
//       <Button
//         // css={{
//         //   background: "#1a111",
//         //   fw: "bold",
//         //   color: "#ffcc35",
//         //   width: "130px",
//         //   border: "4px double black",
//         //   margin: "auto",
//         //   transition: "all 0.5s",
//         // }}
//         size="sm"
//         href="https://docs.google.com/forms/d/e/1FAIpQLSf80FHwD9CVDZK954uUQ_-_0nkMvBGYT1vZ6nHvXsD12H7fDg/viewform"
//         variant="dark"
//       >
//         CONTACT US
//       </Button>
//     </Banner>
//   );
// };

const CtaBanner = ({
  paragraph,
  buttonLink,
  buttonText,
  bgColor,
  children,
}) => {
  return (
    <Banner className="shadow" bgColor={bgColor}>
      <p>{paragraph}</p>
      <Button size="sm" href={buttonLink} variant="dark">
        {buttonText}
      </Button>
      {children}
    </Banner>
  );
};

const Banner = styled.div`
  background: ${(props) => props.bgColor};
  width: fit-content;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1rem;
  display: flex;

  p {
    margin-bottom: 0;
    margin-right: 1rem;
    line-height: 30px;
  }
`;

export default CtaBanner;
