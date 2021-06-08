import axios from "./axios/axios"

export default class JobAdvertisementService{
getAll(){
    return axios.get("/jobAdvertisment/getallAd")  
  
  }
}