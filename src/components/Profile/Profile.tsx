import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {ReduxStoreType} from "../../redux/redux-store";
import {ActionsType, postsDataType, profilePageType} from "../../redux/profile-reducer";
import {messagesPagesType} from "../../redux/dialogs-reducer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType=ProfileContainerPropsType
const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profileDate={props.profilePage.profileDate} />
            <MyPosts addPost={props.addPost}
                     postsData={props.profilePage.postsData}
                     newPostData={props.profilePage.newPostData}
                     updateNewPost={props.updateNewPost}
                //store={props.store}
                // postsData={props.profilePageData.postsData}  newPostData={props.newPostData}
                //      dispatch={props.dispatch}
                     //addPost={props.addPost} updateNewPost={props.updateNewPost}
            />
        </div>
    );
};

export default Profile;