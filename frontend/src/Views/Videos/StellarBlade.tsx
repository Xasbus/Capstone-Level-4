import React from "react";

export function StellarBlade(props) {
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
        src="https://www.youtube.com/embed/DSznLWimMlU?si=jMDc8l0LZm8tS7ih"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={depth}
      ></iframe>
    </div>
  );
}
