import axios from 'axios'
const baseURL = "https://pfe-backend-dev.azurewebsites.net/api"

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

export default {
    register,
    login,
    postQrCode
}