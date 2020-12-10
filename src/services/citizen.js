import axios from 'axios'
const baseURL = "https://pfe-backend-prod.azurewebsites.net/api"

const getCitizen = (id) => {
  const request = axios.get(baseURL+`/Citizens/${id}`)
  return request.then(response => {
    return response.data
  })
}


const register = (token) => {
    const sentObject = {
        First_name : null,
        Last_name : null,
        tokenFirebase : token,
        Is_Positive : false
      }
    const request = axios.post(baseURL+"/Citizens/register",sentObject)
    return request.then(response => {return response.data})
}

const login = (token,id) => {
    const sentObject = {
        citizenID : id,
        First_name : null,
        Last_name : null,
        tokenFirebase : token,
        Is_Positive : false
      }
      const request = axios.post(baseURL+"/Citizens/login",sentObject)
    return request.then(response => {return response.data})
}

const postQrCode = (qrId,id) => {
    const sentObject = {
        qrCode: qrId,
        citizen:id
      }
      console.log("QrCode sended",sentObject)
      const request = axios.post(baseURL+"/QrCodes/scanQrCode",sentObject)
    return request.then(response => {return response})
}

const updateCitizen = (id,fn,ln) => {
  const sentObject = {
    citizenID : id,
    First_name : fn,
    Last_name : ln,
    tokenFirebase : null,
    Is_Positive : false
  }
  const request = axios.put(baseURL+"/Citizens",sentObject)
  return request.then(response => {return response})
}

export default {
    register,
    login,
    postQrCode,
    updateCitizen,
    getCitizen
}