import { combineReducers } from '@reduxjs/toolkit'
import authReducer from "./slice/auth";
import messageReducer from "./slice/message";
import cartReducer  from './slice/cart';


const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    cart: cartReducer
    
}
)
export default rootReducer