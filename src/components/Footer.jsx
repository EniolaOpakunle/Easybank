import React from "react";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <div className="bg-[Hex: #e9181a]">
      <div className="w-4/5 m-auto py-20">
        <div className="grid grid-cols-4">
          <div className="flex flex-col">
            <img src={logo} alt="" className="w-1/2"/>
          </div>
          <div className="flex flex-col gap-y-5">
            <p>About </p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col gap-y-5">
            <p>Career</p>
            <p>Support</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <button className="bg-black text-white px-7 py-2 rounded-full">
              Request Invite
            </button>
            <p>©Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
