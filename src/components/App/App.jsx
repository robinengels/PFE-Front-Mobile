import React from 'react'
import QrReader from 'react-qr-reader'

const App = ({handleScan,handleError,result}) {

  return (
    <div>
      <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
    </div>
  );
}

export default App;