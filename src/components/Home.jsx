import React, { useState } from "react";
import Sidebar from "../Templates/Sidebar";
import TopNav from "../Templates/TopNav";
import Header from "../Templates/Header";
import axios from "../utils/Axios";
import { useEffect } from "react";

const Home = () => {
  document.title = "StreamFlix | Home";
  const [wallpaper, setwallpaper] = useState(null);
  const Trendings = async () => {
    try {
      const { data } = await axios.get(`trending/movie/day`);
      const Randomnums =  Math.floor(Math.random() * data.results.length );
      setwallpaper(data.results[Randomnums])
      // console.log(data.results[Randomnums])
      // console.log(data.results[Randomnums]);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  useEffect(() => {
    Trendings();
  }, []);

  return  (
    <>
      <Sidebar />
      <div className="w-[80%] h-full">
        <TopNav />
        {wallpaper ? <Header Image={wallpaper} />  : <h1>Loading</h1> }
        
      </div>
    </>
  )
};

export default Home;
