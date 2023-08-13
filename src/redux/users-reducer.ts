import {usersApi} from "../api/api";
import {AppThunk} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
const SET_FETCHING = "SET-FETCHING"
const SET_FOLLOWING_PROGRESS = "SET-FOLLOWING-PROGRESS"
const DEL_FOLLOWING_PROGRESS = "DEL-FOLLOWING-PROGRESS"

type photosType = {
    small: string
    large: string
}
export type userPageType = {
    id: number
    name: string
    photos: photosType
    status: string
    followed: boolean
}
export type usersPageType = {
    users: userPageType[]
    countUserOnPage: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

let initialState: usersPageType = {
    users: [
        // {
        //     idUser: v1(),
        //     followed: true,
        //     avatarDate: "https://cs6.pikabu.ru/avatars/372/v372297.jpg?1142150410",
        //     dataName: {
        //         name: "Petr",
        //         lastName: "Sidorov",
        //     },
        //     address: {
        //         county: "Russia",
        //         city: "Ufa"
        //     },
        //     status: "HI"
        // },
        // {
        //     idUser: v1(),
        //     followed: true,
        //     avatarDate: "https://cs6.pikabu.ru/avatars/372/v372297.jpg?1142150410",
        //     dataName: {
        //         name: "Vasya",
        //         lastName: "Petrov",
        //     },
        //     address: {
        //         county: "Russia",
        //         city: "Kazan"
        //     },
        //     status: "YO"
        // },
        // {
        //     idUser: v1(),
        //     followed: false,
        //     avatarDate: "https://cs6.pikabu.ru/avatars/372/v372297.jpg?1142150410",
        //     dataName: {
        //         name: "Ivan",
        //         lastName: "Ivanov",
        //     },
        //     address: {
        //         county: "Russia",
        //         city: "Moscow"
        //     },
        //     status: "Good morning"
        // }
    ],
    countUserOnPage: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

export type UsersActionsType =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | setFetchingACType
    | setFollowingProgressType
    |
    delFollowingProgressType
export const usersReducer = (state: usersPageType = initialState, action: UsersActionsType): usersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: true} : user)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: false} : user)
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.payload.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.payload.totalCount}
        }
        case SET_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case SET_FOLLOWING_PROGRESS: {
            return {...state, followingProgress: [...state.followingProgress, action.payload.userID]}
        }
        case DEL_FOLLOWING_PROGRESS: {
            return {...state, followingProgress: state.followingProgress.filter(id => id !== action.payload.userID)}
        }
        default:
            return state
    }
}
type followACType = ReturnType<typeof follow>
export const follow = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            id
        }
    } as const
}
type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            id
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: userPageType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}

type setTotalCountACType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    } as const
}

type setFetchingACType = ReturnType<typeof setFetching>
export const setFetching = (isFetching: boolean) => {
    return {
        type: SET_FETCHING,
        payload: {
            isFetching
        }
    } as const
}

type setFollowingProgressType = ReturnType<typeof setFollowingProgress>
export const setFollowingProgress = (userID: number) => {
    return {
        type: SET_FOLLOWING_PROGRESS,
        payload: {
            userID
        }
    } as const
}

type delFollowingProgressType = ReturnType<typeof delFollowingProgress>
export const delFollowingProgress = (userID: number) => {
    return {
        type: DEL_FOLLOWING_PROGRESS,
        payload: {
            userID
        }
    } as const
}

export const getUserTC = (countUserOnPage: number): AppThunk => async (dispatch) => {
    dispatch(setFetching(true))

    const res = await usersApi.getUsers(countUserOnPage)
    dispatch(setUsers(res.items))
    dispatch(setTotalCount(res.totalCount))
    dispatch(setFetching(false))

}