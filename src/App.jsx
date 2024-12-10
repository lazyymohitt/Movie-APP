import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Trending from './components/Trending'

function App() {
  return (
    <div className='h-screen  w-screen bg-[#1e1e1e] flex'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/trending' element={<Trending/>}/>
   </Routes>
    </div>
  )
}
export default App
