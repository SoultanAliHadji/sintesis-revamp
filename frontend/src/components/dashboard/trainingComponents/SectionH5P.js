import "../../../App.css";
import { useState, useEffect } from "react";

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
