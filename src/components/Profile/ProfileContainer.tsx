import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addPost, profileDateType, profilePageType, setState, updateNewPost} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((  response)=>{
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
const ProfileContainerURL=withRouter(ProfileContainerAPI)
export const ProfileContainer =  connect(mapStateToProps, {
    updateNewPost: updateNewPost,
    setState:setState,
    addPost:addPost
}) (ProfileContainerURL);