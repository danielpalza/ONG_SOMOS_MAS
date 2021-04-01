import React from "react";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { default as ReactLoaderSpinner } from "react-loader-spinner";

function Loader(props) {
  const display = props.display;

  return (
    <ReactLoaderSpinner
      {...props}
      height={props.size}
      width={props.size}
      style={{ display }}
    />
  );
}

Loader.propTypes = {
  type: PropTypes.oneOf(["TailSpin", "Oval", "Rings", "ThreeDots"]),
  size: PropTypes.number,
  visible: PropTypes.bool,
  color: PropTypes.string,
  timeout: PropTypes.number,
  display: PropTypes.oneOf(["block", "inline-block"]),
};

Loader.defaultProps = {
  type: "TailSpin",
  visible: true,
  color: "#6c757d",
  timeout: 0,
  size: 40,
  display: "block",
};

export default Loader;
