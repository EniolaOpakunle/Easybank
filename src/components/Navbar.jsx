import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white w-dvw">
      <div className="w-4/5 m-auto flex justify-between py-5 items-center">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="hidden lg:flex gap-x-10">
          <a href="" className="text-gray-500 hover:text-black no-underline">
            Home
          </a>
          <a href="" className="text-gray-500 hover:text-black no-underline">
            About
          </a>
          <a href="" className="text-gray-500 hover:text-black no-underline">
            Contact
          </a>
          <a href="" className="text-gray-500 hover:text-black no-underline">
            Blog
          </a>
          <a href="" className="text-gray-500 hover:text-black no-underline">
            Careers
          </a>
        </div>
        <div className="hidden lg:flex gap-x-3">
          <button className="bg-black text-white px-7 py-2 rounded-full">
            Request Invite
          </button>
          <button className="bg-black text-white px-7 py-2 rounded-full">
            Create an account
          </button>
        </div>
        <div className="lg:hidden">
          <img src={hamburger} alt="" onClick={handleToggle} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-black opacity-5 h-dvh top-15 w-dvw">
          <div className="py-6">
            <div className="flex flex-col gap-y-5 bg-white">
              <a
                href=""
                className="text-gray-500 hover:text-black no-underline"
              >
                Home
              </a>
              <a
                href=""
                className="text-gray-500 hover:text-black no-underline"
              >
                About
              </a>
              <a
                href=""
                className="text-gray-500 hover:text-black no-underline"
              >
                Contact
              </a>
              <a
                href=""
                className="text-gray-500 hover:text-black no-underline"
              >
                Blog
              </a>
              <a
                href=""
                className="text-gray-500 hover:text-black no-underline"
              >
                Careers
              </a>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
