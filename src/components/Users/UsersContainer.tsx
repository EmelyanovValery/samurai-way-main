import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setFetchingAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    userPageType,
    usersPageType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";


import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

type UsersPropsType = {
    usersPageData: usersPageType
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (state: userPageType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPageData.countUserOnPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            this.props.setFetching(false)
        })
    }

    onClickChangeCurrentPage = (currentPage: number) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersPageData.countUserOnPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setFetching(false)
        })

    }

    render() {
        return <>
            {this.props.usersPageData.isFetching && <Preloader/>}
            <Users totalCount={this.props.usersPageData.totalCount}
                   countUserOnPage={this.props.usersPageData.countUserOnPage}
                   currentPage={this.props.usersPageData.currentPage}
                   users={this.props.usersPageData.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onClickChangeCurrentPage={this.onClickChangeCurrentPage}/>
        </>;
    }
}

const mapStateToProps = (state: AppStateType): { usersPageData: usersPageType } => {
    return {
        usersPageData: state.usersPage
    }
}
type mapDispatchToPropsReturnType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (state: userPageType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsReturnType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: userPageType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setFetching: (isFetching: boolean) => {
            dispatch(setFetchingAC(isFetching))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer;