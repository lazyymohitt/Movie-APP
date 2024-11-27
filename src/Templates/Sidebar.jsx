import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl my-5 ">
        <i class="ri-clapperboard-ai-fill text-red-500 mr-2"></i>
        <span className="font-bold tracking-wider text-zinc-500">
          StreamFlix.
        </span>
      </h1>
      <nav className="flex flex-col text-zinc-400 ">
        <h1 className="text-xl font-semibold mt-2 mb-4">New Feeds</h1>
        <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i class="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i class="ri-sparkling-2-fill mr-2"></i>
          Popular
        </Link>
        <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i class="ri-movie-2-fill mr-2 "></i>
          Movies
        </Link>
        <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i class="ri-tv-2-fill mr-2"></i>
          Tv Shows{" "}
        </Link>
        <Link className=" text-md mb-2 p-3 hover:bg-red-700 duration-300 hover:rounded-lg ">
        <i class="ri-group-2-fill mr-2"></i>
          People
        </Link>
      <hr className="border-none h-[1px] bg-zinc-500 mb-3" />
      <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
      <i class="ri-information-fill mr-2"></i>
          WebSite Info..
        </Link>
        <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i class="ri-customer-service-2-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
