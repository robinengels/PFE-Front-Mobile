import MaterialButton from 'components/MaterialButton/MaterialButton'
import React from 'react'
import './ButtonContainer.css'

const ButtonContainer = ({text,setScanning}) => {
    return(
        <div className="buttonContainer">
            <p>Scanner un QrCode a chaque fois que vous rentrez dans un établissement</p>
            <MaterialButton text={text} onClick={() => setScanning(true)}/>
        </div>
    )
}

export default ButtonContainer