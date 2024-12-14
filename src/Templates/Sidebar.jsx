import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl my-5 ">
        <i className="ri-clapperboard-ai-fill text-red-500 mr-2"></i>
        <span className="font-bold tracking-wider text-zinc-500">
          StreamFlix.
        </span>
      </h1>
      <nav className="flex flex-col text-zinc-400 ">
        <h1 className="text-xl font-semibold mt-2 mb-4">New Feeds</h1>
        <Link to="/trending" className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link to="/popular" className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i className="ri-sparkling-2-fill mr-2"></i>
          Popular
        </Link>
        <Link to="/movies" className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i className="ri-movie-2-fill mr-2 "></i>
          Movies
        </Link>
        <Link to="tvshows" className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows{" "}
        </Link>
        <Link className=" text-md mb-2 p-3 hover:bg-red-700 duration-300 hover:rounded-lg ">
        <i className="ri-group-2-fill mr-2"></i>
          People
        </Link>
      <hr className="border-none h-[1px] bg-zinc-500 mb-3" />
      <h1 className="text-xl font-semibold mt-2 mb-4">Website Info.</h1>

      <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
      <i className="ri-information-fill mr-2"></i>
          About 
        </Link>
        <Link className=" text-md  p-3 hover:bg-red-700 duration-300 hover:rounded-md mb-3 ">
        <i className="ri-customer-service-2-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
