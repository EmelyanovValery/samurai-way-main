import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";
import {postsDataType, profilePageType} from "../../redux/profile-reducer";
import {messagesPagesType} from "../../redux/dialogs-reducer";

type ProfilePropsType={
    // store:ReduxStoreType
    // profilePageData:profilePageType
    // newPostData:string
    // dispatch: (action: ActionsType) => void
    // addPost:()=>void
    // updateNewPost:(text:string)=>void
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                //store={props.store}
                // postsData={props.profilePageData.postsData}  newPostData={props.newPostData}
                //      dispatch={props.dispatch}
                     //addPost={props.addPost} updateNewPost={props.updateNewPost}
            />
        </div>
    );
};

export default Profile;