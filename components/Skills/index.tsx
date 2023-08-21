"use client";

import { type FC, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "./style";

interface Props {
  animation: boolean;
}

const Skills: FC<Props> = ({ animation }) => {
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return <Container>Skils</Container>;
};

export default Skills;
