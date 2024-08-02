import React from "react";
import bgIntro from "../assets/images/bg-intro-desktop.svg";
import mockups from "../assets/images/image-mockups.png";
import onlineIcon from "../assets/images/icon-online.svg";
import onboardingIcon from "../assets/images/icon-onboarding.svg";
import budgetingIcon from "../assets/images/icon-budgeting.svg";
import apiIcon from "../assets/images/icon-api.svg";
import currencyImage from '../assets/images/image-currency.jpg'
import restaurantImage from '../assets/images/image-restaurant.jpg'
import planeImage from '../assets/images/image-plane.jpg'
import confettiImage from '../assets/images/image-confetti.jpg'

function Home() {
  return (
    <div className="w-full">
      {/* Hero section */}
      <div className=" bg-gray-50">
        <div className="grid grid-cols-2 items-center">
          <div className="ml-36 w-3/5 flex flex-col gap-y-5">
            <p className="text-[56px] font-[500] leading-tight">
              Next generation digital banking
            </p>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <p>
              <button className="bg-black text-white px-7 py-2 rounded-full">
                Request Invite
              </button>
            </p>
          </div>
          <div className="relative">
            <img src={bgIntro} alt="" className="-mt-20 h-[800px]" />
            <img src={mockups} alt="" className="absolute -mt-[100%]" />
          </div>
        </div>
      </div>
      {/* why choose us? */}
      <div className="bg-gray-100 pb-20">
        <div className=" flex flex-col gap-y-4 w-4/5 m-auto pt-32">
          <div>
            <p className="text-[40px]">Why choose Easybank?</p>
          </div>
          <div>
            <p>
              We leverage Open banking to turn your bank account into your
              financial hub.
            </p>
            <p>Control your finances like never before.</p>
          </div>
          <div className="flex justify-between gap-x-16 mt-16">
            <div className="flex flex-col gap-y-4">
              <img src={onlineIcon} alt="" className="w-1/5" />
              <p className="text-[24px]">Online Banking</p>
              <p>
                Our web and mobile applications allow you to keep track of your
                finances wherever you are in the world
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <img src={budgetingIcon} alt="" className="w-1/5" />
              <p className="text-[24px]">Simple Budgeting</p>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you're close to hitting your limits
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <img src={onboardingIcon} alt="" className="w-1/5" />
              <p className="text-[24px]">Fast Onboarding</p>
              <p>
                We don't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <img src={apiIcon} alt="" className="w-1/5" />
              <p className="text-[24px]">Open Api</p>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* latest articles */}
      <div className="bg-gray-50">
        <div className="w-4/5 m-auto py-20 flex flex-col gap-y-10">
          <p className="text-[40px]">Latest Articles</p>
          <div className="grid grid-cols-4 gap-x-10">
            <div className="rounded-lg bg-white">
              <img src={currencyImage} alt="" className="rounded-t-lg h-[200px]" />
              <div className="p-7 pr-10 flex flex-col gap-y-3">
                <p className="text-[12px] text-gray-400">By Claire Robinson</p>
                <p className="text-[20px] leading-tight">Receive money in any currency with no fees</p>
                <p className="text-[14px] text-gray-500">
                  The world is getting smaller and we're becoming mobile. So why
                  should you be forced to only receive money in a single...
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white">
              <img src={restaurantImage} alt="" className="rounded-t-lg h-[200px]" />
              <div className="p-7 pr-10 flex flex-col gap-y-3">
                <p className="text-[12px] text-gray-400">By Claire Robinson</p>
                <p className="text-[20px] leading-tight">Receive money in any currency with no fees</p>
                <p className="text-[14px] text-gray-500">
                  The world is getting smaller and we're becoming mobile. So why
                  should you be forced to only receive money in a single...
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white">
              <img src={planeImage} alt="" className="rounded-t-lg h-[200px]" />
              <div className="p-7 pr-10 flex flex-col gap-y-3">
                <p className="text-[12px] text-gray-400">By Claire Robinson</p>
                <p className="text-[20px] leading-tight">Receive money in any currency with no fees</p>
                <p className="text-[14px] text-gray-500">
                  The world is getting smaller and we're becoming mobile. So why
                  should you be forced to only receive money in a single...
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white">
              <img src={confettiImage} alt="" className="rounded-t-lg h-[200px]" />
              <div className="p-7 pr-10 flex flex-col gap-y-3">
                <p className="text-[12px] text-gray-400">By Claire Robinson</p>
                <p className="text-[20px] leading-tight">Receive money in any currency with no fees</p>
                <p className="text-[14px] text-gray-500">
                  The world is getting smaller and we're becoming mobile. So why
                  should you be forced to only receive money in a single...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
