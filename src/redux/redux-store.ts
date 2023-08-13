import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {ActionAuthReducerType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {stateType} from "./store";

let reducers=combineReducers({
    auth:authReducer,
    messagesPages:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
})

export type AppStateType=ReturnType<typeof reducers>
export type ReduxStoreType=typeof store
export const store=createStore(reducers,applyMiddleware(thunk))
export type ActionAppType=ActionAuthReducerType |ProfileActionsType|UsersActionsType
export type AppThunk=ThunkAction<void,AppStateType , any, ActionAppType>