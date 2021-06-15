import axios from "./axios/axios" 

export default class EmployeeService{
 getEmployees() {
     return axios.get("/employees/getAll")
 }
}