import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import { Modal, ProgressBar } from "react-bootstrap";

const ProgressModal = ({ progress }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (progress > 0 && progress < 100) {
      setShow(true);
    }
  }, [progress]);

  const hideProgress = () => setShow(false);
  const createInfo = () => {
    let ret = <div>Error! Please contact admin for assistance.</div>;

    if (progress >= 100 || progress <= 0) {
      ret = <div>Upload Complete!</div>;
    } else if (progress > 0) {
      ret = <ProgressBar animated now={progress} />;
    }

    return ret;
  };

  return (
    <Modal show={show} onHide={hideProgress}>
      <Modal.Header>Upload Progress</Modal.Header>
      <Modal.Body>{createInfo()}</Modal.Body>
    </Modal>
  );
};

ProgressModal.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressModal;
