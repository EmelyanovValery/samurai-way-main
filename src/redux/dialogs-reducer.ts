import {ActionAddMessageType, ActionsType, ActionUpdateNewMessageType, messagesPagesType} from "./state";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

export const dialogsReducer = (state:messagesPagesType, action:ActionsType):messagesPagesType => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messagesData.push({id: v1(), message: state.newMessageData})
            state.newMessageData = ""
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessageData = action.newMessage
            return state
        default: return state
    }
}
export const updateNewMessageAC = (newMessage: string): ActionUpdateNewMessageType => {
    return {type: UPDATE_NEW_MESSAGE, newMessage: newMessage}
}
export const addMessageAC = (): ActionAddMessageType => ({type: ADD_MESSAGE})