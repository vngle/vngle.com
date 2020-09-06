import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";

const TypedText = ({ strings, config }) => {
  const options = {
    strings,
    ...config,
  };
  let element;

  useEffect(() => {
    const typed = new Typed(element, options);

    return () => typed.destroy();
  });

  return <span ref={el => (element = el)} />;
};

TypedText.propTypes = {
  strings: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
};

export default TypedText;
