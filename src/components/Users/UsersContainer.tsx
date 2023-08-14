import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    delFollowingProgress,
    follow, followTC, getUserTC,
    setCurrentPage, setFetching, setFollowingProgress, setTotalCount,
    setUsers,
    unfollow, unFollowTC,
    userPageType,
    usersPageType
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../../api/api";

type UsersPropsType = {
    usersPageData: usersPageType
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (state: userPageType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void
    setFollowingProgress: (userId: number) => void
    delFollowingProgress: (userId: number) => void
    getUserTC: (countUserOnPage: number) => void
    unFollowTC: (userId: number) => void
    followTC: (userId: number) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserTC(this.props.usersPageData.countUserOnPage)
        // this.props.setFetching(true)
        // usersApi.getUsers(this.props.usersPageData.countUserOnPage).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.setTotalCount(data.totalCount)
        //     this.props.setFetching(false)
        // })
    }

    onClickChangeCurrentPage = (currentPage: number) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(currentPage)
        usersApi.getUsers(this.props.usersPageData.countUserOnPage, currentPage).then(data => {

            this.props.setUsers(data.items)
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
                   onClickChangeCurrentPage={this.onClickChangeCurrentPage}
                   followingProgress={this.props.usersPageData.followingProgress}
                   followTC={this.props.followTC}
                   unFollowTC={this.props.unFollowTC}/>
        </>;
    }
}

const mapStateToProps = (state: AppStateType): { usersPageData: usersPageType } => {
    return {
        usersPageData: state.usersPage
    }
}
// type mapDispatchToPropsReturnType = {
//     follow: (id: number) => void,
//     unfollow: (id: number) => void
//     setUsers: (state: userPageType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalCount: (totalCount: number) => void
//     setFetching: (isFetching: boolean) => void
// }
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsReturnType => {
//     return {
//         follow: (id: number) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id: number) => {
//             dispatch(unfollowAC(id))
//         },
//         setUsers: (users: userPageType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setFetching: (isFetching: boolean) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setFetching,
    setFollowingProgress,
    delFollowingProgress,
    getUserTC,
    followTC,
    unFollowTC
})(UsersAPIContainer)

export default UsersContainer;