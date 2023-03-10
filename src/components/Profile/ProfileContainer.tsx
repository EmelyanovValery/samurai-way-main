import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addPost, profileDateType, profilePageType, setState, updateNewPost} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

export type ProfileContainerPropsType={
    profilePage:profilePageType
    updateNewPost:(newText: string)=>void
    setState:(newState:profileDateType)=>void
    addPost:()=>void
}

class ProfileContainerAPI extends React.Component<RouteComponentProps<{userId:string}> & ProfileContainerPropsType, any>{

    componentDidMount() {
        let  userId=this.props.match.params.userId
        if(!userId){
            userId="2"
        }
        profileAPI.getProfile(userId).then((  data)=>{
            this.props.setState(data)}
        )
    }
    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToProps = (state:AppStateType):{profilePage:profilePageType} => {
  return {
      profilePage:state.profilePage
  }
}
const ProfileContainerURL=withRouter(ProfileContainerAPI)
export const ProfileContainer =  connect(mapStateToProps, {
    updateNewPost: updateNewPost,
    setState:setState,
    addPost:addPost
}) (ProfileContainerURL);