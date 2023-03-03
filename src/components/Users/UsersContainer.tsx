import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, userPageType, usersPageType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

const mapStateToProps = (state:AppStateType):{usersPageData:usersPageType} => {
    return{
        usersPageData:state.usersPage
    }
}
type mapDispatchToPropsReturnType={
    follow:(id:number)=>void,
    unfollow:(id:number)=>void
    setUsers:(state:userPageType[])=>void
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsReturnType => {
    return{
        follow:(id:number)=>{dispatch(followAC(id))},
        unfollow:(id:number)=>{dispatch(unfollowAC(id))},
            setUsers:(users:userPageType[])=>{dispatch(setUsersAC(users))}
    }
}

const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;