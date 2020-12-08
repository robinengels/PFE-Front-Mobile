import React from 'react'
import './CitizenHealth.css'

const CitizenHealth = ({isPositive}) => {
    if(!isPositive){
        return(
            <div className="health">
                <p>You are safe !</p>
            </div>
        )
    }
    else{
        return(
            <div className="health">
                <p>Be carefull you might be infected !</p>
            </div>
        )
    }
}

export default CitizenHealth