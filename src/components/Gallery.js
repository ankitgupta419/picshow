import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import NoImages from "./NoImages";
import Image from "./Image";

const Gallery = (props) => {
  const { data } = props;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (data.length > 0) {
    images = data.map((image) => {
      const { farm } = image;
      const { server } = image;
      const { id } = image;
      const { secret } = image;
      const { title } = image;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};
Gallery.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
export default Gallery;
