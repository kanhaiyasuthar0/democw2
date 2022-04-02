import { combineReducers, createStore } from "redux";
import { reducer } from "./kanhaiya/reducer";
import { reducerCount } from "./Laxmi/reducer";
const routeReducer = combineReducers({count:reducerCount,todo:reducer})
// import { reducer } from "./reducer";

export const store = createStore(routeReducer)