import React from "react";

import Project from "../components/project";

import "../styles/page.css";

type Props = {};

function Home({}: Props) {
  return (
    <div className="main-container">
      <Project />
    </div>
  );
}

export default Home;
