import React, { useEffect } from "react";

export function TFD(props) {
  useEffect(componentDidMount, []);
  const src = props.src;
  const label = props.label;
  const height = props.height;
  const width = props.width;
  const depth = { borderRadius: "10px" };

  return (
    <div
      className="containerVideo"
      style={{
        width: "60vw",
        height: "30vw",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={depth}
      ></iframe>
    </div>
  );
  function componentDidMount() {
    document.title = "Playstation - Games Page";
    console.log("Video Mounted");
    const imgTag1 = document.getElementById("caroTooltip1");
    new bootstrap.Tooltip(imgTag1);
    const imgTag2 = document.getElementById("caroTooltip2");
    new bootstrap.Tooltip(imgTag2);
    const imgTag3 = document.getElementById("caroTooltip3");
    new bootstrap.Tooltip(imgTag3);
  }
}
