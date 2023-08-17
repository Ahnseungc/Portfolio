"use client";

import ProjectDetail from "../projectdetail";

const project = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vh",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "0.5em",
          background: "#14bb8a",
          transform: "perspective(500px) rotateY(40deg)",
          opacity: "0.5",
          position: "absolute",
          left: "200px",
        }}
      >
        <ProjectDetail />
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "0.5em",
          background: "#14bb8a",
          transform: "perspective(500px) rotateY(40deg)",
          opacity: "0.5",
          position: "absolute",
          left: "300px",
        }}
      >
        <ProjectDetail />
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "0.5em",
          background: "#14bb8a",
          transform: "perspective(500px) rotateY(40deg)",
          opacity: "0.5",
          position: "absolute",
          left: "400px",
        }}
      >
        <ProjectDetail />
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "0.5em",
          background: "#14bb8a",
          transform: "perspective(500px) rotateY(40deg)",
          opacity: "0.5",
          position: "absolute",
          left: "500px",
        }}
      >
        <ProjectDetail />
      </div>
    </div>
  );
};

export default project;
