import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import Container from "./Container";

const Item = ({ searchTerm }) => (
  <div>
    <h2>{searchTerm} Pictures</h2>
    <Container searchTerm={searchTerm} />
  </div>
);
Item.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
export default Item;
