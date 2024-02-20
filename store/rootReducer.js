import { combineReducers } from "redux";

import contactReducer from "store/about/reducer";


const rootReducer = combineReducers({
    contact:contactReducer,
});

export default rootReducer;
