import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

let reducers=combineReducers({
    messagesPages:dialogsReducer,
    profilePage:profileReducer
})
export type ReduxStoreType=typeof store
export const store=createStore(reducers)