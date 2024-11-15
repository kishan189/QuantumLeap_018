import React from 'react';
import './App.css'
import MealTracker from './components/Nutritional-comp/Nutri-components/MealTracker';
// import MealTracker from './components/Nutritional-comp/Nutri-components/MealTracker.jsx';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'

import Admin from './components/Admin/Admin'

function App() {
  

  return (
    <>

    <Header/>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Admin' element={<Admin/>}>Admin</Route>
            <Route path='/Nutrition' element={<MealTracker />}>Admin</Route>

        </Routes>
          
    </>
  )
}

export default App
