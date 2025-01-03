"use client";
import React from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen lg:w-[1305px] lg:h-[781px] gap-6 lg:gap-[129px]">
      {/* Left Section - Image */}
      <div className="lg:flex w-full lg:w-[805px] h-full lg:h-[781px]">
        <Image
          src="/images/loginImg.jpg"
          alt="login Image"
          width={919}
          height={706}
          className="object-contain"
        />
      </div>

      <div className="w-full lg:w-[500px] h-full flex flex-col items-center justify-center px-4 lg:px-0">
        <h1 className="text-[24px] lg:text-[36px] font-[500] text-[#000000] mb-4 lg:gap-[24px]">
          Log in to Exclusive
        </h1>
        <p className="text-[14px] lg:text-[16px] font-[400] text-[#000000] text-center lg:text-left mb-8">
          Enter your details below
        </p>

        <form className="w-full max-w-[370px]">
          <div className="mb-6 border-b-2 border-opacity-70 border-[#000000] opacity-[40%]">
            <label>
              <input
                type="text"
                id="email"
                className="w-full text-[14px] lg:text-[16px] font-[400] px-2 lg:px-4 py-2 text-[#000000]"
                placeholder="Email or Phone Number"
              />
            </label>
          </div>
          
          <div className="mb-6 border-b-2 border-opacity-70 border-[#000000] opacity-[40%]">
            <label>
              <input
                type="password"
                id="password"
                className="w-full text-[14px] lg:text-[16px] font-[400] px-2 lg:px-4 py-2 text-[#000000]"
                placeholder="Password"
              />
            </label>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <button
              type="submit"
              className="bg-[#DB4444] text-[#FAFAFA] px-[24px] lg:px-[48px] py-[12px] lg:py-[16px] text-[14px] lg:text-[16px] font-[400]"
            >
              Log In
            </button>

            <a
              href="#"
              className="text-[14px] lg:text-[16px] text-[#DB4444] font-[400] hover:underline focus:underline"
            >
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}