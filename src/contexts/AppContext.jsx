import React, { useState } from 'react'
import citizenServices from 'services/citizen'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [citizenInfo,setCitizenInfo] = useState({})
    const[isScanning,setScanning] = useState(false)
    const[notification,setNotification] = useState("")
    const storage = window.localStorage


    const updateCitizenInfo = () => {
        let id = storage.getItem("UID")
        if(id != null){
          console.log("Updating citizen info")
          citizenServices.getCitizen(id).then(data => {
            console.log("Citizen info",data)
            setCitizenInfo(data)
          })
        }    
      }

    const exposedValue = {
        citizenInfo,
        setCitizenInfo,
        isScanning,
        setScanning,
        notification,
        setNotification,
        updateCitizenInfo
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper
}

export default Context