import React, { useState } from "react";
import Sidebar from "../Templates/Sidebar";
import TopNav from "../Templates/TopNav";
import Header from "../Templates/Header";
import axios from "../utils/Axios";
import { useEffect } from "react";
import Cards from "../Templates/Cards";

const Home = () => {
  document.title = "StreamFlix | Home";
  // sliding image state----------------------------
  const [wallpaper, setwallpaper] = useState(null);
  const Trendings = async () => {
    try {
      const { data } = await axios.get(`trending/movie/day`);
      const Randomnums = Math.floor(Math.random() * data.results.length);
      setwallpaper(data.results[Randomnums]);
      // console.log(data.results[Randomnums])
      // console.log(data.results[Randomnums]);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  /////trending cards state-------------------------
  const [cardsdets, setcardsdets] = useState(null)
  const Suggestion = async ()=>{
    try {
     const {data} = await axios.get(`trending/all/day`)
     setcardsdets(data.results)
    } catch (error) {
     console.log("Error", error)
    }
     }
     console.log(cardsdets)
  /////////////////////////////////////////
//  useEffect here-----------------
  useEffect(() => {
    !wallpaper && Trendings();
    !cardsdets && Suggestion();
    const interval = setInterval(() => {
      Trendings();
    }, 8000);
    return 
    () => clearInterval(interval);
  }, []);

  return wallpaper && cardsdets ? (
    <>
      <Sidebar />
      <div className="w-[80%] h-full">
        <TopNav />
        <Header Image={wallpaper} />
      <Cards trends={cardsdets} />
      </div>
    </>
  ) : <h1 className="text-white text-5xl">Loadinggg.....</h1>
};

export default Home;
