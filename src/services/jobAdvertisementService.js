import axios from './axios/axios'

export default class jobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("/jobAdvertisement/getActive")
    };

    jobAdvertisementadd(values) {
        return axios.post("/jobAdvertisement/addAd",values)
    };

    getAllPassiveJobAdvertisements() {
        return axios.get("/jobAdvertisement/getAllPassive")
    };
    getAllUpdateActiveJobAdvertisements(id, active) {
        return axios.put("/jobAdvertisement/updateActive?active=" +active +"&id=" +id)
    };

    getPageable(pageNo,pageSize) {
        return axios.get("/jobAdvertisement/getAllByPage?pageNo="+pageNo+"&pageSize="+pageSize)
    };
}


