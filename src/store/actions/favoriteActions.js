export const ADD_TO_FAVORİTE = "ADD_TO_FAVORİTE" 
export const REMOVE_FROM_FAVORİTE= "REMOVE_FROM_FAVORİTE"

export function addTofavorite(jobAdvertisement){
    return{
        type: ADD_TO_FAVORİTE,
        payload: jobAdvertisement
    }
}

 export function removeFromFavorite(jobAdvertisement){
        return{
            type: REMOVE_FROM_FAVORİTE,
            payload: jobAdvertisement
        }
}