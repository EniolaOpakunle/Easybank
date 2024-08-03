import React from "react";
import logo from "../assets/images/logo.svg";
import facebookIcon from '../assets/images/icon-facebook.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import youtubeIcon from '../assets/images/icon-youtube.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
function Footer() {
  return (
    <div className="bg-blue-300">
      <div className="w-4/5 m-auto py-20">
        <div className="flex flex-col gap-y-5 lg:grid grid-cols-4">
          <div className="flex flex-col gap-y-5 lg:gap-y-0 justify-between">
            <img src={logo} alt="" className="w-1/2  m-auto lg:m-0 " />
            <div className="flex gap-x-5  m-auto lg:m-0 ">
                <img src={facebookIcon} alt="" />
                <img src={youtubeIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={pinterestIcon} alt="" />
                <img src={instagramIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col text-center lg:text-left gap-y-5">
            <p>About </p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col text-center lg:text-left gap-y-5">
            <p>Career</p>
            <p>Support</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col  gap-y-5 lg:gap-y-0 text-center lg:text-left justify-between">
            <div>
              <button className="bg-black text-white px-7 py-2 rounded-full">
                Request Invite
              </button>
            </div>
            <p>©Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
