import React from "react";
import Image from "next/image";
import NavbarComponent from "./NavbarComponent";

const ImageNavComponent = () => {
  return (
    <div className="z-10">
      <Image
        style={{ opacity: "0.5", position: "absolute" }}
        fill="true"
        src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x"
        alt="baner"
      />
      <NavbarComponent />
    </div>
  );
};

export default ImageNavComponent;
