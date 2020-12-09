import React from 'react'
import './App.css'
import Title from 'components/Title/Title'
import QrReader from 'react-qr-reader'
import MaterialButton from 'components/MaterialButton/MaterialButton'
import CitizenInfo from 'components/CitizenInfo/CitizenInfo'
import Notification from 'components/Notification/Notification'
import ButtonContainer from 'components/ButtonContainer/ButtonContainer'

const App = ({handleScan,handleError,citizenInfo,setScanning,isScanning,notif}) => {
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
        <MaterialButton text="Annuler" onClick={() => setScanning(false)}/>
    </div>
  );
  }
  else{
    return(
      <div className="container">
        <div className="centerContainer">
          <Title title="BlockCovid"/>
          <Notification text={notif}/>
          <ButtonContainer text="Scanner un QrCode" setScanning={setScanning}/>
          <CitizenInfo info={citizenInfo}/>
        </div>
      </div>
    )
  }
}

export default App;