
import axios from "./axios/axios" 

export default class EmployerService{
 getAll() {
     return axios.get("/employers/getall")
 }
}