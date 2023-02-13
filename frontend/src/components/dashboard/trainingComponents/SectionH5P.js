import "../../../App.css";
import { H5P } from "h5p-standalone";
import { useState, useEffect } from "react";

/*const el = document.getElementById("h5p-container");
const options = {
  h5pJsonPath: "/h5p-folder",
  frameJs: "/assets/frame.bundle.js",
  frameCss: "/assets/styles/h5p.css",
};

new H5P(el, options);*/

const SectionH5P = () => {
  return (
    <div className="section-h5p px-3 py-4">
      <div className="w-100">
        <iframe
          id="h5p-container"
          width="100%"
          height="530"
          src="https://h5p.org/h5p/embed/617"
          styles="width:100%"
        ></iframe>
      </div>
    </div>
  );
};

export default SectionH5P;
