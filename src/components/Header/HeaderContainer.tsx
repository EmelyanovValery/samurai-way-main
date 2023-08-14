import React from "react";
import {AuthStateType, getMeTC, setAuthDate, setIsAuth} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = {
    authDate: AuthStateType
    setAuthDate: (newState: AuthStateType) => void
    setIsAuth: (isAuth: boolean) => void
    getMeTC: () => void
}

class HeaderContainerAPI extends React.Component<HeaderContainerPropsType, any> {
    componentDidMount() {
        this.props.getMeTC()
        // authAPI.getMe().then(response=>{
        //     if(response.data.resultCode===0){
        //     this.props.setAuthDate(response.data.data)
        //         this.props.setIsAuth(true)
        //     }
        //     }
        //)
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        authDate: state.auth
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthDate: setAuthDate,
    setIsAuth: setIsAuth,
    getMeTC
})(HeaderContainerAPI)