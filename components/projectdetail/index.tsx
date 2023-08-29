"use client";

import { type FC, useCallback, useRef } from "react";

import Image from "next/image";

import { Body, Header, Project } from "./style";

interface Props {
  header: String;
  body: any;
  id: number;

  onChangeback: any;
}

const ProjectDetail: FC<Props> = ({ header, body, id, onChangeback }) => {
  const mouseRef = useRef<HTMLDivElement>(undefined);

  const mouseovercontroller = useCallback(() => {
    mouseRef.current.style.transform = "translate(0, -30vh) ";
    onChangeback(id);
  }, []);

  const mouseoutcontroller = useCallback(() => {
    mouseRef.current.style.transform = "perspective(500px) rotateY(40deg) ";
  }, []);

  return (
    <Project
      className={`${id}`}
      num={id}
      onMouseEnter={mouseovercontroller}
      onMouseLeave={mouseoutcontroller}
      ref={mouseRef}
    >
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

export default ProjectDetail;
