import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Graduate",
          "Full Stack Developer",
          "AI/ML Enthusiast",
          "Cloud Solutions Developer",
          "Passionate about building impactful tech",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
