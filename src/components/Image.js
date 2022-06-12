import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const Image = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);
Image.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Image;
