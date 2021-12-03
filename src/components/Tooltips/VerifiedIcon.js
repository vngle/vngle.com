import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";

const VerifiedIcon = () => {
  return (
    <>
      <OverlayTrigger
        placement="right"
        trigger={["hover", "focus"]}
        overlay={
          <Tooltip id="overlay-example">
            Verified by Vngle Fact Checkers. Verification powered by grassroots
            insights & digital forensics.
          </Tooltip>
        }
      >
        <FcApproval />
      </OverlayTrigger>
    </>
  );
};

export default VerifiedIcon;
