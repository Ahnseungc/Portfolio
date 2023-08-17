"use client";

import type { FC } from "react";

import { Body, Header, Project } from "./style";

interface Props {
  num: number;
}

const project: FC<Props> = ({ num }) => {
  return (
    <Project num={num}>
      <Header>Header</Header>
      <Body>Body</Body>
    </Project>
  );
};

export default project;
