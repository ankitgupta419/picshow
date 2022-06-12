import React, { useContext, useEffect } from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return <div className="photo-container">{loading ? <Loader /> : <Gallery data={images} />}</div>;
};
Container.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
export default Container;
