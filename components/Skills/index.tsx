"use client";

import { type FC } from "react";

import { AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

import { Container } from "./style";
import Article from "../Article";
import Header from "../ArticleHeader";
import List from "../List";

interface Props {
  animation: boolean;
}

const Skills: FC<Props> = ({}) => {
  const { id } = useParams();

  return (
    <Container>
      <Header />
      <AnimatePresence>{id && <Article id={id} />}</AnimatePresence>
      <List selectedId={id !== undefined ? id : ""} />
    </Container>
  );
};

export default Skills;
