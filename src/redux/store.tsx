import {v1} from "uuid";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

// let onChange=(state:stateType)=>{}

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
type postDataType = {
    id: string, massage: string, likeCount: number
}
export type postsDataType = Array<postDataType>
export type profilePageType = {
    postsData: postsDataType
    newPostData: string
}
export type messagesPagesType = {
    dialogsData: dialogsDataType
    messagesData: messagesDataType
    newMessageData: string
}
export type stateType = {
    profilePage: profilePageType
    messagesPages: messagesPagesType
}
export type StoreType = {
    _state: stateType
    getState: () => stateType
    // addPost: () => void
    // updateNewPost: (newText: string) => void
    // addMessage: () => void
    // updateNewMessage: (newMessage: string) => void
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ActionAddPostType
    | ActionUpdateNewPostType
    | ActionAddMessageType
    | ActionUpdateNewMessageType

export type ActionAddPostType = {
    type: "ADD-POST"
}
export type ActionUpdateNewPostType = {
    type: "UPDATE-NEW-POST"
    newText: string
}
export type ActionAddMessageType = {
    type: "ADD-MESSAGE"
}
export type ActionUpdateNewMessageType = {
    type: "UPDATE-NEW-MESSAGE"
    newMessage: string
}

export let store: StoreType = {
    _state: {
        messagesPages: {
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
        },
        profilePage: {
            postsData: [
                {id: v1(), massage: "Hi", likeCount: 2},
                {id: v1(), massage: "No", likeCount: 1},
                {id: v1(), massage: "vdvfsdfv", likeCount: 0},
            ],
            newPostData: "Yo!"
        }
    },
    _callSubscriber(state: stateType) {
    },
    getState() {
        return this._state
    },
    // addPost() {
    //     this._state.profilePage.postsData.unshift(
    //         {id: v1(), massage: this._state.profilePage.newPostData, likeCount: 0})
    //     this._state.profilePage.newPostData = ""
    //     this._onChange(this._state)
    // },
    // updateNewPost(newText: string) {
    //     this._state.profilePage.newPostData = newText
    //     this._onChange(this._state)
    // },
    // addMessage() {
    //     this._state.messagesPages.messagesData.push({id: v1(), message: this._state.messagesPages.newMessageData})
    //     this._state.messagesPages.newMessageData = ""
    //     this._onChange(this._state)
    // },
    // updateNewMessage(newMessage: string) {
    //     this._state.messagesPages.newMessageData = newMessage
    //     this._onChange(this._state)
    // },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        // if (action.type === ADD_POST) {
        //
        //     this._state.profilePage.postsData.unshift(
        //         {id: v1(), massage: this._state.profilePage.newPostData, likeCount: 0})
        //     this._state.profilePage.newPostData = ""
        //     this._onChange(this._state)
        // }
        // else if (action.type === UPDATE_NEW_POST) {
        //     this._state.profilePage.newPostData = action.newText
        //     this._onChange(this._state)
        // }
        // else if (action.type == ADD_MESSAGE) {
        //     this._state.messagesPages.messagesData.push({id: v1(), message: this._state.messagesPages.newMessageData})
        //     this._state.messagesPages.newMessageData = ""
        //     this._onChange(this._state)
        // }
        // else if (action.type === UPDATE_NEW_MESSAGE) {
        //     this._state.messagesPages.newMessageData = action.newMessage
        //     this._onChange(this._state)
        //
        store._state.messagesPages=dialogsReducer(store._state.messagesPages,action)
        store._state.profilePage=profileReducer(store._state.profilePage,action)
        this._callSubscriber(this._state)
    }
}

// export const state:stateType={
//     messagesPages:{
//         dialogsData:[
//             {id: v1(), name: "Misha"},
//             {id: v1(), name: "Anton"},
//             {id: v1(), name: "Igor"},
//             {id: v1(), name: "Nasty"},
//             {id: v1(), name: "Lesha"},
//             {id: v1(), name: "Kolya"},
//         ],
//         messagesData:[
//             {id: v1(), message: "Hi"},
//             {id: v1(), message: "Hello"},
//             {id: v1(), message: "Bye bye"},
//         ],
//         newMessageData:"Hi"
//     },
//     profilePage:{
//         postsData:[
//             {id: v1(), massage: "Hi", likeCount: 2},
//             {id: v1(), massage: "No", likeCount: 1},
//             {id: v1(), massage: "vdvfsdfv", likeCount: 0},
//         ],
//         newPostData:"Yo!"
//     }
// }

// export const addPost = () => {
//   state.profilePage.postsData.unshift({id:v1(), massage: state.profilePage.newPostData, likeCount: 0})
//     state.profilePage.newPostData=""
//     rerenderEntireTree(state)
// }

// export const updateNewPost = (newText:string) => {
//     state.profilePage.newPostData=newText
//     rerenderEntireTree(state)
// }

// export const addMessage = () => {
//     state.messagesPages.messagesData.push( {id: v1(), message: state.messagesPages.newMessageData})
//     state.messagesPages.newMessageData=""
//     rerenderEntireTree(state)
// }

// export const updateNewMessage = (newMessage:string) => {
//     state.messagesPages.newMessageData =newMessage
//     rerenderEntireTree(state)
// }

// export const subscriber = (observer:(state:stateType)=>void) => {
//     onChange=observer;
// }