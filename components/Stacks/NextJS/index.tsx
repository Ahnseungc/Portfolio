"use client";

import Image from "next/image";
import Link from "next/link";

const NextJS = () => {
  console.log("react입니다.");

  return (
    <div className="main-container">
      <br />
      <br />
      <div className="Lib">
        <h3>⚒️ NEXT12,13... 변화에 빠르고 민감하게 반응합니다</h3>
      </div>
      <br />
      <br />
      <div className="Pat">
        <h3>
          👋🏼 NEXT.js에서 제공하는 성능이 뛰어난 자체 컴포넌트, dynamic routing,
          폴더 기반 라우팅 을 이해하고 활용합니다.
        </h3>
      </div>
      <br />
      <br />
      <div className="Pat3">
        <h3>📚 SSR과 CSR의 차이를 이해하고 필요에 따라 활용합니다.</h3>
      </div>
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
          PINKDOOR메뉴판
          <Link
            href={"https://github.com/Ahnseungc/PINKDOOR_NEXTJS"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/PINKDOOR_NEXTJS
          </Link>
        </p>
        <p>
          인스타그램 클론코딩
          <Link
            href={"https://github.com/Ahnseungc/Instagram_clone"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/Instagram_clone
          </Link>
        </p>
        <p>
          간단한 TODO
          <Link
            href={"https://github.com/Ahnseungc/TODO_NEXTJS"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/TODO_NEXTJS
          </Link>
        </p>
        <p>
          NEXTJS Setting
          <Link
            href={"https://github.com/Ahnseungc/NEXT_Setting"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp;https://github.com/Ahnseungc/NEXT_Setting
          </Link>
        </p>
        <p>
          URI
          <Link
            href={"https://github.com/Ahnseungc/Uri_NextJS"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp;https://github.com/Ahnseungc/Uri_NextJS
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NextJS;
