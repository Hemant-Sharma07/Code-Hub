import React from "react";
import Layout from "../components/Web page/Layout";

const About = () => {
  return (
    <>
      <Layout>
        <div className="w-full h-auto flex flex-col-reverse md:flex-row justify-around items-center flex-wrap mt-6 mb-6 p-4">
          <div className="text-center md:w-1/2">
            <h1 className="text-white font-bold text-3xl md:text-4xl p-2 mt-4 uppercase">
              Why We Are
            </h1>
            <p className="text-gray-400 font-semibold text-lg mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              inventore sint molestias illum, soluta rerum illo aut magnam
              consequatur sit libero assumenda, nesciunt, doloribus id? Nemo
              maiores molestiae assumenda illum explicabo illo perspiciatis
              tempora obcaecati.
            </p>
          </div>
          <div className="h-full md:w-1/2 flex justify-center">
            <img
              className=" mt-4 h-[400px] w-[380px] "
              src="https://img.freepik.com/free-vector/ui-ux-design-concept-illustration_114360-10973.jpg?w=740&t=st=1718126852~exp=1718127452~hmac=73ea1c3efb34677dea6338d3d662ed18dea4c9ca001969b565ab647a7e3c43b2"
              alt="developer img"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
