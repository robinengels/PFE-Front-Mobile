import MaterialButton from 'components/MaterialButton/MaterialButton'
import React from 'react'
import './ButtonContainer.css'

const ButtonContainer = ({text,buttonText,onClick}) => {
    return(
        <div className="buttonContainer">
            <p>{text}</p>
            <MaterialButton text={buttonText} onClick={onClick}/>
        </div>
    )
}

export default ButtonContainer