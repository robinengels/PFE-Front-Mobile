import React from 'react'
import './App.css'
import Title from 'components/Title/Title'
import QrReader from 'react-qr-reader'
import Button from 'components/Button/Button'
import CitizenInfo from 'components/CitizenInfo/CitizenInfo'
import Notification from 'components/Notification/Notification'
import RegisterCitizenInfo from 'components/RegisterCitizenInfo/RegisterCitizenInfo'

const App = ({handleScan,handleError,citizenInfo,setScanning,isScanning,notif}) => {
  console.log("Notif",notif)
  if(isScanning){
  return (
    <div>
        <Title title="BlockCovid"/>
        
        <div id="QrReader">
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            resolution={1000}
            style={{ width: '100%' }}
        />
        </div>

    </div>
  );
  }
  else{
    return(
        <div>
        <Title title="BlockCovid"/>
        <Notification text={notif}/>
        <Button text="Scan a Code" onClick={() => setScanning(true)}/>
        <CitizenInfo info={citizenInfo}/>
        <RegisterCitizenInfo/>
        </div>
    )
  }
}

export default App;