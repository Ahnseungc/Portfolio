"use client";

import { useState } from "react";

import { ProjectMaincontainer } from "./style";
import ProjectDetail from "../projectdetail";

const Project = () => {
  const [list, setList] = useState([
    { id: 1, header: "URi.com", body: "/Lymcar.png" },
    { id: 2, header: "Speakdoc.com", body: "/Dawn.png" },
    { id: 3, header: "DAWN.com", body: "/Speakdoc.png" },
    { id: 4, header: "LYMCAR.com", body: "/Uri.png" },
  ]);
  console.log(list);
  return (
    <ProjectMaincontainer>
      {list.map((e, index) => {
        return (
          <ProjectDetail
            header={e.header}
            body={e.body}
            id={e.id}
            key={index}
          />
        );
      })}
    </ProjectMaincontainer>
  );
};

export default Project;
