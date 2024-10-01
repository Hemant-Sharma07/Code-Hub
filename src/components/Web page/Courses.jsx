import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      image: "https://algoscript.in/assets/img/tools/mern/Mern.png",
      des: "Web Development",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCCdLCDhY7mwKXP4bHVQ1SFZxn3pPM2QLFw&s",
      des: "Java + DSA",
    },
    {
      image:
        "https://static-00.iconduck.com/assets.00/react-icon-1024x1024-wwxwlds8.png",
      des: "React JS",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png",
      des: "Phython",
    },
  ];

  return (
    <>
      <div className="w-full  h-auto flex flex-wrap items-center flex-col text-center">
        <p className="text-white text-3xl md:text-4xl font-semibold">
          Our Courses
        </p>
        <div className="w-24 h-1 border-b-4 border-yellow-500 mt-2 md:mt-4 mb-12 rounded"></div>
      </div>
      <div className="w-full h-auto flex justify-around flex-wrap px-4">
        {courses.map((item) => {
          return (
            <div className="w-46 h-auto flex flex-col items-center mb-12">
              <img
                className="rounded-full w-40 h-40 mb-4 bg-white"
                src={item.image}
                alt=""
              />
              <p className="text-xl text-white font-bold mb-6">{item.des}</p>
              <Link to="/course">
                <Button title={"Check Out"} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
