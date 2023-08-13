import {v1} from "uuid";
import {ActionAddMessageType, ProfileActionsType, ActionUpdateNewMessageType} from "./profile-reducer";

const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

type dialogDataType = {
    id: string
    name: string
}
export type dialogsDataType = Array<dialogDataType>
type messageDataType = {
    id: string
    message: string
}
export type messagesDataType = Array<messageDataType>
export type messagesPagesType = {
    dialogsData: dialogsDataType
    messagesData: messagesDataType
    newMessageData: string
}
let initialState={
    dialogsData: [
        {id: v1(), name: "Misha"},
        {id: v1(), name: "Anton"},
        {id: v1(), name: "Igor"},
        {id: v1(), name: "Nasty"},
        {id: v1(), name: "Lesha"},
        {id: v1(), name: "Kolya"},
    ],
    messagesData: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Hello"},
        {id: v1(), message: "Bye bye"},
    ],
    newMessageData: "Hi"
}

export const dialogsReducer = (state:messagesPagesType=initialState, action:ProfileActionsType):messagesPagesType => {
    switch (action.type) {
        case ADD_MESSAGE:
            // state.messagesData.push({id: v1(), message: state.newMessageData})
            // state.newMessageData = ""
            return {...state,messagesData:[...state.messagesData,{id: v1(), message: state.newMessageData}],newMessageData:"" }
        case UPDATE_NEW_MESSAGE:
            // state.newMessageData = action.newMessage
            return {...state,newMessageData:action.newMessage}
        default: return state
    }
}
export const updateNewMessageAC = (newMessage: string): ActionUpdateNewMessageType => {
    return {type: UPDATE_NEW_MESSAGE, newMessage: newMessage}
}
export const addMessageAC = (): ActionAddMessageType => ({type: ADD_MESSAGE})