import axios from "./axios/axios" 

export default class EmployerService{
 getEmployers() {
     return axios.get("/employers/getall")
 }
}