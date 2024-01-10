import React from "react";
import Particle from "./Particles";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumePath = "/resume/RazvanBobonea.pdf";

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "RazvanBobonea.pdf";
    link.click();
  };

  return (
    <div className={`h-[95vh] mt-[10vh] bg-cover bg-center `}>
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items center mt-10">
        <div className="z-[1000]">
          <h1 className="text-[35px] md:text-[50px] text-white font bold">
            Hello, I am Raz
            <span className="text-green-600">van</span>!
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-gray-400  ">
            Hello, I'm Razvan, a passionate Full Stack Developer with a keen eye for creating innovative and efficient solutions. With a solid foundation in both front-end and back-end technologies, I specialize in crafting dynamic and responsive web applications. My commitment to clean, maintainable code and a user-centric approach sets the stage for delivering seamless digital experiences. Explore my portfolio to witness the fusion of creativity and technical expertise, as I continue to push the boundaries of what's possible in the world of web development.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm: space-x-6">
            <button
              onClick={handleDownloadResume}
              className="
                      px-[2rem]
                      hover:bg-green-400
                      transition-all
                      duration-300 
                      py-[1rem] 
                      text-[18px] 
                      font-bold 
                      uppercase 
                      bg-[#55e6a5] 
                      text-black 
                      flex 
                      items-center 
                      space-x-2"
            >
              <p>Download Resume</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-auto mt-[2rem] lg:mt-0 lg:h-[500px] md:h-[500px] md:w-[500px] smaller relative">
          <Image
            src="/images/developer.webp"
            alt="user"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
