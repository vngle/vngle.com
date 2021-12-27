import React from "react";
import {
  OverlayTrigger,
  Popover,
  PopoverBody,
  PopoverHeader,
} from "react-bootstrap";
import { FcApproval } from "react-icons/fc";

const VerifiedIcon = () => {
  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement="right"
      overlay={
        <Popover id="popover-basic">
          <PopoverHeader as="h3">Verified by Vngle Fact Checkers</PopoverHeader>
          <PopoverBody>
            Verification powered by grassroots insights & digital forensics
          </PopoverBody>
        </Popover>
      }
    >
      <span>
        <FcApproval />
      </span>
    </OverlayTrigger>
  );
};

export default VerifiedIcon;
