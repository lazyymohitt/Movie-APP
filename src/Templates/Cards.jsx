import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ trends }) => {
  // console.log(trends);

  return (

      <div className=".card-container h-[30vh] p-4 w-full flex overflow-x-auto ">
        {trends.map((mov, i) => (
          <div
            key={i}
            className="cards overflow-hidden relative h-[100%]  min-w-[15%] mr-3   bg-zinc-800 rounded-xl"
          >
            <div className="imagee h-[80%] w-full">
              <img
                className="h-full w-full object-cover object-center "
                src={`https://image.tmdb.org/t/p/original/${
                  mov.backdrop_path || mov.profile_path
                }`}
                alt=""
              />
            </div>
            {/* ---------------------------------------- */}
            <div className="desc w-full h-[20%] px-3 pt-1 text-md font-semibold ">
              <h1 className="leading-4  text-gray-300">
                {mov.original_title || mov.title || mov.name}
              </h1>
            </div>
            {/* --------------------------------------------------- */}
          </div>
        ))}
      </div>
  );
};

export default Cards;
