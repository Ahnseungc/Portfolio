"use client";

import { type FC, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { Introdmaincontainer } from "./style";

interface Props {}

const Introduce: FC<Props> = () => {
  const moveRef = useRef<HTMLDivElement>(undefined);

  const [pop, setPop] = useState<boolean>(false);

  const [alert, alertSet] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      alertSet(true);
    }, 5000);
  });

  const move = () => {
    moveRef.current.classList.add("go");
    setPop(true);
  };

  return (
    <Introdmaincontainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div ref={moveRef}>
          <Image
            onClick={move}
            className="face"
            src="/face.jpg"
            alt="/"
            width={300}
            height={300}
          />
        </div>
      </motion.div>

      {pop ? (
        <motion.div
          className="intordbox"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p>
            안녕하세요! :) <br />
            개발 및 코딩자체를사랑하는 <br />
            신입웹개발자입니다
          </p>
          {alert ? (
            <Image
              className="DownArrow"
              src="/down-arrow.png"
              width={30}
              height={30}
              alt="/"
            />
          ) : undefined}
        </motion.div>
      ) : undefined}
    </Introdmaincontainer>
  );
};

export default Introduce;
