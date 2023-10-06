"use client";

import Link from "next/link";

const NodeJS = () => {
  console.log("react입니다.");

  return (
    <div className="main-container">
      <br />
      <br />
      <div className="Lib">
        <h3>
          ⚒️ NodeJS와 MariaDB를 통해 서버를 구축하고 테이블를 만들 수 있습니다.
        </h3>
      </div>
      <br />
      <br />
      <div className="Pat">
        <h3>
          👋🏼 AWS와 카페 24등 플랫폼을 활용하여 서버를 배포 할 수 있습니다.
        </h3>
      </div>
      <br />
      <br />
      <div className="Pat3"></div>
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
          물물교환 사이트
          <Link
            href={"https://github.com/Ahnseungc/MulMul/tree/main"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/Ahnseungc/MulMul/tree/main
          </Link>
        </p>
        <p>
          한림 노티
          <Link
            href={"https://github.com/EJLee1209/HallymNotice"}
            style={{ color: "black", textDecoration: "none" }}
          >
            &nbsp; &nbsp; https://github.com/EJLee1209/HallymNotice
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NodeJS;
