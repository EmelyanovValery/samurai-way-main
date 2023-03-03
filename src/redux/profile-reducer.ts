import {ActionAddPostType, ActionsType, ActionUpdateNewPostType} from "./store";
import {v1} from "uuid";

const UPDATE_NEW_POST = "UPDATE-NEW-POST"
const ADD_POST = "ADD-POST"

type postDataType = {
    id: string, massage: string, likeCount: number
}
export type postsDataType = Array<postDataType>
export type profilePageType = {
    postsData: postsDataType
    newPostData: string
}

let initialState:profilePageType={
    postsData: [
        {id: v1(), massage: "Hi", likeCount: 2},
        {id: v1(), massage: "No", likeCount: 1},
        {id: v1(), massage: "vdvfsdfv", likeCount: 0},
    ],
        newPostData: "Yod!"
}


export const profileReducer = (state:profilePageType=initialState, action:ActionsType):profilePageType => {
    switch (action.type) {
        case ADD_POST:
            // state.postsData.unshift(
            //     {id: v1(), massage: state.newPostData, likeCount: 0})
            // state.newPostData = ""
            return {...state,postsData:[{id: v1(), massage: state.newPostData, likeCount: 0},...state.postsData],newPostData:""}
        case UPDATE_NEW_POST:
            // state.newPostData = action.newText
            return {...state,newPostData:action.newText}
        default: return state
    }
}
export const updateNewPostAC = (newText: string): ActionUpdateNewPostType => ({
    type: UPDATE_NEW_POST,
    newText: newText
})
export const addPostAC = (): ActionAddPostType => ({type: ADD_POST})