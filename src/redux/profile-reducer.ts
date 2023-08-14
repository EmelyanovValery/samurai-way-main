import {v1} from "uuid";
import {AppThunk} from "./redux-store";
import {profileAPI} from "../api/api";

const UPDATE_NEW_POST = "UPDATE-NEW-POST"
const ADD_POST = "ADD-POST"
const SET_STATE = "SET-STATE"

type postDataType = {
    id: string, massage: string, likeCount: number
}
export type postsDataType = Array<postDataType>
type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type photosType = {
    small: string
    large: string
}
export type profileDateType = null | {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosType
}
export type profilePageType = {
    postsData: postsDataType
    newPostData: string
    profileDate: profileDateType
}

let initialState: profilePageType = {
    postsData: [
        {id: v1(), massage: "Hi", likeCount: 2},
        {id: v1(), massage: "No", likeCount: 1},
        {id: v1(), massage: "vdvfsdfv", likeCount: 0},
    ],
    newPostData: "Yod!",
    profileDate: null
}


export type ProfileActionsType =
    ActionAddPostType
    | ActionUpdateNewPostType
    | ActionAddMessageType
    | ActionUpdateNewMessageType
    | setStateACType
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
export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsType): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            // state.postsData.unshift(
            //     {id: v1(), massage: state.newPostData, likeCount: 0})
            // state.newPostData = ""
            return {
                ...state,
                postsData: [{id: v1(), massage: state.newPostData, likeCount: 0}, ...state.postsData],
                newPostData: ""
            }
        case UPDATE_NEW_POST:
            // state.newPostData = action.newText
            return {...state, newPostData: action.newText}
        case SET_STATE: {
            return {...state, profileDate: action.payload.newState}
        }
        default:
            return state
    }
}
export const updateNewPost = (newText: string): ActionUpdateNewPostType => ({
    type: UPDATE_NEW_POST,
    newText: newText
})
export const addPost = (): ActionAddPostType => ({type: ADD_POST})

type setStateACType = ReturnType<typeof setState>
export const setState = (newState: profileDateType) => {
    return {
        type: SET_STATE,
        payload: {
            newState
        }
    } as const
}
export const getProfileTC = (userId: string): AppThunk => (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
            dispatch(setState(data))
        }
    )
}