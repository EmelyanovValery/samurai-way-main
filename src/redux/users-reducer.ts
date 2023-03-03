import {v1} from "uuid";
import users from "../components/Users/Users";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS="SET-USERS"

type photosType = {
    small: string
    large: string
}
export type userPageType = {
    id: number
    name: string
    photos:photosType
    status: string
    followed: boolean
}
export type usersPageType = {
    users: userPageType[]
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
    ]
}

type ActionsType = followACType | unfollowACType| setUsersACType
export const usersReducer = (state: usersPageType = initialState, action: ActionsType): usersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users:state.users.map(user=> user.id===action.payload.id ? {...user, followed:true} : user)}
        }
        case UNFOLLOW:{
            return {...state, users:state.users.map(user=> user.id===action.payload.id ? {...user, followed:false} : user)}
        }
        case SET_USERS:{
            return {...state, users:[...state.users,...action.payload.users]}
        }
        default:
            return state
    }
}
type followACType = ReturnType<typeof followAC>
export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            id
        }
    } as const
}
type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            id
        }
    } as const
}
type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users:userPageType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}