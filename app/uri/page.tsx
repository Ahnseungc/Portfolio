"use client";

import Image from "next/image";
import Link from "next/link";

const Uri = () => {
  return (
    <div>
      <h1>URI(소아 우울)</h1>
      <h2>[KBSC공모전]세상을 바꾸는 소프트웨어(장려상 수상작) 🥇</h2>
      <Image
        src={
          "https://velog.velcdn.com/images/dldmswo1209/post/8a9a1843-95fa-4729-b310-f2879ee7e3e0/image.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />

      <Image
        src={
          "https://velog.velcdn.com/images/dldmswo1209/post/6d658e6b-a3b4-4308-8353-78d87566d527/image.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />

      <h3>📖 상세 내용</h3>
      <p>
        2022 KBSC 소프트웨어 경진대회 본선 진출 작품 입니다! <br />
        <br />
        저희 소아 우울증 심리상담 챗봇(Uri)은 소아를 대상으로 하였습니다. <br />
        UI/UX를 전체적으로 유아적인 느낌을 위해 차분한 색상과 곡선 위주로
        제작하였고, 아이콘과 캐릭터를 아이들에게 거부감이 없도록 아기자기하게
        디자인하였습니다. <br />
        Uri는 모든 기능들을 하나로 연결하여, 기능별로 따로따로 하는 것보다
        자연스럽게 애플리케이션의 흐름대로 기능들이 진행할 수 있게 했습니다.
      </p>
      <h3>📌 주요 기능</h3>
      <h4>심리상담 챗봇</h4>

      <Image
        src={
          "https://velog.velcdn.com/images/dldmswo1209/post/8dad33bd-2a55-4613-b1b3-79163836db0f/image.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />
      <p>
        오늘은 무슨 일이 있었는지 이야기를 나누면서 지친 마음을 달랠 수
        있습니다. <br />
        위로를 건네거나, 화를 내거나, 사용자의 감정의 공감하는 것에 초점을
        두었습니다.
      </p>
      <h4>오늘의 할 일 추천</h4>

      <Image
        src={
          "https://velog.velcdn.com/images/dldmswo1209/post/0f0f1043-b1b3-4a78-96b9-2e693043b609/image.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />
      <h4>감정캘린더</h4>

      <Image
        src={
          "https://velog.velcdn.com/images/dldmswo1209/post/2535ce69-84cb-4d36-85cb-1e67e6698adc/image.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />
      <Image
        src={
          "https://velog.velcdn.com/images/dldmswo1209/post/77028bfa-31cf-49d4-a19e-ea9cb1a6f793/image.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />

      <p>
        감정캘린더에 감정들을 기록 하게 되면, 긍정적인 감정(기쁨, 행복)과
        부정적인 감정(슬픔, 우울, 분노)의 수치들을 그래프로 확인할 수 있고,{" "}
        <br />
        캘린더에는 긍정적인 감정이 높을수록 밝은 색상으로 표시됩니다. 보여지는
        감정 색깔로 그날의 감정을 직관적으로 볼 수 있습니다. <br />
        그리고 매달 말 일에 한 달간의 모든 감정 기록을 종합해서 분석한 뒤,
        그래프로 나타내어 자신의 감정 상태를 한눈에 파악할 수 있습니다. <br />
        마지막으로 오늘의 할 일에서, 달성한 것들을 표시해 줌으로써 성취감을 느낄
        수 있게 했습니다.
      </p>
      <h4>우울증 진단</h4>

      <Image
        src={
          "https://velog.velcdn.com/images/dldmswo1209/post/a2c52e1c-13e4-418b-b362-0992b71f7ce0/image.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />

      <p>
        Uri는 사용자의 감정기록을 분석하여 최근 2주간 우울한 감정이 지속될 경우,
        자가 진단을 제공합니다. <br />
        Uri가 제공하는 자가 진단에서 자가 진단의 점수가 높다면 한국생명의전화
        사이트를 들어갈 수 있는 버튼을 제공합니다.
      </p>

      <h3>🛠사용 기술 및 라이브러리</h3>
      <p>
        - Android Studio <br />
        - Kotlin <br />
        - Python <br />
        - Pytorch <br />
        - Flask <br />
        - Firebase Realtime
        <br />- SKT-AI/KoGPT2
        <br />- Figma
      </p>
      <h3> 🤝 Colaborators</h3>

      <Image
        src={
          "https://user-images.githubusercontent.com/101651909/200470504-0cafe454-88e7-4015-8c49-5699f33a9d47.jpg"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="/"
        style={{ width: "100%", height: "auto", borderRadius: "30px" }}
      />

      <h3>시연 영상</h3>
      <Link
        href={"https://www.youtube.com/watch?v=BLpkjLulnyU"}
        style={{ textDecoration: "none", color: "black" }}
      >
        https://www.youtube.com/watch?v=BLpkjLulnyU
      </Link>
    </div>
  );
};

export default Uri;
