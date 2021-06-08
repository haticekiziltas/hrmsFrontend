import axios from "./axios/axios" 

export default class CvService{
 getAll() {
     return axios.get("/cvs/getall")
 }
}