import React, { useContext } from 'react'
import QrReader from 'react-qr-reader'
import AppContext from 'contexts/AppContext'
import citizenServices from 'services/citizen'

const QrReaderContainer = () => {

    const {setScanning,setNotification,updateCitizenInfo} = useContext(AppContext)
    const storage = window.localStorage

    const handleError = (error) => {
        console.error(error)
      }
    
      const handleScan = (data) => {
        if(data){
          console.log("Handle scan",data)
          setScanning(false)
          citizenServices.postQrCode(data,storage.getItem("UID")).then(()=>{
            setNotification("QrCode was correctly scanned and registered !")
            setTimeout(()=>{ setNotification("")},10000)
          }).then( () => {updateCitizenInfo()}
          )
        }
      }

    return(
        <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        resolution={1000}
        style={{ width: '100%' }}
    />
    )
}

export default QrReaderContainer