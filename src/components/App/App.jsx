import React, { useContext } from 'react'
import './App.css'
import Title from 'components/Title/Title'
import MaterialButton from 'components/MaterialButton/MaterialButton'
import CitizenInfo from 'components/CitizenInfo/CitizenInfo'
import Notification from 'components/Notification/Notification'
import ButtonContainer from 'components/ButtonContainer/ButtonContainer'
import AppContext from 'contexts/AppContext'
import QrReaderContainer from 'components/QrReaderContainer/QrReaderContainer'

const App = () => {

  const {isScanning,setScanning,notification} = useContext(AppContext)
  const text = "Scanner un QrCode à chaque fois que vous rentrez dans un établissement."

  if(isScanning){
  return (
    <div>
        <Title title="BlockCovid"/>
        <QrReaderContainer/>
        <MaterialButton text="Annuler" onClick={() => setScanning(false)}/>
    </div>
  );
  }
  else{
    return(
      <div className="container">
        <div className="centerContainer">
          <Title title="BlockCovid"/>
          <Notification text={notification}/>
          <ButtonContainer text={text} buttonText="Scanner un QrCode" onClick={() => setScanning(true)}/>
          <CitizenInfo/>
        </div>
      </div>
    )
  }
}

export default App;