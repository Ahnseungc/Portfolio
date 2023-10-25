"use client";

import { useState } from "react";

import Link from "next/link";

import { ProjectMaincontainer } from "./style";
import ProjectDetail from "../projectdetail";

const Project = ({ Changeback }) => {
  const [list] = useState([
    { id: 1, header: "URi.com", body: "/Uri.png", link: "uri" },
    { id: 2, header: "Speakdoc.com", body: "/Dawn.png", link: "dawn" },
    { id: 3, header: "DAWN.com", body: "/Speakdoc.png", link: "speakdoc" },
    {
      id: 4,
      header: "한림노티.com",
      body: "/한림노티.png",
      link: "hallymnotice",
    },
    { id: 5, header: "LYMCAR.com", body: "/Lymcar.png", link: "lymcar" },
    {
      id: 6,
      header: "ProtFollio.com",
      body: "/Protfollio.png",
      link: "protfollio",
    },
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
