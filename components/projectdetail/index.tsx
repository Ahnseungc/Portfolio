"use client";

import type { FC } from "react";

import Image from "next/image";

import { Body, Header, Project } from "./style";

interface Props {
  header: String;
  body: any;
  id: number;
}

const project: FC<Props> = ({ header, body, id }) => {
  return (
    <Project num={id}>
      <Header>
        {header}
        <div className="circle_room">
          <div className="circle1" />
          <div className="circle2" />
          <div className="circle3" />
        </div>
      </Header>
      <Body>
        <Image
          className="project"
          src={body}
          width={535}
          height={300}
          alt="/"
        />
      </Body>
    </Project>
  );
};

export default project;
