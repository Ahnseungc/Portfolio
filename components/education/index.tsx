"use client";

import { type FC, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "./style";

import Link from "next/link";

import "../../public/Font/font.css";

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
      <div className="introd">
        <p>
          안녕하세요. 웹 프론트엔드 개발자 안승찬입니다. <br />
          3년전 "Hello World"를 출력하며 개발자로서의 첫 발자취를 남겼습니다.
          <br />
          아직 배울 것이 많고, 성장할 수 있음에 감사합니다.
          <br />
          개발과 함꼐한 동료, 그리고 JS를 사랑합니다.
        </p>
      </div>
      <div className="wrap">
        <motion.ul
          variants={list}
          initial="hidden"
          animate="visible"
          className="wrap_ul"
        >
          <motion.li variants={item} className="wrap_li">
            <h3>이름</h3>
            <h3>주소지</h3>
            <h3>이메일</h3>
            <h3>연락처</h3>
            <h3>Git</h3>
            <h3>블로그</h3>
            <h3>수상 경력</h3>
          </motion.li>
          <motion.li variants={item} className="wrap_li">
            <p>안승찬</p>
            <p>경기도 의정부시</p>
            <p>omnipoo@Naver.com</p>
            <p>010-4035-0672</p>
            <Link
              className="link"
              href={"https://github.com/Ahnseungc"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              https://github.com/Ahnseungc
            </Link>
            <Link
              className="link"
              href={"https://velog.io/@omnipo"}
              style={{ textDecoration: "none", color: "black" }}
            >
              https://velog.io/@omnipo
            </Link>
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
