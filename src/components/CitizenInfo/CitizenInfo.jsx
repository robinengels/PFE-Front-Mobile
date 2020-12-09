import React from 'react'
import CitizenHealth from 'components/CitizenHealth/CitizenHealth'
import Container from '@material-ui/core/Container'
import './CitizenInfo.css'

const CitizenInfo = ({info}) => {

    var color = "#00a35a"
    if(info.is_Positive) color = "red"
    else if(info.is_Exposed) color = "orange"
    
    

    if(info.first_Name != null){
        return (
            <div className="citizenInfo">
                <div className="citizenContent">
                    <p>Hello {info.first_Name} {info.last_Name}</p>
                    <CitizenHealth isPositive={info.is_Positive} isExposed={info.is_Exposed}/> 
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="citizenInfo">
                <div className="citizenContent" style={{backgroundColor:color, borderColor:color}}>
                <CitizenHealth isPositive={info.is_Positive} isExposed={info.is_Exposed}/>
                </div>
            </div>
        )
    }
}

export default CitizenInfo