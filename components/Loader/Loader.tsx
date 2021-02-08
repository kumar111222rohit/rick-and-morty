import React from "react";
import "./Loader.scss";
import useStore from "../../hooks/useStore";

const Loader: React.FC<{}> = () => {
  const { showLoader } = useStore();
  if (!showLoader) {
    return null;
  }
  return (
    <div className={`busy-holder backdrop`} style={{ display: "block" }}>
      <div className="busy">
        <div className="loading-text"></div>
        <div className="loader"></div>
        <div className="loading-text"> Please wait...</div>
      </div>
    </div>
  );
};

export default Loader;
