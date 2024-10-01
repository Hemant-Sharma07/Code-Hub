import React from "react";
import CourseInfo from "../components/Web page/CourseInfo";
import Layout from "../components/Web page/Layout";

const Course = () => {
  const courseData = [
    {
      heading: "Web Development",
      discountPrize: "₹5999/-",
      orignalPrize: "₹9999/-",
    },
    {
      heading: "Java + DSA",
      discountPrize: "₹8999/-",
      orignalPrize: "₹15999/-",
    },
    {
      heading: "FrontEnd Development",
      discountPrize: "₹3999/-",
      orignalPrize: "₹6999/-",
    },
    {
      heading: "Python Programming",
      discountPrize: "₹4999/-",
      orignalPrize: "₹7999/-",
    },
  ];
  return (
    <>
      <Layout>
        <CourseInfo courseData={courseData} />
      </Layout>
    </>
  );
};

export default Course;
