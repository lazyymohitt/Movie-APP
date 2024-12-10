import  noimage from "/noimage.webp"
import React from 'react';
import { Link } from 'react-router-dom';

const TgCards = ({imagess}) => {
  return (
    <div className="h-full w-full flex flex-wrap gap-4 p-7 justify-center">
    {imagess.map((elem,i)=>
    <div className='h-[45vh] w-[15vw]   overflow-hidden '>
      <img  className="h-[90%] w-full object-cover" src={
                elem.poster_path || elem.profile_path
                  ? `https://image.tmdb.org/t/p/original${
                      elem.poster_path || elem.profile_path
                    }`
                  : noimage
              } alt="" />
      <h1 className="text-center text-xl font-medium font-[Gilroy] text-white">{elem.original_title || elem.title || elem.name}</h1>

    </div>
    )}
    </div>
  );
};

export default TgCards;
