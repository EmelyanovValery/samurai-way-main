import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    store:ReduxStoreType
    // postsData: postsDataType
    // newPostData: string
    // dispatch: (action: ActionsType) => void
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state=props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostAC())

    }
    const updateNewPost = (text: string) => {
        props.store.dispatch(updateNewPostAC(text))

    }

    return <MyPosts postsData={state.profilePage.postsData} newPostData={state.profilePage.newPostData} updateNewPost={updateNewPost}
                    addPost={addPost}/>;
};

export default MyPostsContainer;