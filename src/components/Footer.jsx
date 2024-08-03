import React from "react";
import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
function Footer() {
  return (
    <div
      className="text-white"
      style={{ backgroundColor: "hsl(233, 26%, 24%)" }}
    >
      <div className="w-4/5 m-auto py-20">
        <div className="flex flex-col gap-y-5 md:grid grid-cols-4">
          <div className="flex flex-col gap-y-5 md:gap-y-0 justify-between">
            <img
              src={logo}
              alt=""
              className="w-1/2  m-auto md:m-0 text-white"
            />
            <div className="flex gap-x-5 md:gap-x-3  m-auto md:m-0 ">
             <a href=""> <img src={facebookIcon} alt="" className=" hover:text-LimeGreen"/></a>
              <img src={youtubeIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={pinterestIcon} alt="" />
              <img src={instagramIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left gap-y-5">
            <p>
              <a href="" className="hover:text-LimeGreen transition-colors duration-300">
                About Us
              </a>
            </p>
            <p>
              <a href="" className="hover:text-LimeGreen transition-colors duration-300">
                Contact
              </a>
            </p>
            <p>
              <a href="" className="hover:text-LimeGreen transition-colors duration-300">
                Blog
              </a>
            </p>
          </div>
          <div className="flex flex-col text-center md:text-left gap-y-5">
            <p>
              <a href="" className="hover:text-LimeGreen transition-colors duration-300">
                Careers
              </a>
            </p>
            <p>
              <a href="" className="hover:text-LimeGreen transition-colors duration-300">
                Support
              </a>
            </p>
            <p>
              <a href="" className="hover:text-LimeGreen transition-colors duration-300">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="flex flex-col  gap-y-5 md:gap-y-0 text-center md:text-left justify-between">
            <div>
              <button
                className="text-white px-7 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))",
                }}
              >
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
