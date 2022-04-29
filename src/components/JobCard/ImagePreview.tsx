import React from "react";
import Image from "next/image";

const ImagePreview = () => {
  return (
    <div className="bg-black w-full h-[200px]  relative">
      <Image
        layout="fill"
        objectFit="cover"
        quality={100}
        src="/images/hero.jpg"
        alt="Hero Image"
      />
    </div>
  );
};

export default ImagePreview;
