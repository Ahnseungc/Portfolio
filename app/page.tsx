"use client";

import React, { useEffect, useState, useRef } from "react";

import { getCookie, setCookie, removeCookies } from "cookies-next";

import Education from "../components/education";
import Introduce from "../components/introduce";
import Project from "../components/project";
import Skills from "../components/Skills";

import "../styles/page.css";

const DIVIDER_HEIGHT = 5;

type Props = {
  scRef: HTMLDivElement;
};

function Home({ params }: { params: { id: number } }): Props {
  const outerDivRef = useRef<HTMLInputElement>(undefined);
  const [animation, setAnimation] = useState<boolean>(false);
  const [animation2, setAnimation2] = useState<boolean>(false);
  const [animation3, setAnimation3] = useState<boolean>(false);
  const [animation4, setAnimation4] = useState<boolean>(false);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight; //화면 세로길이

      // Scrolltop : 스크롤바 수직위치
      // && animation
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          setAnimation(true);
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          setAnimation2(true);
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          setAnimation3(true);
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          setAnimation4(true);
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } //스크롤 올리때
      else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;

    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div className="outer Page-box" ref={outerDivRef}>
      <div className="inner">
        <Introduce animation={animation} />
      </div>
      <div className="divider" />
      <div className="inner">
        <Education animation={animation2} />
      </div>
      <div className="divider"></div>
      <div className="inner">
        <Skills animation={animation3} />
      </div>
      <div className="divider"></div>
      <div className="inner">
        <Project />
      </div>
      <div className="divider"></div>
      {/* <div className="inner">
        <Chat animation4={animation4} />
      </div>
      <div className="divider"></div> */}
    </div>
  );
}

export default Home;
