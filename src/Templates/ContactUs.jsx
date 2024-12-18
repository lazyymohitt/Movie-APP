import React, { useEffect, useState } from "react";
import Loader from "../Templates/Loader";
import Buttons from "./Buttons";

const ContactUS = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);

    return () => clearTimeout(timer);
  });
  return loading ? (
    <Loader />
  ) : (
    <div className="h-screen w-screen p-10 bg-black">
      <div className="top h-[15vh] w-[90%] flex justify-between items-center p-5 mx-auto">
        <h1 className="text-4xl text-white tracking-wider  font-semibold">
          <i className="ri-ghost-fill text-red-500 mr-3"></i>StreamFlixx..
        </h1>
        <div className="btns flex gap-5">
          <Buttons bgc="black" text="SignUp" />
          <Buttons
            bgc="white"
            textcolor="black"
            hovercolor="#EF4444"
            text="ContactUs"
          />
        </div>
      </div>
      <div className="content h-[88%] px-20  text-white w-[90%] mx-auto">
        <span className=" flex items-baskline gap-4 text-6xl  mb-3  font-semibold">
          Heyy!!!
        </span>
        <span className=" flex items-baskline gap-4 text-6xl  mb-3 font-semibold">
          My Name Is
          <input
            className="bg-transparent font-medium  tracking-wider pt-5 mb-9 outline-none text-white text-lg border-b border-zinc-600 "
            placeholder="Enter Your name"
            type="text"
          />
        </span>
        <span className=" flex items-baskline gap-4 text-6xl  font-semibold">
          I'm From
          <input
            className="bg-transparent font-medium  tracking-wider pt-5 mb-9 outline-none text-white text-lg border-b border-zinc-600 "
            placeholder="Enter Your City"
            type="text"
          />
        </span>
        <span className=" flex items-baskline gap-4 text-6xl mb-3  font-semibold">
          Here is my Email
          <input
            className="bg-transparent font-medium  tracking-wider pt-5 mb-9 outline-none text-white text-lg border-b border-zinc-600 "
            placeholder="Enter Your Email"
            type="text"
          />
        </span>
        <span className=" flex items-baskline gap-4 text-6xl  mb-3 font-semibold">
          And Message
          <input
            className="bg-transparent font-medium  tracking-wider pt-5 mb-9 outline-none text-white text-lg border-b border-zinc-600 "
            placeholder="Send Message"
            type="text"
          />
        </span>
        <Buttons text="Submit" bgc="white" textcolor="black" />
      </div>
    </div>
  );
};

export default ContactUS;
