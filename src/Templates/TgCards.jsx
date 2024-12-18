import noimage from "/noimage.webp";
import React from "react";
import { Link } from "react-router-dom";

const TgCards = ({ imagess }) => {
  return (
    <div className=" h-full w-full bg-[#1E1E1E] flex flex-wrap gap-5 p-7 justify-center">
      {imagess.map((elem, i) => (
        <div key={i} className=" relative h-[45vh] w-[15vw] mr-5 rounded-md  ">
          <img
            className="h-[90%] w-full object-cover"
            src={
              elem.poster_path || elem.profile_path || elem.backdrop_path
                ? `https://image.tmdb.org/t/p/original${
                    elem.poster_path || elem.profile_path || elem.backdrop_path
                  }`
                : noimage
            }
          />
          <h1 className="text-center text-md font-medium font-[Gilroy] text-white">
            {elem.original_title || elem.title || elem.name}
          </h1>
          {elem.vote_average && (
            <div className="absolute right-[-8%] bottom-[35%] font-semibold text-white w-[6vh] h-[6vh] rounded-full bg-yellow-500 flex justify-center items-center ">
            {(elem.vote_average * 10).toFixed()} <sup>%</sup>
          </div>
          )}
        
        </div>
      ))}
    </div>
  );
};

export default TgCards;
