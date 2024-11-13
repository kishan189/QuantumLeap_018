import React from 'react'
import Cards from './Card'
import Carousel from './Carousel'
import Footer from './Footer'
import { Exploration } from './Exploration'
const Home = () => {
    
  return (
    <>

    <div style={{marginTop:50}}>
    <Carousel/>
    </div>
   <div style={{marginTop:30}}>
     <Cards/>
   </div>
   <Exploration/>
   <Footer/>
    </>
    
  )
}

export default Home