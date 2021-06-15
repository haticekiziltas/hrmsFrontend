import axios from './axios/axios'

export default class jobPositionService {
    getAllPositions() {
        return axios.get("/getall")
    }
  

}
