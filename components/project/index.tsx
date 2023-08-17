"use client";

import { useState } from "react";

import { ProjectMaincontainer } from "./style";
import ProjectDetail from "../projectdetail";

//ProjectMaincontainer

const Project = () => {
  const [list, setList] = useState(Array.from({ length: 4 }, (e) => e));

  return (
    <ProjectMaincontainer>
      {list.map((e, index) => {
        return <ProjectDetail num={index} key={index} />;
      })}
    </ProjectMaincontainer>
  );
};

export default Project;

{
}
