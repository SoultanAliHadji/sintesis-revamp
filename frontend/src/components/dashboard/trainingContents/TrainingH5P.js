import "../../../App.css";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const TrainingH5P = () => {
  return (
    <div className="training-h5p px-3 py-4">
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

export default TrainingH5P;
