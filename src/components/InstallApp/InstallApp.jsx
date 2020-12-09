import React, { useState } from 'react'
import citizenServices from 'services/citizen'


const InstallApp = ({installPrompt,setShowInstall,citizen}) => {
    const [showRegister,setShowRegister] = useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")

    const onChangeFN = (e) => {
        setFirstName(e.target.value)
    }

    const onChangeLN = (e) => {
        setLastName(e.target.value)
    }

    const install = () => {
        setShowRegister(true)
    }

    const cancel = () => {
        setShowInstall(false)
    }

    const installAnonymous = () => {
        installPrompt.prompt()
        installPrompt.userChoice.then((e) => {
            setShowInstall(false)
        })
    }

    const installRegistered = (e) => {
        e.preventDefault()
        let id = window.localStorage.getItem("UID")
        console.log("InstallRegistered")
        if(id != null){
            citizenServices.updateCitizen(id,firstName,lastName)
        }
        else{
            console.log("UID was null couldn't update")
        }
        
        installPrompt.userChoice.then((e) =>{
            setShowInstall(false)
        })
    }

    if(showRegister){
        return(
                <div id="register-form">
                    <form onSubmit={installRegistered}>
                        <div>
                            <label htmlFor="FirstNameInput">First name : </label>
                            <input id="FirstNameInput" type="text" value={firstName} onChange={onChangeFN}/>
                        </div>
                        <div>
                            <label htmlFor="LastNameInput">Last name : </label>
                            <input id="LastNameInput" type="text" value={lastName} onChange={onChangeLN}/>
                        </div>
                        <input type="submit" value="Register"/>
                    </form>
                    <button value="Continue anonymously" onClick={installAnonymous}>Continue anonymously</button>
                </div>
            )
    }
    else{
        return(
            <div>
                <button onClick={install}>Install the application</button>
                <button onClick={cancel}>Continue to web app</button>
            </div>
        )
    }
}

export default InstallApp