"use client";

import Image from "next/image";

const HallymNotice = () => {
  return (
    <div style={{ display: "flex", width: "90vw", height: "90vh" }}>
      {/* <div style={{ width: "30vw", height: "30vh" }}>  */}
      <Image
        src={
          "https://user-images.githubusercontent.com/101651909/270167737-b666f417-9ff2-47b5-ac63-a7b1f6abd675.png"
        }
        alt="/"
        fill
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <Image
        src={
          "https://user-images.githubusercontent.com/101651909/270167744-b5acfc06-eacf-4c45-82a6-4cf413187256.png"
        }
        alt="/"
        fill
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      {/* </div> */}
    </div>
  );
};

export default HallymNotice;
