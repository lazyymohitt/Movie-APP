import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import Peoples from './components/Peoples'
import ContactUS from './Templates/ContactUS'

function App() {
  return (
    <div className='h-screen  w-screen bg-[#1e1e1e] flex'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/trending' element={<Trending/>}/>
    <Route path='/popular' element={<Popular/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/tvshows' element={<Tvshows/>}/>
    <Route path='/peoples' element={<Peoples/>}/>
    <Route path='/contactus' element={<ContactUS/>}/>
   </Routes>
    </div>
  )
}
export default App
