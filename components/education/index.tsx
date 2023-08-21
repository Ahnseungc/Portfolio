"use client";

import { type FC, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "./style";

interface Props {
  animation: boolean;
}

const Education: FC<Props> = ({ animation }) => {
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

  return (
    <Container>
      <h1>저는 이런 사람입니다</h1>
      <div className="wrap">
        <motion.ul variants={list} initial="hidden" animate="visible">
          <motion.li variants={item}>
            <h3>Profile</h3>
          </motion.li>
          <motion.li variants={item}>
            <h3>About me</h3>
          </motion.li>
          <motion.li variants={item}>
            <h3>Experiences & Education</h3>
          </motion.li>
        </motion.ul>
      </div>
    </Container>
  );
};

export default Education;
