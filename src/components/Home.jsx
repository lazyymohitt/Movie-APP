import React, { useState } from "react";
import Sidebar from "../Templates/Sidebar";
import TopNav from "../Templates/TopNav";
import Header from "../Templates/Header";
import axios from "../utils/Axios";
import { useEffect } from "react";
import Cards from "../Templates/Cards";
import Loader from "../Templates/Loader";
import Dropdown from "../Templates/Dropdown";

const Home = () => {
  document.title = "StreamFlix | Home";
  // sliding image state----------------------------
  const [category, setcategory] = useState("all")
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
     const {data} = await axios.get(`trending/${category}/day`)
     setcardsdets(data.results)
     console.log("RESPOMSE" ,data)
    } catch (error) {
     console.log("Error", error)
    }
     }
    //  /useState for cards filtering-------------------------------------
    //  console.log(cardsdets)
  /////////////////////////////////////////
//  useEffect here-----------------
useEffect(() => {
  Suggestion();
  !wallpaper && Trendings();
  const interval = setInterval(() => {
    Trendings();
  }, 8000);
  return 
  () => clearInterval(interval);
}, [category]);

  return wallpaper && cardsdets ? (
    <>
      <Sidebar />
      <div className="w-[80%] h-full  ">
        <TopNav />
        <Header Image={wallpaper} />
        <div className="headings pt-5 px-8 flex justify-between">
        <h1 className="text-2xl  font-semibold text-white ">
          Trendings..
          <i className=" ml-1 text-white  ri-blaze-fill"></i>
        </h1>
        <Dropdown title="FILTER" options={["all", "tv","movie"]} func={(e)=>setcategory(e.target.value)}/>
      </div>
      <Cards trends={cardsdets} />
      </div>
    </>
  ) : <Loader/>
};

export default Home;
