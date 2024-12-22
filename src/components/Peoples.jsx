import  { useEffect, useState } from "react";
import TopNav from "../Templates/TopNav";
import Dropdown from "../Templates/Dropdown";
import axios from "../utils/Axios";
import Loader from "../Templates/Loader"
import { useNavigate } from "react-router-dom";
import TgCards from "../Templates/TgCards";
import InfiniteScroll from "react-infinite-scroll-component"

const Peoples = () => {
    const Navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [peoples, setpeoples] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore ,sethasmore] = useState(true)
    document.title = "Peoples" 
   
  
    const latest = async () => {
      try {
        const { data } = await axios.get(`/person/${category}?page=${page}`);
        // const { data } = await axios.get(`/tv/${category}?page=${page}`);
  
        if(data.results.length > 0){
          setpeoples((prev)=> [...prev, ...data.results])
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
      if (peoples.length===0) {
        latest()
      }
      else{
        setpage(1)
        setpeoples([])
        latest()
      }
    }
    useEffect(() => {
      refreshhandler()
    }, [category]);
  
    // console.log(peoples);
  
    return peoples.length > 0 ? (
      <div className="main  h-[100%] w-full ">
        <div className="nav h-[13vh] flex px-4 py-2 w-full items-baseline">
          <h1 className="text-2xl text-zinc-400 font-semibold ">
            <i
              onClick={() => Navigate(-1)}
              className="ri-arrow-left-line  text-zinc-400  mr-4 text-2xl"
            ></i>
            Peoples
          </h1>
          <TopNav />
          <div className="flex gap-3">
          </div>
        </div>
  
        <InfiniteScroll
        dataLength={peoples.length}
            next={latest}
            hasMore={hasmore}
            loader={<Loader/>}>
          <TgCards title="person"  imagess={peoples} />
        </InfiniteScroll>
      </div> 
    )
    :
    (
      <Loader />
  )
}

export default Peoples