import React from 'react'
import Cards from './Card'
import Carousel from './Carousel'
import Footer from './Footer'
import { Exploration } from './Exploration';
import imgBgPhy2 from '../../assets/imgBgPhy2.png';
import kjizize from "../../assets/kjizize.jpg";


const Home = () => {
    
  return (
    <>

    <div >
    <Carousel/>
    </div>
   <div style={{marginTop:-80}}>
     <Cards/>
   </div>
   
   <Exploration/>
   <div className="container customContainer">
            <div className="row">
                <div className="col-sm-10 offset-sm-1" >
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="pyContent">

                                <h1>Set Goals.<br />Log Workouts.<br />Stay On Track.</h1>
                                <p>Easily track your Workouts, set Training Plans, and discover new Workout Routines to crush your goals.</p>
                                <button className="customBtn dark">Plan your Workout</button>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <img src={imgBgPhy2} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="container customContainer">
            <div className="row">
                <div className="col-sm-10 offset-sm-1">
                    <div className="row customBlackBg">
                        <div className="col-sm-7">
                            <img src={kjizize}></img>
                        </div>
                        <div className="col-sm-5">
                            <div className="pyContent">
                                <h1>Its You VS You</h1>
                                <p>Don't stop when you are tired stop when you are done</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container customContainer2">
            <h1>Push Your Limit</h1>
            <p>Hit milestones and PR’s by taking on a new challenge every month.</p>
        </div>
   <Footer/>
    </>
    
  )
}

export default Home