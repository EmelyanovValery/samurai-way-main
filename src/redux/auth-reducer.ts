

const SET_AUTH_DATE = "SET-AUTH-DATE"
const SET_IS_AUTH="SET-IS-AUTH"
export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth:false
}

type actionAuthReducerType = setAuthDateType | setIsAuth

export const authReducer = (state: AuthStateType = initialState, action:actionAuthReducerType):AuthStateType => {
    switch (action.type){
        case SET_AUTH_DATE:{
            return {...state, ...action.payload.newDate, isAuth: true}
        }
        case SET_IS_AUTH:{
            return {...state, isAuth:action.payload.isAuth}
        }
        default:{
            return state
        }
    }
}

type setAuthDateType=ReturnType<typeof setAuthDate>
export const setAuthDate = (newDate:AuthStateType) => {
    return {
        type: SET_AUTH_DATE,
        payload:{
            newDate
        }
    } as const
}

type setIsAuth=ReturnType<typeof setIsAuth>
export const setIsAuth = (isAuth:boolean) => {
  return{
      type:SET_IS_AUTH,
      payload:{
          isAuth
      }
  } as const
}