import React from "react";
import NavBar from "../components/Web page/Navbar";
import Hero from "../components/Web page/Hero";
import Students from "../components/Web page/Students";
import Courses from "../components/Web page/Courses";
import Footer from "../components/Web page/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Students />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
