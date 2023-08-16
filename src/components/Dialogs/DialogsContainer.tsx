import React from 'react';

import {addMessageAC, messagesPagesType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import { Dispatch } from 'redux';


type DialogsContainerPropsType = {
    // store: ReduxStoreType
    // messagePageDataType: messagesPagesType
    // dispatch: (action: ActionsType) => void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
}


const mapStateToProps = (state:AppStateType):{messagePageData:messagesPagesType,isAuth:boolean} => {
  return {
      messagePageData:state.messagesPages,
      isAuth:state.auth.isAuth
  }
}
type mapDispatchToPropsReturnType={
    addMessage:()=>void,
    updateNewMessage:(newMessage:string)=>void
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsReturnType => {
    return{
        addMessage:()=>{dispatch(addMessageAC())},
        updateNewMessage:(newMessage:string)=>{dispatch(updateNewMessageAC(newMessage))}
    }
}


const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer;