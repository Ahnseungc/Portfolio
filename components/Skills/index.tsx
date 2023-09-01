"use client";

import { Fragment, type FC } from "react";

import { getCookie, setCookie, removeCookies } from "cookies-next";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useParams } from "next/navigation";

import { Container } from "./style";
import Article from "../Article";
import Header from "../ArticleHeader";
import List from "../List";

interface Props {
  animation: boolean;
}

const Skills: FC<Props> = ({ animation }) => {
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
