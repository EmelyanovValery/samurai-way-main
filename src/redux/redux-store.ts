import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers=combineReducers({
    auth:authReducer,
    messagesPages:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
})

export type AppStateType=ReturnType<typeof reducers>
export type ReduxStoreType=typeof store
export const store=createStore(reducers)