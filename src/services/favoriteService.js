import axios from './axios/axios'

export default class favoriteService {
    getFavorites() {
        return axios.get("/favorites/getall")
    };

    getAllByFavoriteById(values) {
        return axios.post("/favorites/getAllByFavoriteById?id=",values)
    };

    
}
