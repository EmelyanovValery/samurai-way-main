const SET_AUTH_DATE = "SET-AUTH-DATE"

type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
}
const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
}

type actionAuthReducerType = setAuthDateType

export const authReducer = (state: AuthStateType = initialState, action:actionAuthReducerType) => {
    switch (action.type){
        case SET_AUTH_DATE:{
            return {...state, ...action.payload.newDate}
        }
        default:{
            return state
        }
    }
}

type setAuthDateType=ReturnType<typeof setAuthDate>
const setAuthDate = (newDate:AuthStateType) => {
    return {
        type: SET_AUTH_DATE,
        payload:{
            newDate
        } as const
    }
}