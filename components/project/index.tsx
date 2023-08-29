"use client";

import { useState } from "react";

import { ProjectMaincontainer } from "./style";
import ProjectDetail from "../projectdetail";
import Link from "next/link";

const Project = ({ Changeback }) => {
  const [list, setList] = useState([
    { id: 1, header: "URi.com", body: "/Uri.png", link: "uri" },
    { id: 2, header: "Speakdoc.com", body: "/Dawn.png", link: "dawn" },
    { id: 3, header: "DAWN.com", body: "/Speakdoc.png", link: "speakdoc" },
    { id: 4, header: "LYMCAR.com", body: "/Lymcar.png", link: "lymcar" },
  ]);

  return (
    <ProjectMaincontainer>
      {list.map((e, index) => {
        return (
          <Link
            key={index}
            href={`/${e.link}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ProjectDetail
              header={e.header}
              body={e.body}
              id={e.id}
              onChangeback={Changeback}
            />
          </Link>
        );
      })}
    </ProjectMaincontainer>
  );
};

export default Project;
