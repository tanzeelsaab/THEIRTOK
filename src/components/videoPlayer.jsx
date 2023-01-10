import React, { useState } from "react";
import { Loader } from "../assets";

export const VideoPlayer = ({
  videoUrl,
  linkUrl,
  singleRow,
  author,
  title,
}) => {
  const [showLink, setShowLink] = useState(true);

  return (
    <div onMouseEnter={() => setShowLink(true)}>
      <video
        src={videoUrl}
        controls
        width={singleRow ? "auto" : 300}
        poster={Loader}
        muted
        autoPlay
        loop
      />
      {showLink && (
        <a
          href={linkUrl}
          target="_blank"
          className="video-link"
          rel="noreferrer"
        >
          { `↗ ${ author !== undefined ? author : "Unknown"}`}
          {title !== undefined ? title : "Unknown"}
        </a>
      )}
    </div>
  );
};
