"use client";

import Image from "next/image";
import { DawnMainContainer } from "./styles";

const Dawn = () => {
  return (
    <>
      <h1>DAWN</h1>
      <DawnMainContainer>
        <Image
          src={
            "https://user-images.githubusercontent.com/94547692/221524382-c0527017-3717-4ced-8e6e-317ec36b87f2.png"
          }
          width={0}
          height={0}
          sizes="50vw"
          alt="/"
          style={{
            width: "50%",
            height: "auto",
            borderRadius: "30px",
          }}
        />

        <Image
          src={
            "https://user-images.githubusercontent.com/94547692/221524400-bc433a57-53e1-4464-a8b7-539e3b56f81e.png"
          }
          width={0}
          height={0}
          sizes="50vw"
          alt="/"
          style={{
            width: "20%",
            height: "auto",
            borderRadius: "30px",
          }}
        />
      </DawnMainContainer>
    </>
  );
};

export default Dawn;
