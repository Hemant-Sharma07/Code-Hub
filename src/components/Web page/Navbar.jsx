import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  const links = [
    { name: "Home", linkTo: "/" },
    { name: "About", linkTo: "/about" },
    { name: "Contact", linkTo: "/contact" },
    { name: "Courses", linkTo: "/course" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" w-full md:h-14 bg-indigo-100 shadow-md md:flex justify-between items-center px-4 md:px-6">
        <div className=" p-3 flex justify-between font-semibold text-indigo-700">
          <Link to="/">
            <p className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:translate-y-[-3px]">
              Code Hub
            </p>
          </Link>
          <div className="flex items-center md:hidden">
            <Link to="/login">
              <Button title={"Log in"} />
            </Link>
            <div
              onClick={() => setOpen(!open)}
              className="text-4xl mt-1 px-2 cursor-pointer"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
          </div>
        </div>
        <ul
          className={`py-5 md:my-0 md:flex font-semibold ${
            open ? "h-[-480px]" : "h-14 hidden"
          }`}
        >
          {links.map((item) => {
            return (
              <Link to={item.linkTo}>
                <li className="mx-[10px] mt-2 text-xl md:text-base text-center md:mt-0 cursor-pointer transition-all s hover:text-indigo-700 hover:translate-y-[-2px]">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="mt-2 items-center space-x-4 md:block hidden">
          <Link to="/login">
            <Button title={"Log in"}></Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
