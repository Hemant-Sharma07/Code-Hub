import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto bg-indigo-100 flex flex-col flex-wrap items-center md:items-start justify-evenly md:flex-row px-4 pb-5 pt-8 md:-px12">
        <div className="">
          <p className="font-bold text-3xl md:mt-16 md:4xl text-indigo-700">
            Code Hub
          </p>
        </div>
        <div className="p-3">
          <h2 className="font-bold text-xl text-indigo-700 p-2">Links</h2>
          <div className="">
            <Link to="/about">
              <p className="font-semibold text-md mt-2 ml-3 cursor-pointer hover:text-indigo-700 transition duration-300 ease-in-out hover:translate-x-[3px]  ">
                About
              </p>
            </Link>
            <Link to="/course">
              <p className="font-semibold text-md mt-2 ml-3 cursor-pointer hover:text-indigo-700 transition duration-300 ease-in-out hover:translate-x-[3px]">
                Courses
              </p>
            </Link>
          </div>
        </div>
        <div className="ml-32 p-3">
          <Link to="/contact">
            <h2 className="font-bold text-xl text-indigo-700 cursor-pointer p-2">
              Contact
            </h2>
          </Link>
          <div className="">
            <p className="font-semibold text-md mt-2 ml-3 cursor-pointer hover:text-indigo-700 transition duration-300 ease-in-out hover:translate-x-[3px]">
              Mail: codehub@gmail.com
            </p>
            <p className="font-semibold text-md mt-2 ml-3 cursor-pointer hover:text-indigo-700 transition duration-300 ease-in-out hover:translate-x-[3px]">
              Mob: xxxxxxxxxx
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
