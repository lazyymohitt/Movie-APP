import React from "react";
import { Link } from "react-router-dom";

const Header = ({ Image }) => {
  // console.log(Image);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
       url(https://image.tmdb.org/t/p/original/${
         Image.backdrop_path || Image.profile_path
       })
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="backGroundImage w-full h-[50vh]"
    >
      <div className="dets h-[45%] px-10 relative text-white  top-[38%] ml-10 w-[48%]">
        <h1 className="text-4xl font-bold mb-2">
          {Image.original_title || Image.title}.
        </h1>
        <p className="text-sm  letter tracking-wider leading-6">
          {Image.overview.slice(0,120)}.
        </p>{" "}
        <Link className="text-blue-500">more...</Link>
        <br />
        <p className="mb-4">
          <i className="text-yellow-400 mr-2 ri-megaphone-fill"></i>
          {Image.release_date|| "New-Release"}
          <i className=" text-yellow-400 ml-2 ri-disc-fill"></i> {Image.
            media_type.toUpperCase()}
        </p>
        <Link className="bg-[#EF4444] px-5 py-2 font-semibold rounded-md">Watch Trailer</Link>
      </div>
    </div>
  );
};

export default Header;
