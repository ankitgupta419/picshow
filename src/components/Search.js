import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import Container from "./Container";

const Search = ({ searchTerm }) => (
  <div>
    <h2>{searchTerm} Images</h2>
    <Container searchTerm={searchTerm} />
  </div>
);
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
export default Search;
