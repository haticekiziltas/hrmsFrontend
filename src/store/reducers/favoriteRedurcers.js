  
import { ADD_TO_FAVORİTE, REMOVE_FROM_FAVORİTE} from "../actions/favoriteActions";
import { favoriteItems } from "../initialValues/favoriteItems";

const initialState = {
    favoriteItems: favoriteItems
}

export default function favoriteReducer(state= initialState, {type,payload}) {
    switch (type) {
        case ADD_TO_FAVORİTE:
            let jobAdvertisement = state.favoriteItems.find(c=> c.jobAdvertisement.id===payload.id)
            if (jobAdvertisement) {
                jobAdvertisement.quantitiy++;
                return{
                    ...state
                }
            }else{
            return{
              ...state, //birden fazla ürünü ayırır
              favoriteItems:[...state.favoriteItems,{quantitiy:1, product:payload}]
            } 
            }
            
          case REMOVE_FROM_FAVORİTE:
              return{
                  ...state,
                  favoriteItems:state.favoriteItems.filter(c=>c.jobAdvertisement.id!==payload.id)
              }
    
        default:
            return state;
            
    }
}