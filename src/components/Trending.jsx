import React, { useEffect, useState } from "react";
import TopNav from "../Templates/TopNav";
import Dropdown from "../Templates/Dropdown";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import TgCards from "../Templates/TgCards";
const Trending = () => {
  document.title = "Trending";
  const Navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trendiss, settrendiss] = useState([]);

  const latest = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}`);
      settrendiss(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  useEffect(()=>{
    latest()
  },[category,duration ])
  
   console.log(trendiss)

  return (
    <div className="main  h-[100%] w-full overflow-y-auto ">
      <div className="nav h-[13vh] flex px-4 py-2 w-full items-baseline">
        <h1 className="text-2xl text-zinc-400 font-semibold ">
          <i
            onClick={() => Navigate(-1)}
            className="ri-arrow-left-line  text-zinc-400  mr-4 text-3xl"
          ></i>
          Trendings
        </h1>
        <TopNav/>
        <div className="flex gap-3">
          <Dropdown title="CATEGORY" func={(e)=>setcategory(e.target.value)} options={["all", "movie", "tv"]} />
          <Dropdown title="DURATION" func={(e)=>{setduration(e.target.value)}} options={["week", "day"]} />
        </div>
      </div>
      <TgCards imagess={trendiss}/>
    </div>
  );
};

export default Trending;
