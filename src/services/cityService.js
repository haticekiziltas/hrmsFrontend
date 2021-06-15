import axios from './axios/axios'


export default class cityService {

    getAll() {
        return axios.get("/cities/getall")
    }

}