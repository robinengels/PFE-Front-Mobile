import React, { useContext } from 'react'
import CitizenHealth from 'components/CitizenHealth/CitizenHealth'
import AppContext from 'contexts/AppContext'
import './CitizenInfo.css'

const CitizenInfo = () => {
    const {citizenInfo} = useContext(AppContext)

    var color = "#00a35a"
    if(citizenInfo.is_Positive) color = "red"
    else if(citizenInfo.is_Exposed) color = "orange"

    var name
    if(citizenInfo.first_Name != null){
        name = <p>Hello {citizenInfo.first_Name} {citizenInfo.last_Name}</p>
    }

    return(
        <div className="citizenInfo">
            <div className="citizenContent" style={{backgroundColor:color, borderColor:color}}>
                {name}
                <CitizenHealth isPositive={citizenInfo.is_Positive} isExposed={citizenInfo.is_Exposed}/>
            </div>
        </div>
    )
    
}

export default CitizenInfo