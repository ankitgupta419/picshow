import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => (
  <div>
    <h1>PicShow</h1>
    <Form history={history} handleSubmit={handleSubmit} />
    <Navigation />
  </div>
);
Header.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default Header;
