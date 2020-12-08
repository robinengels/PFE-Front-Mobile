import React, { useState } from 'react'
import './RegisterCitizenInfo.css'

const RegisterCitizenInfo = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")

    const onChangeFN = (e) => {
        setFirstName(e.target.value)
    }

    const onChangeLN = (e) => {
        setLastName(e.target.value)
    }

    return(
        <div id="register-form">
            <form>
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
        </div>
    )
}

export default RegisterCitizenInfo