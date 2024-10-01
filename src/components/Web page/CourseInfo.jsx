import React from "react";
import { Link } from "react-router-dom";

const CourseInfo = ({ courseData }) => {
  return (
    <div className="flex flex-wrap justify-center p-5">
      {courseData.map((course, index) => (
        <div
          key={index}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl m-5"
        >
          <div className="p-8 sm:p-10">
            <h3 className="text-3xl font-semibold leading-8 tracking-tight text-blue-600">
              {course.heading}
            </h3>
            <div className="mt-4 flex items-baseline text-xl font-bold tracking-tight text-gray-900">
              {course.discountPrize} &nbsp;
              <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500 line-through">
                {course.orignalPrize}
              </span>
            </div>
            <p className="text-base leading-7 text-gray-600">
              Limited time offer
            </p>
            <p className="mt-4 mb-6 text-base leading-7 font-semibold text-gray-600">
              With this course, you will get
            </p>
            <ul role="list" className="space-y-6">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  Complete Frontend Development
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  Complete Backend Development (Node.js, Express.js)
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  Complete Database - SQL & MongoDB
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  Real Life and Industry Grade Project
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/payment">
                <button
                  href="/login"
                  className="inline-block w-full rounded-lg bg-indigo-700 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md transition duration-300 ease-in-out hover:translate-y-[-3px]"
                  aria-describedby="tier-team"
                >
                  Get started today
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInfo;
