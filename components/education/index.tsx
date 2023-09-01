"use client";

import { type FC, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "./style";

import Link from "next/link";

interface Props {
  animation: boolean;
}

const Education: FC<Props> = ({ animation }) => {
  console.log(animation);

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
        <motion.ul
          variants={list}
          initial="hidden"
          animate="visible"
          className="wrap_ul"
        >
          <motion.li variants={item} className="wrap_li">
            <h3>이름</h3>
            <p>안승찬</p>
          </motion.li>
          <motion.li variants={item} className="wrap_li">
            <h3>주소지</h3>
            <p>경기도 의정부시</p>
          </motion.li>
          <motion.li variants={item} className="wrap_li">
            <h3>이메일</h3>
            <p>omnipoo@Naver.com</p>
          </motion.li>
          <motion.li variants={item} className="wrap_li">
            <h3>연락처</h3>
            <p>010-4035-0672</p>
          </motion.li>
          <motion.li variants={item} className="wrap_li">
            <h3>Git</h3>
            <Link
              href={"https://github.com/Ahnseungc"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              https://github.com/Ahnseungc
            </Link>
          </motion.li>
          <motion.li variants={item} className="wrap_li">
            <h3>블로그</h3>
            <Link
              href={"https://velog.io/@omnipo"}
              style={{ textDecoration: "none", color: "black" }}
            >
              https://velog.io/@omnipo
            </Link>
          </motion.li>
          <motion.li variants={item} className="wrap_li">
            <h3>수상 경력</h3>
            <p>
              아이디어해커톤(2021.07.20) 한림대
              <br />
              KBSC 공모전(2022.10.16) 국민은행
              <br />
              캡스톤 디자인(2023.06.12) 한림대
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </Container>
  );
};

export default Education;
