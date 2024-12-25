import  { useEffect, useState } from "react";
import TopNav from "../Templates/TopNav";
import Dropdown from "../Templates/Dropdown";
import axios from "../utils/Axios";
import Loader from "../Templates/Loader"
import { useNavigate } from "react-router-dom";
import TgCards from "../Templates/TgCards";
import InfiniteScroll from "react-infinite-scroll-component"

const Tvshows = () => {
    const Navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tvshows, settvshows] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore ,sethasmore] = useState(true)
    document.title = "Tv shows"+ " |  "+ category.toUpperCase();
   
  
    const latest = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);
  
  
        if(data.results.length > 0){
          settvshows((prev)=> [...prev, ...data.results])
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
      if (tvshows.length===0) {
        latest()
      }
      else{
        setpage(1)
        settvshows([])
        latest()
      }
    }
    useEffect(() => {
      refreshhandler()
    }, [category]);
  
    // console.log(tvshows);
  
    return tvshows.length > 0 ? (
      <div className="main  h-[100%] w-full  ">
        <div className="nav h-[13vh] flex px-4 py-2 w-full items-baseline">
          <h1 className="text-2xl text-zinc-400 font-semibold ">
            <i
              onClick={() => Navigate(-1)}
              className="ri-arrow-left-line  text-zinc-400  mr-4 text-2xl"
            ></i>
            TvShows
          </h1>
          <TopNav />
          <div className="flex gap-3">
            <Dropdown
            value={category}
              title="CATEGORY"
              func={(e) => setcategory(e.target.value)}
              options={[
                            "on_the_air",
                            "popular",
                            "top_rated",
                            "airing_today",
                        ]}
            />
          </div>
        </div>
        <InfiniteScroll  
        dataLength={tvshows.length}
            next={latest}
            hasMore={hasmore}
            loader={<Loader/>}>
          <TgCards imagess={tvshows} title="tv" />
        </InfiniteScroll>

      </div> 
    )
    :
    (
      <Loader />
  )
}

export default Tvshows