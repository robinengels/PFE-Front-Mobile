import React from 'react'
import './Notification.css'

const Notification = ({text}) => {
    return(
        <div className="notification">
            <p>{text}</p>
        </div>
    )
}

export default Notification