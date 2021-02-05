import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Modal, ProgressBar } from "react-bootstrap";

class PopoverProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { progress } = props;
    const newState = state;
    if (progress > 0 && progress < 100) {
      newState.showing = true;
    }
    return newState;
  }

  hideProgress = () => {
    this.setState({
      showing: false,
    });
  };

  progressInfo = () => {
    const { progress } = this.props;
    let returnValue = <div>Error!</div>;
    if (progress >= 100 || progress <= 0) {
      returnValue = <div>Upload Complete!</div>;
    } else if (progress > 0) {
      returnValue = <ProgressBar now={progress} />;
    }
    return returnValue;
  };

  overlayProgress = () => {
    const { showing } = this.state;
    return (
      <Modal
        id="popup"
        style={{ maxWidth: 755 }}
        isOpen={showing}
        toggle={this.hideProgress}
      >
        <Modal.Header toggle={this.hideProgress}>Upload Progress</Modal.Header>
        <Modal.Body>{this.progressInfo()}</Modal.Body>
      </Modal>
    );
  };

  render() {
    return <div>{this.overlayProgress()}</div>;
  }
}

PopoverProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default PopoverProgress;
