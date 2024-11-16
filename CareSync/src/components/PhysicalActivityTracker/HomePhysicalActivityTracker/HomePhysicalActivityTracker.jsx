import "../HomePhysicalActivityTracker/HomePhysicalActivityTracker.css"
import {NavLink } from 'react-router-dom';
const HomePhysicalActivityTracker = () => {
    return <>
        <div className="homePhysicalTracker">
            <img src="/src/assets/homePhysicalActivity.png" className="bgPhysicalTraning" />
            <div className="bgTextHome">
                <h1>Reach Your Best</h1>
                <p>Whether you’re training for a marathon or your biggest season yet, we’re here to help you make serious progress.</p>
                
                <NavLink to="/PhysicalActivityPlanner"><button className="customBtn">Get Started</button></NavLink>
            </div>
        </div>
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
                            <img src="/src/assets/imgBgPhy2.png" />
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
                            <img src="/src/assets/kjizize.jpg"></img>
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
    </>

}

export default HomePhysicalActivityTracker