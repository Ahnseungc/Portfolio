"use client";

import { useState } from "react";

import { ProjectMaincontainer } from "./style";
import ProjectDetail from "../projectdetail";

const Project = ({ Changeback }) => {
  const [list, setList] = useState([
    { id: 1, header: "URi.com", body: "/Uri.png", sta: false },
    { id: 2, header: "Speakdoc.com", body: "/Dawn.png", sta: false },
    { id: 3, header: "DAWN.com", body: "/Speakdoc.png", sta: false },
    { id: 4, header: "LYMCAR.com", body: "/Lymcar.png", sta: false },
  ]);
  console.log(setList);
  return (
    <ProjectMaincontainer>
      {list.map((e, index) => {
        return (
          <ProjectDetail
            header={e.header}
            body={e.body}
            id={e.id}
            key={index}
            sta={e.sta}
            onChangeback={Changeback}
          />
        );
      })}
    </ProjectMaincontainer>
  );
};

export default Project;
