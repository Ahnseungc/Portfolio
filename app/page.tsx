"use client";

import React, { useEffect, useState } from "react";

import Introduce from "../components/introduce";
import Project from "../components/project";

import "../styles/page.css";

type Props = {
  scRef: HTMLDivElement;
};

function Home({}: Props) {
  const [scorll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    if (window.scrollY >= 50) {
      setScroll(true);
      console.log(scorll);
    } else {
      setScroll(false);
    }
  };

  return (
    <div className="main-container">
      <Introduce />
      {/* <Project /> */}
    </div>
  );
}

export default Home;
