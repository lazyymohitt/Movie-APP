import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);
  // console.log(query)
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      setsearches(data.results);
      // console.log(data.results)
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className=" relative navbar w-full h-[10vh]  flex justify-start items-center gap-4 ">
      <i className=" text-2xl font-semibold  ri-search-line ml-[20%] mt-2"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        className=" tracking-tight mt-2  w-[50%] px-5 py-2 bg-transparent text-zinc-300 font-semibold outline-none"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="absolute right-[28%] text-md font-semibold  ri-close-large-line"
        ></i>
      )}
      <div className=" SearchedDiv  z-10 absolute max-h-[50vh] overflow-auto w-[50%] top-[80%]  left-[23.5%] bg-[#27272A] rounded-md">
        {searches.map((movie, i) => (
          <Link
          to={`/${movie.media_type}/details/${movie.id} `}
            key={i}
            className=" border-b-2 border-[#36393b] w-[100%] py-10 px-8  bg-[#232222] hover:bg-[#EF4444]  text-white duration-200 flex"
          >
            <img
              className="w-[10vh] h-[12vh] rounded-lg object-cover shadow-lg  mr-4"
              src={
                movie.poster_path || movie.profile_path
                  ? `https://image.tmdb.org/t/p/original${
                      movie.poster_path || movie.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {movie.name ||
                movie.title ||
                movie.original_name ||
                movie.original_title}
            </span>
          </Link>
        ))}
        {/* */}
      </div>
    </div>
  );
};

export default TopNav;
