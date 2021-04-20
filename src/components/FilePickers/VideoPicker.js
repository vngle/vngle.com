import React, { useState } from "react";
import { FormFile, FormLabel } from "react-bootstrap";
import PropTypes from "prop-types";

const VideoPicker = ({ onPick }) => {
  const [file, setFile] = useState("");

  const onChange = e => {
    const pickedFile = e.target.files[0];

    setFile(pickedFile);
    onPick(pickedFile);
    e.preventDefault();
  };

  return (
    <>
      <FormLabel>
        {file === "" ? "Choose a file" : "Video file selected"}
      </FormLabel>
      <FormFile
        type="file"
        name="file"
        id="VideoPicker"
        accept="video/*"
        onChange={e => onChange(e)}
      />
    </>
  );
};

VideoPicker.propTypes = {
  onPick: PropTypes.func.isRequired,
};

export default VideoPicker;
