import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import Peoples from './components/Peoples'
import ContactUs from './Templates/ContactUs'
import MovieDetails from './components/MovieDetails'
import Tvdetails from './components/Tvdetails'
import PersonDetails from './components/PersonDetails'
import Trailer from './Templates/Trailer'
import NotFound from './Templates/NotFound'

function App() {
  return (
    <div className='h-screen  w-screen bg-[#1e1e1e] flex'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/trending' element={<Trending/>}/>
    <Route path='/popular' element={<Popular/>}/>
    <Route path='/movie' element={<Movies/>}/>
    <Route path="/movie/details/:id" element={<MovieDetails/>}>
                    <Route
                        path="/movie/details/:id/trailer"
                        element={<Trailer/>}
                    />
                </Route>

    <Route path='/tv' element={<Tvshows/>}/>  
    <Route path='/tv/details/:id' element={<Tvdetails/>}>
    <Route
                        path="/tv/details/:id/trailer"
                        element={<Trailer/>}
                    />
    </Route>
    <Route path='/person' element={<Peoples/>}/>
    <Route path='/person/details/:id' element={<PersonDetails/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
    </div>
  )
}
export default App
