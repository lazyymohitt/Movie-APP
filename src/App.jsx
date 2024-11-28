import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'

function App() {
 
  return (
    <div className='h-screen  w-screen bg-[#1e1e1e] flex'>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
    </div>
  )
}

export default App
