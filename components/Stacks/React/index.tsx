"use client";

import Image from "next/image";
import Link from "next/link";

const React = () => {
  console.log("react입니다.");

  return (
    <div className="main-container">
      <br />
      <br />
      <div className="Lib">
        <h3>
          ⚒️ SWR,Redux,Bootstrap,MaterialUI,React-Rotuer,Styled Components 등
          다양한 라이브러리를 활용합니다.
        </h3>
      </div>
      <br />
      <br />
      <div className="Pat">
        <h3>
          👋🏼 Control Props Pattern, Atomic Design, Custom hooks 등 다양한
          디자인패턴을 적용하고 활용합니다.
        </h3>
      </div>
      <br />
      <br />
      <h3>➗ 코드스플리팅을 통해 트래픽과 로딩속도를 향상시킵니다.</h3>
      <br />
      <br />
      <br />
      <h3>📚 공식문서를 통해 끊임없이 배우고 적용합니다.</h3>
      <br />

      <Image src={"/Skils/Velog.png"} width={500} height={500} alt="/" />
      <h6>벨로그_안승찬</h6>
      <br />
      <br />
      <br />

      <div
        className="Side"
        style={{
          border: "1px solid black",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <h3>다양한 사이드 프로젝트를 통해 기술을 적용합니다.</h3>
        <br />
        <p>
          슬랙 클론코딩
          <Link
            href={"https://github.com/Ahnseungc/Slack_Clone"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/Slack_Clone
          </Link>
        </p>
        <p>
          간단 영화관 예매
          <Link
            href={"https://github.com/Ahnseungc/Reservesite_React"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/Reservesite_React
          </Link>
        </p>
        <p>
          인피니티 스크롤링{" "}
          <Link
            href={"https://github.com/Ahnseungc/React_InfinityScrolling"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/React_InfinityScrolling
          </Link>
        </p>
        <p>
          물물교환 사이트{" "}
          <Link
            href={"https://github.com/Ahnseungc/MulMul"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/MulMul
          </Link>
        </p>
        <p>
          미니 계산기{" "}
          <Link
            href={"https://github.com/Ahnseungc/React_calculator"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/React_calculator
          </Link>{" "}
        </p>
        <p>
          미니 블로그{" "}
          <Link
            href={"https://github.com/Ahnseungc/React_miniblog"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp;https://github.com/Ahnseungc/React_miniblog
          </Link>
        </p>
      </div>
    </div>
  );
};

export default React;
