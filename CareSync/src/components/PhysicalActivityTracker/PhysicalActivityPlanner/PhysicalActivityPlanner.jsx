import { useEffect, useState } from "react"
import PhysicalActivityFormFirst from "../PhysicalActivityForm/PhysicalActivityFormFirst"
import PhysicalActivityFormFourth from "../PhysicalActivityForm/PhysicalActivityFormFourth"
import PhysicalActivityFormSecond from "../PhysicalActivityForm/PhysicalActivityFormSecond"
import PhysicalActivityFormThird from "../PhysicalActivityForm/PhysicalActivityFormThird"
import "../PhysicalActivityPlanner/PhysicalActivityPlanner.css"
import PhysicalActivityFormFifth from "../PhysicalActivityForm/PhysicalActivityFormFifth"
import {NavLink } from 'react-router-dom';

const PhysicalActivityPlanner = () => {

    const [page,setPage] = useState(0)
    const [progress,setProgres] = useState("25%")

    const jumpToNextPage = () => {
        if (page < 4){
            setPage(e => e+1)
        }
    }
    
    const jumpToPrevPage = () => {
        if(page > 0){
            setPage(e => e-1)
        }
    }
    useEffect(() => {
        if(page == 0){
            setProgres('25%')
        }else if(page == 1 ){
            setProgres('50%')
        }else if(page == 2){
            setProgres('75%')
        }else if(page == 3){
            setProgres('100%')
        }
    },[page])
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="customFormPhy">
                    <div className="customProgressBar">
                        <div className="customProgressStatus" style={{width: progress}}></div>
                    </div>

                    {page == 0 && <PhysicalActivityFormFirst />}
                    {page == 1 && <PhysicalActivityFormSecond /> }
                    {page == 2 && <PhysicalActivityFormThird /> }
                    {page == 3 && <PhysicalActivityFormFourth /> }
                    {page == 4 && <PhysicalActivityFormFifth/>}

                    <div className="row">
                        <div className="col-12">
                            <div className="formCustomInputs">
                                <div className="buttonCustomPage">
                                    {page == 0 ? <button className="customBtn secondary" >Back</button>:<button className="customBtn secondary" onClick={jumpToPrevPage}>Back</button>}
                                    {page == 4 ? <NavLink to="/PersonalizedChart"><button className="customBtn primary" >Get Plan</button></NavLink>:<button className="customBtn primary" onClick={jumpToNextPage}>Next</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default PhysicalActivityPlanner