import { createStore } from "redux";
import { reducer } from "./kanhaiya/reducer";
// import { reducer } from "./reducer";

export const store = createStore(reducer)