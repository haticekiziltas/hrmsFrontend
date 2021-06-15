import axios from './axios/axios'

export default class workingTimeService {
    getAllWorkingsTime(){
        return axios.get("/workingstime/getall")
    }
}
