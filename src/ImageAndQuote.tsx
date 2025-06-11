import React from "react";
import RandomQuote from "./Quotes/RandomQuote";
import RandomImage from "./RandomImage";

const ImageAndQuote = () => {
  return (
    <>
      <RandomQuote />
      <RandomImage />
    </>
  );
};

export default React.memo(ImageAndQuote);
