import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteRedurcers";


const rootReducer =combineReducers({
    favorite:favoriteReducer
})

export default rootReducer;