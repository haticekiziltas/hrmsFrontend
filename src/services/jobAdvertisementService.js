import axios from './axios/axios'

export default class jobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("/jobAdvertisment/getActive")
    };

    jobAdvertisementadd(values) {
        return axios.post("/jobAdvertisment/addAd",values)
    };

    getAllPassiveJobAdvertisements() {
        return axios.get("/jobAdvertisment/getAllPassive")
    };
    getAllUpdateActiveJobAdvertisements(id, active) {
        return axios.put("/jobAdvertisment/updateActive?active=" +active +"&id=" +id)
    };
}


