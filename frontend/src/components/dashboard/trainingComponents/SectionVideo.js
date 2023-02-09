import "../../../App.css";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const SectionVideo = () => {
  return (
    <div className="section-certificate px-3 py-4 h-100">
      <div className="w-100">
        <ReactPlayer
          className="w-100"
          height={420}
          url={"https://www.youtube.com/watch?v=DJ2yCAXNxHI"}
          config={{
            youtube: {
              playerVars: { showinfo: 0 },
            },
          }}
          progressInterval={5000}
          muted="true"
        />
      </div>
    </div>
  );
};

export default SectionVideo;
