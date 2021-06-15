import axios from './axios/axios'

export default class wayOfWorkingService {
    getAllWayOfWorkings (){
        return axios.get("/wayofworkings/getall")
    }
}
