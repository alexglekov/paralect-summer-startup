import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import reposReducer from "./reposReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "./profileReducer";
import nickReducer from "./nickReducer";
import fetchReducer from "./loaderReducer";

const rootReducer = combineReducers({
    repos: reposReducer,
    profile: profileReducer,
    nick: nickReducer,
    fetch: fetchReducer
})

 export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))