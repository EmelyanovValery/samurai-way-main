import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../StoreContext";

type MyPostsContainerPropsType = {
    //store:ReduxStoreType
    // postsData: postsDataType
    // newPostData: string
    // dispatch: (action: ActionsType) => void
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            const addPost = () => {
                store.dispatch(addPostAC())

            }
            const updateNewPost = (text: string) => {
                store.dispatch(updateNewPostAC(text))

            }
            return <MyPosts postsData={state.profilePage.postsData} newPostData={state.profilePage.newPostData}
                            updateNewPost={updateNewPost}
                            addPost={addPost}/>
        }}
    </StoreContext.Consumer>
        ;
};

export default MyPostsContainer;