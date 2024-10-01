import React from "react";

const Button = ({ title }) => {
  return (
    <>
      <button className="bg-indigo-700 text-md px-4 py-2 text-white rounded font-semibold shadow-lg transition duration-300 ease-in-out hover:translate-y-[-3px]">
        {title}
      </button>
    </>
  );
};

export default Button;
