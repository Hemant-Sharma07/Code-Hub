import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <header className="w-full h-auto flex flex-col-reverse md:flex-row justify-around items-center  flex-wrap mt-6 p-4">
        <div className="text-center md:w-1/2">
          <h1 className="text-white font-bold text-3xl md:text-4xl p-2 mt-4 uppercase">
            We provide best Courses
          </h1>
          <p className="text-gray-400 font-semibold text-lg mb-4 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            vero?
          </p>
          <Link to="/course">
            <Button title={"Enroll Now"} />
          </Link>
        </div>
        <div className="h-full md:w-1/2 flex justify-center">
          <img
            className=" mt-4 h-[400px] w-[380px] "
            src="https://wallpapers.com/images/hd/web-developerat-work-illustration-png-9wxnnbpbatv5o2dn.png"
            alt="developer img"
          />
        </div>
      </header>
    </>
  );
};

export default Hero;
