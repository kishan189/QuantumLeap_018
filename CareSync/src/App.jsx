import { useState } from 'react';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
// import NavBar from './components/NavLinks/NavLink'
import Admin from './components/Admin/Admin'
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Admin' element={<Admin/>}>Admin</Route>

      </Routes>
    
    </>
  )
}

export default App
