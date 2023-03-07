import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addPost, profileDateType, profilePageType, setState, updateNewPost} from "../../redux/profile-reducer";

export type ProfileContainerPropsType={
    profilePage:profilePageType
    updateNewPost:(newText: string)=>void
    setState:(newState:profileDateType)=>void
    addPost:()=>void
}

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType, any>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then((  response)=>{
            this.props.setState(response.data)}
        )
    }
    render() {
        return <Profile {...this.props}/>;
    }
};

const mapStateToProps = (state:AppStateType):{profilePage:profilePageType} => {
  return {
      profilePage:state.profilePage
  }
}

export const ProfileContainer =  connect(mapStateToProps, {
    updateNewPost: updateNewPost,
    setState:setState,
    addPost:addPost
}) (ProfileContainerAPI);