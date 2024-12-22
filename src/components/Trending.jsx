import React, { useEffect, useState } from "react";
import TopNav from "../Templates/TopNav";
import Dropdown from "../Templates/Dropdown";
import axios from "../utils/Axios";
import Loader from "../Templates/Loader"
import { useNavigate } from "react-router-dom";
import TgCards from "../Templates/TgCards";
import InfiniteScroll from "react-infinite-scroll-component"
const Trending = () => {
  const Navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trendiss, settrendiss] = useState([]);
  const [page, setpage] = useState(1)
  const [hasmore ,sethasmore] = useState(true)
  document.title = "Trending"+ " |  "+ category.toUpperCase();
 
  const latest = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`);


      if(data.results.length > 0){
        settrendiss((prev)=> [...prev, ...data.results])
        setpage(page+1)
      }
      else{
        sethasmore(false)
      }
     
      
    } catch (error) {
      console.log("Error :", error);
    }
  };
  const refreshhandler = ()=>{
    if (trendiss.length===0) {
      latest()
    }
    else{
      setpage(1)
      settrendiss([])
      latest()
    }
  }
  useEffect(() => {
    refreshhandler()
  }, [category, duration]);

  // console.log(trendiss);

  return trendiss.length > 0 ? (
    <div className="main  h-[100%] w-full ">
      <div className="nav h-[13vh] flex px-4 py-2 w-full items-baseline">
        <h1 className="text-2xl text-zinc-400 font-semibold ">
          <i
            onClick={() => Navigate(-1)}
            className="ri-arrow-left-line  text-zinc-400  mr-4 text-3xl"
          ></i>
          Trendings
        </h1>
        <TopNav />
        <div className="flex gap-3">
          <Dropdown
            value={category}
            title="CATEGORY"
            func={(e) => setcategory(e.target.value)}
            options={[ "movie", "tv","all"]}
          />
          <Dropdown
          value={duration}
            title="DURATION"
            func={(e) => {
              setduration(e.target.value);
            }}
            options={["week", "day"]}
          />
        </div>
      </div>

      <InfiniteScroll
      dataLength={trendiss.length}
          next={latest}
          hasMore={hasmore}
          loader={<Loader/>}>
        <TgCards title={category} imagess={trendiss} />
      </InfiniteScroll>
    </div>
    
  )
  :
  (
    <Loader />
)
};

export default Trending;
