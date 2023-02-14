import {ActionAddPostType, ActionsType, ActionUpdateNewPostType, profilePageType} from "./state";
import {v1} from "uuid";

const UPDATE_NEW_POST = "UPDATE-NEW-POST"
const ADD_POST = "ADD-POST"

export const profileReducer = (state:profilePageType, action:ActionsType):profilePageType => {
    switch (action.type) {
        case ADD_POST:
            state.postsData.unshift(
                {id: v1(), massage: state.newPostData, likeCount: 0})
            state.newPostData = ""
            return state
        case UPDATE_NEW_POST:
            state.newPostData = action.newText
            return state
        default: return state
    }
}
export const updateNewPostAC = (newText: string): ActionUpdateNewPostType => ({
    type: UPDATE_NEW_POST,
    newText: newText
})
export const addPostAC = (): ActionAddPostType => ({type: ADD_POST})