import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsType, messagesPagesType, postsDataType, profilePageType} from "../../redux/state";

type ProfilePropsType={
    profilePageData:profilePageType
    newPostData:string
    dispatch: (action: ActionsType) => void
    // addPost:()=>void
    // updateNewPost:(text:string)=>void
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePageData.postsData}  newPostData={props.newPostData}
                     dispatch={props.dispatch}
                     //addPost={props.addPost} updateNewPost={props.updateNewPost}
            />
        </div>
    );
};

export default Profile;