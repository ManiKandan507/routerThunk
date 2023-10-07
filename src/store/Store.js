import { applyMiddleware, combineReducers,createStore } from "redux";
import {SignupReducer} from "../reducers/SignupReducer";
import { LoginReducer } from "../reducers/LoginReducer";
import {UserReducer} from "../reducers/UserReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    signup : SignupReducer,
    login : LoginReducer,
    users: UserReducer
});
export const store = createStore(RootReducer,applyMiddleware(thunk));