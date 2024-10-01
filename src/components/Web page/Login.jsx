import React from "react";
import Layout from "./Layout";

const Login = () => {
  return (
    <>
      <Layout>
        <div className=" flex justify-center items-center h-screen -mt-10">
          <div class="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
            <form action="">
              <div class="mb-6">
                <label for="name" class="block text-gray-800 font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="username"
                  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-700 :ring-indigo-600"
                />
              </div>
              <div>
                <label for="email" class="block text-gray-800 font-bold">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="@email"
                  class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-700 :ring-indigo-600"
                />
                <a
                  href="#"
                  class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-700"
                >
                  Forget Password
                </a>
              </div>
              <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-700 text-white font-bold w-full text-center rounded shadow-lgtransition duration-300 ease-in-out hover:translate-y-[-3px] ">
                Login
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
