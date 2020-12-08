import React from 'react'
import CitizenHealth from 'components/CitizenHealth/CitizenHealth'
import './CitizenInfo.css'

const CitizenInfo = ({info}) => {
    if(info.first_Name != null){
        return (
            <div className="citizenInfo">
               <p>Hello {info.first_Name} {info.last_Name}</p>
               <CitizenHealth isPositive={info.Is_Positive}/> 
            </div>
        )
    }
    else{
        return(
            <div className="citizenInfo">
                <CitizenHealth isPositive={info.is_Positive}/>
            </div>
        )
    }
}

export default CitizenInfo