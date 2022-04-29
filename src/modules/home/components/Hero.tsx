import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen relative mb-10 ">
      <div className=" z-10 h-full w-full absolute bg-black opacity-80 "></div>
      <Image
        layout="fill"
        objectFit="cover"
        quality={100}
        src="/images/hero.jpg"
        alt="Hero Image"
      />

      <section className="z-20 h-full w-full absolute  text-white text-center flex flex-col justify-center items-center gap-6 p-5">
        <h2 className="text-6xl md:text-9xl font-normal leading-normal">
          Lansea
        </h2>
        <p className="md:w-[500px] text-lg font-normal leading-normal">
          Have peace of mind and confidence when you look for a job, we moderate
          employer signups and only allow access to verified employers and
          companies.
        </p>
      </section>

      <span className="z-20   text-white absolute bottom-20  left-1/2 translate-x-1/4 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
};

export default Hero;
