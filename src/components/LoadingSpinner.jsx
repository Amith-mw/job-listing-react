import React from "react";
import { CircleLoader } from "react-spinners";

const LoadingSpinner = ({ loading }) => {
  const overide = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <CircleLoader
      color="#4338ca"
      loading={loading}
      cssOverride={overide}
      size={100}
    />
  );
};

export default LoadingSpinner;
