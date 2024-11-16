import React from 'react';
import './App.css'
import MealTracker from './components/Nutritional-comp/Nutri-components/MealTracker';
// import MealTracker from './components/Nutritional-comp/Nutri-components/MealTracker.jsx';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import MealList from './components/Nutritional-comp/Nutri-components/MealList';
import Admin from './components/Admin/Admin'
import BookAppointment from './components/BookAppointment/BookAppointment';
import HomePhysicalActivityTracker from './components/PhysicalActivityTracker/HomePhysicalActivityTracker/HomePhysicalActivityTracker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import PhysicalActivityPlanner from './components/PhysicalActivityTracker/PhysicalActivityPlanner/PhysicalActivityPlanner.jsx';
import PersonalizedChart from './components/PhysicalActivityTracker/PhysicalActivityPlanner/PersonalizedChartPhysicalActivityPlanner/PersonalizedChart.jsx';
function App() {
  

  return (
    <>

    <Header/>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Admin' element={<Admin/>}>Admin</Route>
            <Route path='/book-appointment' element={<BookAppointment/>}/>
            <Route path='/Nutrition-tracking' element={<MealTracker />}>Admin</Route>
      
     
            <Route path='/Nutrition' element={<MealTracker />}>Admin</Route>
            <Route path='/HomePhysicalActivityTracker' element={<HomePhysicalActivityTracker />}>Physical Activity Tracker</Route>
            <Route path='/PhysicalActivityPlanner' element={<PhysicalActivityPlanner />}>Physical Actiity Tracker</Route>
            <Route path='/PersonalizedChart' element={<PersonalizedChart />}>Physical Actiity Tracker</Route>
            

        </Routes>
          
    </>
  )
}

export default App
