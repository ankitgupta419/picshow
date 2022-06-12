import React, { createContext, useState } from "react";
import axios from "axios";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import { apiKey } from "../api/config";

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const { children } = props;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Encountered an error with fetching and parsing data", error);
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>{children}</PhotoContext.Provider>
  );
};
PhotoContextProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default PhotoContextProvider;
