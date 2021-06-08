import axios from "./axios/axios" 

export default class EmployeeService{
 getAll() {
     return axios.get("/employees/getAll")
 }
}