import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";


const Cards = ({ data, title }) => {
  return (

      <div className=".card-container h-[34vh] p-4 w-full flex overflow-x-auto ">
        {data.map((mov, i) => (
          <Link
          to={`/${mov.media_type}/details/${mov.id}`}
            key={i}
            className="cards overflow-hidden relative h-[100%]  min-w-[17%] mr-3   bg-zinc-800 rounded-md"
          >
            <div className="imagee h-[78%] w-full">
              <img
                className="h-full w-full object-cover object-center "
                src={ mov.backdrop_path || mov.profile_path || mov.poster_path ?`https://image.tmdb.org/t/p/original/${
                  mov.backdrop_path || mov.profile_path  || mov.poster_path
                }`: noimage }
                alt=""
              />
            </div>
            {/* ---------------------------------------- */}
            <div className="desc w-full h-[20%]   text-md font-medium ">
              <h1 className="leading-4 p-3 text-center  text-gray-300">
                {mov.original_title || mov.title || mov.name}
              </h1>
            </div>
            {/* --------------------------------------------------- */}
          </Link>
        ))}
      </div>
  );
};

export default Cards;
