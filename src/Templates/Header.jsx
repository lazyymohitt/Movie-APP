import React from "react";

const Header = ({ Image }) => {
  console.log(Image);
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
       url(https://image.tmdb.org/t/p/original/${
         Image.backdrop_path || Image.profile_path
       })
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-1/2"
    ></div>
  );
};

export default Header;
