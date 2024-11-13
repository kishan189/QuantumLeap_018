import React from 'react'
import "./Exploration.css"

export const Exploration = () => {



  return (
    <div className='ExploreSection'>
    <div style={{marginTop:40}}><h1>Explore our Centres of Clinical Excellence</h1></div>
    <p>
        CareSync has dedicated Centres of Excellence for several key specialties and super specialties. They are unique and state of the art facilities
    </p>
     <p>
        spread across several of the Apollo hospital locations and each Centre of Excellence stands out as a citadel of world class clinical outcomes.
     </p>
     <div>
        <p>
            Learn about the world class health care we provide
        </p>
     </div>
    
    <div>
        <div>
           <img style={{width:300,height:400,marginRight:20}} src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp' alt='image'/>
          
          <img style={{width:300,height:400}} src='https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=600' alt='image'/>
        </div>
       
    </div>
    </div>
  )
}
